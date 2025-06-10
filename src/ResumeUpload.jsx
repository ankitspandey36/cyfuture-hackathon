import React, { useState } from 'react';
import { Upload, FileText } from 'lucide-react';
import { Btn } from '../ui/Btn';

const ResumeUpload = () => {
  const [files, setFiles] = useState([]);

  const handleFileChange = (e) => {
    const uploadedFiles = Array.from(e.target.files);
    setFiles(prev => [...prev, ...uploadedFiles]);
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white border border-border rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-foreground">Upload Resumes</h2>
      <p className="text-sm text-muted-foreground mb-6">
        HRs can upload candidate resumes in PDF or DOCX format to start filtering.
      </p>

      <label className="block mb-4">
        <input
          type="file"
          accept=".pdf,.doc,.docx"
          multiple
          onChange={handleFileChange}
          className="hidden"
          id="resumeUpload"
        />
        <div className="flex items-center justify-center border-2 border-dashed border-primary/50 p-8 rounded-lg cursor-pointer hover:border-primary transition">
          <Upload className="w-6 h-6 text-primary mr-2" />
          <span className="text-primary font-medium">Click to Upload Resumes</span>
        </div>
      </label>

      {files.length > 0 && (
        <div className="mt-6">
          <h3 className="text-lg font-semibold mb-2 text-foreground">Uploaded Resumes:</h3>
          <ul className="space-y-2">
            {files.map((file, idx) => (
              <li key={idx} className="flex items-center text-sm text-muted-foreground">
                <FileText className="w-4 h-4 mr-2 text-primary" />
                {file.name}
              </li>
            ))}
          </ul>
        </div>
      )}

      <div className="mt-6">
        <Btn size="sm" className="hover:shadow-md">
          Filter Candidates
        </Btn>
      </div>
    </div>
  );
};

export default ResumeUpload;
