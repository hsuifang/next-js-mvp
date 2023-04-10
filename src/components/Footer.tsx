function Footer() {
  const currentDate: Date = new Date()
  const year = currentDate.getFullYear()
  return (
    <>
      <footer>Copyright {year}</footer>
    </>
  )
}

export default Footer
