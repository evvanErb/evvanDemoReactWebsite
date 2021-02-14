function Splashpage() {
  return (
    <div className="Splashpage" class="d-flex p-3 mx-auto flex-column justify-content-center text-center text-white"
                style={{ backgroundImage: `url("${process.env.PUBLIC_URL}/background.png")`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                height: "700px" }} >

        <main class="px-3">
          <h1 style={{ fontSize: "100px" }} >Evvan Erb</h1>
          <h3 class="lead" style={{ fontSize: "70px" }}>Junior Software Developer</h3>
        </main>
    </div>
  );
}

export default Splashpage;
