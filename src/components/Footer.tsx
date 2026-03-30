const Footer = () => {
  return (
    <footer className="py-8 border-t border-divider">
      <div className="section-container text-center">
        <p className="text-sm text-text-tertiary">
          © {new Date().getFullYear()} Tonya Golden. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
