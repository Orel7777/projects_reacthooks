

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="container-fluid text-bg-danger p-2 text-white text-center">
      <div className="container">
          V.O.D Movies {currentYear}
      </div>
    </div>
  )
}

export default Footer