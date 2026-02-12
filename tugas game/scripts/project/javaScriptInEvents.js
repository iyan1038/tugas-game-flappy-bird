

const scriptsInEvents = {

	async EventSheet1_Event1_Act1(runtime, localVars)
	{
		var bird  = runtime.objects.Sprite.getFirstInstance()
		bird.behaviors.Physics.applyForce(0 , 200)
	},

	async EventSheet1_Event2_Act1(runtime, localVars)
	{
		var bird  = runtime.objects.Sprite.getFirstInstance()
		bird.behaviors.Physics.setVelocity(0,0)
		bird.behaviors.Physics.applyImpulse(0,-100)
	}
};

globalThis.C3.JavaScriptInEvents = scriptsInEvents;
