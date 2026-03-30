const Footer = () => {
  return (
    <footer className="py-8 border-t border-primary/10">
      <div className="section-container text-center">
        <p className="text-xs font-display tracking-wider text-text-tertiary uppercase">
          © {new Date().getFullYear()} Tonya Golden · May the data be with you
        </p>
      </div>
    </footer>
  );
};

export default Footer;
