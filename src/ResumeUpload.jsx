import React, { useState } from "react";
import { UploadCloud, FileSearch } from "lucide-react";

const ResumeUpload = () => {
    const [hrFile, setHrFile] = useState(null);
    const [userFile, setUserFile] = useState(null);

    const handleHRUpload = (e) => setHrFile(e.target.files[0]);
    const handleUserUpload = (e) => setUserFile(e.target.files[0]);

    const submitHR = () => alert(`HR uploaded: ${hrFile?.name}`);
    const submitUser = () => alert(`User uploaded: ${userFile?.name}`);

    return (
        <div className="max-w-4xl mx-auto mt-10 space-y-10 px-4">
            <h1 className="text-3xl font-bold text-center text-primary mb-6">Resume Services</h1>

            {/* Section: HR Upload */}
            <div className="border rounded-2xl p-6 shadow bg-background space-y-4">
                <div className="flex items-center gap-2 text-xl font-semibold text-muted-foreground">
                    <UploadCloud className="w-5 h-5 text-primary" />
                    Upload Resumes for Filtering (HR)
                </div>
                <input type="file" onChange={handleHRUpload} className="mt-2" />
                {hrFile && <p className="text-sm text-green-600">Selected: {hrFile.name}</p>}
                <button
                    onClick={submitHR}
                    className="bg-primary hover:bg-primary/90 text-white px-4 py-2 rounded transition"
                >
                    Upload & Filter
                </button>
            </div>

            {/* Section: Individual Resume Check */}
            <div className="border rounded-2xl p-6 shadow bg-background space-y-4">
                <div className="flex items-center gap-2 text-xl font-semibold text-muted-foreground">
                    <FileSearch className="w-5 h-5 text-primary" />
                    Check Your Resume (Individual)
                </div>
                <input type="file" onChange={handleUserUpload} className="mt-2" />
                {userFile && <p className="text-sm text-blue-600">Selected: {userFile.name}</p>}
                <button
                    onClick={submitUser}
                    className="bg-primary hover:bg-primary/90 text-white px-4 py-2 rounded transition"
                >
                    Analyze Resume
                </button>
            </div>
        </div>
    );
};

export default ResumeUpload;
