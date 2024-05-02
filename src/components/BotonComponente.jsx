export default function BotonComponente({nombre, color}) {


    return <nav class="navbar bg-body-tertiary ">
    <div class="container-fluid" style={{ margin: -20 }}>
      <form class="d-flex" role="search">
        <button class="btn btn-outline-success text-bg-warning p-3" type="submit">{nombre}</button>
      </form>
    </div>
  </nav>;

}
