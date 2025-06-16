export default function Footer() {
  return (
    <footer style={{
      backgroundColor: "#0d1b2a",
      color: "#ccc",
      textAlign: "center",
      padding: "16px",
      marginTop: "40px"
    }}>
      <p>© {new Date().getFullYear()} | Built with ❤️ by Tanveer</p>
    </footer>
  );
}
