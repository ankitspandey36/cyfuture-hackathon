import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-muted py-6 text-center text-muted-foreground text-sm">
      © {new Date().getFullYear()} HR Meetup. All rights reserved.
    </footer>
  );
};

export default Footer;
