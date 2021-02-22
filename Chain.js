class Rope
{

    constructor(A,B)
    {

        var options = 
        {
            lenght:10,
            stiffness:0.028,
            bodyA:A,
            bodyB:B
        }

        this.rope = Matter.Constraint.create(options)

        World.add(world,this.rope)

    }

    display()
    {
        strokeWeight(2);
        line(this.rope.bodyA.position.x,this.rope.bodyA.position.y,this.rope.bodyB.position.x,this.rope.bodyB.position.y)
    }











}