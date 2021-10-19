let bidet;
particles = []
let particle

function preload(){
bidet = loadModel('we.obj', true);

}


function setup() {
  createCanvas(800, 800, WEBGL);
  angleMode(DEGREES)
}


function draw() {
  background(0);

  push()
      scale(2)
      fill(225);
      let locX = mouseX - width / 2;
       let locY = mouseY - height / 2;

       pointLight(250, 250, 250, locX, locY, 250);
       noStroke();

    ambientMaterial(225,225,226225)



      rotateZ(frameCount * 1);
      rotateX(frameCount * 1);
      rotateY(frameCount * 1);
    model(bidet)
      ortho(-width , width , height, -height, 0, 3000);
  pop()



    directionalLight([450], createVector(0,0, -1))






    if (random(1)> 0.97){
    for (var i = 0; i < 100; i++){
      var p = new Particle()
    particles.push(p)
    }
    }
    for (var i = particles.length - 1; i >=0; i--){
    particles[i].update()
    particles[i].show()
    }

    }
    class Particle {
      constructor(){
        this.pos = createVector(0,0,0)
        this.vel = p5.Vector.random3D().normalize().mult(random
          (2,4))
      }

      update(){
        this.pos.add(this.vel)

        }

        show() {
          push()

          noStroke()
          fill(129, 212, 250)

          translate(this.pos.x, this.pos.y, this.pos.z)
    sphere(2)
    pop()








  }
}
