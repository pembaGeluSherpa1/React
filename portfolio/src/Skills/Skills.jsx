import "./Skills.css";

export default function Skill() {
  return (
    <>
      <section class="skills container">
        <div class="header-info">
          <h4>SKILLS</h4>
        </div>
        <div class="using-now ">
          <h4>USING NOW:</h4>
          <div class="grid-skills">
            <div class="grid-item item1">
              <img src="https://portfolio-web-sand-kappa.vercel.app/images/html.svg" />
              <h6>HTML5</h6>
            </div>
            <div class="grid-item">
              <img src="https://portfolio-web-sand-kappa.vercel.app/images/css.svg" />
              <h6>CSS3</h6>
            </div>
            <div class="grid-item">
              <img
                src="https://portfolio-web-sand-kappa.vercel.app/images/javascript.svg
"
              />
              <h6>JavaScript</h6>
            </div>
            <div class="grid-item">
              <img src="https://portfolio-web-sand-kappa.vercel.app/images/react.svg" />
              <h6>React</h6>
            </div>
            <div class="grid-item">
              <img
                src="https://portfolio-web-sand-kappa.vercel.app/images/bootstrap-solid%201.png
"
              />
              <h6>bootstrap</h6>
            </div>
            <div class="grid-item">
              <img src="https://portfolio-web-sand-kappa.vercel.app/images/Git-Icon-1788C%201.png" />
              <h6>Git</h6>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
