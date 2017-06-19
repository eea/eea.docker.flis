(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.ssMetadata = [];


// symbols:
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.SD42 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#262733").s().p("AgLAsIAAgPIAQAAIAAAPgAgKAUIAAgEQAAgGACgFIAEgGIALgMQABgCAAgDQAAgHgDgBQgEgDgFAAIgKACQgFACgEACIAAgOQAEgCAFgCQAFgCAHAAQALAAAIAHQAHAGAAAMQAAAEgCADIgDAGIgFAFQgFADgCAEQgDAFAAAFIAAADg");
	this.shape.setTransform(22.4,15.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#262733").s().p("AgKArIAAhFIgYAAIAAgRIBFAAIAAARIgZAAIAABFg");
	this.shape_1.setTransform(14.6,15.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#262733").s().p("AAWArIgog0IAAA0IgTAAIAAhWIASAAIAlAzIAAgzIAUAAIAABWg");
	this.shape_2.setTransform(5.4,15.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#262733").s().p("AgdArIAAhWIA7AAIAAARIgmAAIAAASIAhAAIAAAQIghAAIAAATIAmAAIAAAQg");
	this.shape_3.setTransform(-3.8,15.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#262733").s().p("AgLArIghhWIAZAAIAUA/IAVg/IAXAAIgjBWg");
	this.shape_4.setTransform(-12.9,15.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#262733").s().p("AgdArIAAhWIA7AAIAAARIgmAAIAAASIAhAAIAAAQIghAAIAAATIAmAAIAAAQg");
	this.shape_5.setTransform(-22,15.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#262733").s().p("AAMAsIgQgfIgNAAIAAAfIgVAAIAAhWIApAAQAPgBAIAIQAJAGAAAOQgBAJgEAGQgEAGgJAEIAWAigAgRgBIARAAQAMAAAAgNQAAgGgDgDQgDgDgFAAIgSAAg");
	this.shape_6.setTransform(44.8,-0.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#262733").s().p("AgdAsIAAhWIA7AAIAAAQIgmAAIAAATIAhAAIAAAPIghAAIAAATIAmAAIAAARg");
	this.shape_7.setTransform(35.5,-0.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#262733").s().p("AgmAsIAAhWIAjAAQAVgBAKALQALALAAAVQAAAWgLAKQgKAMgVAAgAgRAbIAMAAQAKAAAHgHQAFgGAAgOQAAgNgFgGQgHgHgKAAIgMAAg");
	this.shape_8.setTransform(26.5,-0.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#262733").s().p("AgcAsIAAhWIAVAAIAABFIAkAAIAAARg");
	this.shape_9.setTransform(17.7,-0.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#262733").s().p("AgeAiQgLgLAAgXQAAgVALgMQALgLATAAQAUAAALALQALALAAAWQAAAXgLALQgKALgVAAQgTAAgLgLgAgOgVQgGAIAAANQAAAPAGAGQAFAHAJAAQAKAAAFgHQAGgGAAgPQAAgNgFgIQgFgGgLAAQgJAAgFAGg");
	this.shape_10.setTransform(8.4,-0.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#262733").s().p("AAQAsIAAgjIgfAAIAAAjIgVAAIAAhWIAVAAIAAAjIAfAAIAAgjIAVAAIAABWg");
	this.shape_11.setTransform(-1.7,-0.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#262733").s().p("AgdAsIAAhWIA7AAIAAAQIgmAAIAAATIAgAAIAAAPIggAAIAAATIAmAAIAAARg");
	this.shape_12.setTransform(-10.7,-0.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#262733").s().p("AAMAsIgWgiIgGAHIAAAbIgVAAIAAhWIAVAAIAAAkIAZgkIAbAAIghAkIAjAyg");
	this.shape_13.setTransform(-19.4,-0.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#262733").s().p("AAWAsIgHgTIgfAAIgGATIgUAAIAghWIAXAAIAeBWgAgLAJIAVAAIgKggg");
	this.shape_14.setTransform(-29.3,-0.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#262733").s().p("AgKAsIAAhGIgYAAIAAgQIBFAAIAAAQIgYAAIAABGg");
	this.shape_15.setTransform(-37.4,-0.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#262733").s().p("AgPAsQgJgBgFgEIAAgUQAEAEAKAEQAIACAGAAQALAAAAgJQAAgEgEgCIgLgGIgGgBQgIgDgGgFQgFgFgBgLQABgIADgFQAEgGAIgEQAIgEAJAAQAIAAAFABIAMAFIAAAUIgMgHQgHgDgFAAQgGAAgCACQgEACAAAFQAAAEACACIAFADIAJADQAJADAFACQAFADADAEQACAFAAAHQAAAIgDAHQgEAGgGAEQgIADgJAAIgQgBg");
	this.shape_16.setTransform(-45.6,-0.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#262733").s().p("AgcArIAAhVIAVAAIAABFIAkAAIAAAQg");
	this.shape_17.setTransform(31,-15.9);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#262733").s().p("AAWArIgHgTIgfAAIgGATIgUAAIAhhVIAWAAIAeBVgAgLAJIAVAAIgKgfg");
	this.shape_18.setTransform(22,-15.9);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#262733").s().p("AAWArIgng0IAAA0IgUAAIAAhVIASAAIAmAyIAAgyIATAAIAABVg");
	this.shape_19.setTransform(12.1,-15.9);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#262733").s().p("AgeAiQgLgMAAgWQAAgVALgLQALgMATAAQAUAAALALQALALAAAWQAAAWgLALQgKAMgVAAQgTAAgLgLgAgOgVQgFAHAAAOQAAAPAFAHQAFAGAJAAQAKAAAGgGQAFgIAAgOQAAgNgFgIQgFgGgLAAQgJAAgFAGg");
	this.shape_20.setTransform(2,-15.9);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#262733").s().p("AgKArIAAhVIAUAAIAABVg");
	this.shape_21.setTransform(-5.4,-15.9);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#262733").s().p("AgKArIAAhFIgYAAIAAgQIBFAAIAAAQIgZAAIAABFg");
	this.shape_22.setTransform(-11.9,-15.9);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#262733").s().p("AAVArIgFgTIggAAIgHATIgTAAIAhhVIAVAAIAfBVgAgLAJIAVAAIgKgfg");
	this.shape_23.setTransform(-20,-15.9);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#262733").s().p("AAWArIgng0IAAA0IgUAAIAAhVIASAAIAmAyIAAgyIATAAIAABVg");
	this.shape_24.setTransform(-29.9,-15.9);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#3F3B4F").ss(3).p("AtRtRIAAajIajAAIAA6jg");

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AtRNSIAA6jIajAAIAAajg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer 2
	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("rgba(255,255,255,0.02)").s().p("AwZQaMAAAggzMAgzAAAMAAAAgzg");

	this.timeline.addTween(cjs.Tween.get(this.shape_27).wait(1));

}).prototype = getMCSymbolPrototype(lib.SD42, new cjs.Rectangle(-105,-105,210,210), null);


(lib.SD41 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgEAbIAAgrIgRAAIAAgKIArAAIAAAKIgRAAIAAArg");
	this.shape.setTransform(41.4,80.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AANAbIgagnIAAAnIgKAAIAAg1IALAAIAbAnIAAgnIAJAAIAAA1g");
	this.shape_1.setTransform(35.7,80.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgRAbIAAg1IAjAAIAAAJIgZAAIAAAOIAVAAIAAAIIgVAAIAAANIAZAAIAAAJg");
	this.shape_2.setTransform(30,80.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AARAbIAAgnIgRAXIgQgXIAAAnIgJAAIAAg1IAKAAIAPAXIAQgXIAKAAIAAA1g");
	this.shape_3.setTransform(23.8,80.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgRAXIAAgKQAHAFAJAAQAKAAAAgGQAAAAAAgBQAAgBgBAAQAAgBAAAAQgBgBAAAAIgFgDIgGgCIgGgDQgDAAgCgDQgCgDAAgFQAAgHAFgEQAFgEAIAAQAHAAAHADIAAAKQgGgEgHAAQgEAAgDABQgDACAAADQAAADADABIAGADIAIACQAEACADADQACAEAAAGQAAAGgFAEQgFAEgIAAQgJAAgIgEg");
	this.shape_4.setTransform(17.8,80.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgRAXIAAgKQAHAFAJAAQAKAAAAgGQAAAAAAgBQgBgBAAAAQAAgBAAAAQgBgBAAAAIgFgDIgGgCIgGgDQgDAAgCgDQgCgDAAgFQAAgHAFgEQAFgEAIAAQAHAAAHADIAAAKQgGgEgHAAQgEAAgDABQgDACAAADQAAADADABIAGADIAIACQAEACADADQACAEAAAGQAAAGgFAEQgFAEgIAAQgJAAgIgEg");
	this.shape_5.setTransform(12.8,80.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgRAbIAAg1IAjAAIAAAJIgZAAIAAAOIAVAAIAAAIIgVAAIAAANIAZAAIAAAJg");
	this.shape_6.setTransform(7.9,80.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgRAXIAAgKQAHAFAJAAQAKAAAAgGQAAAAAAgBQAAgBgBAAQAAgBAAAAQgBgBAAAAIgFgDIgGgCIgGgDQgDAAgCgDQgCgDAAgFQAAgHAFgEQAFgEAIAAQAHAAAHADIAAAKQgGgEgHAAQgEAAgDABQgDACAAADQAAADADABIAGADIAIACQAEACADADQACAEAAAGQAAAGgFAEQgFAEgIAAQgJAAgIgEg");
	this.shape_7.setTransform(2.7,80.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgRAXIAAgKQAHAFAJAAQAKAAAAgGQAAAAAAgBQgBgBAAAAQAAgBAAAAQgBgBAAAAIgFgDIgGgCIgGgDQgDAAgCgDQgCgDAAgFQAAgHAFgEQAFgEAIAAQAHAAAHADIAAAKQgGgEgHAAQgEAAgDABQgDACAAADQAAADADABIAGADIAIACQAEACADADQACAEAAAGQAAAGgFAEQgFAEgIAAQgJAAgIgEg");
	this.shape_8.setTransform(-2.3,80.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AARAbIgGgNIgVAAIgFANIgKAAIAVg1IAJAAIAWA1gAAIAFIgIgUIgHAUIAPAAg");
	this.shape_9.setTransform(-7.8,80.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgRAbIAAg1IAjAAIAAAJIgZAAIAAAOIAVAAIAAAIIgVAAIAAANIAZAAIAAAJg");
	this.shape_10.setTransform(-16.3,80.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgRAbIAAg1IAKAAIAAAsIAYAAIAAAJg");
	this.shape_11.setTransform(-21.1,80.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgGAbIgHgDQgDgCgCgDQgDgCgBgFQgCgFAAgHQAAgFACgFQABgFADgDQACgDADgCIAHgDIAGAAIAHAAIAHADIAGAFIADAIQACAFAAAFQAAAHgCAFQgBAFgCACIgGAFIgHADIgHAAIgGAAgAgEgRIgEABIgDADIgCAGIgBAHIABAKIADAGIAFACIAFABIAFAAIAEgCIADgDIADgGIAAgIIgBgJIgDgGIgFgCIgGgBg");
	this.shape_12.setTransform(-27,80.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AALAbIAAgWIgWAAIAAAWIgJAAIAAg1IAJAAIAAAXIAWAAIAAgXIAKAAIAAA1g");
	this.shape_13.setTransform(-33.1,80.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AAMAbIgLglIgMAlIgKAAIgRg1IAKAAIANAoIAMgoIAHAAIANAmIAMgmIAJAAIgRA1g");
	this.shape_14.setTransform(-40.3,80.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AANAbIgagnIAAAnIgKAAIAAg1IALAAIAbAnIAAgnIAJAAIAAA1g");
	this.shape_15.setTransform(35,69.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgGAbIgHgDQgDgCgCgDQgDgCgBgFQgCgFAAgHQAAgFACgFQABgFADgDQACgDADgCIAHgDIAGAAIAHAAIAHADIAGAFIADAIQACAFAAAFQAAAHgCAFQgBAFgCACIgGAFIgHADIgHAAIgGAAgAgEgRIgEABIgDADIgCAGIgBAHIABAKIADAGIAFACIAFABIAFAAIAEgCIADgDIADgGIAAgIIgBgJIgDgGIgFgCIgGgBg");
	this.shape_16.setTransform(28.5,69.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgEAbIAAgrIgRAAIAAgKIArAAIAAAKIgRAAIAAArg");
	this.shape_17.setTransform(19.7,69.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AAKAbIgMgTIgJAAIAAATIgJAAIAAg1IAUAAQAJAAAFAFQAFAEAAAJQAAALgMADIAOAVgAgLAAIALAAQAEAAADgCQACgBAAgFQAAgFgCgCQgDgCgEAAIgLAAg");
	this.shape_18.setTransform(14.7,69.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgGAbIgHgDQgDgCgCgDQgDgCgBgFQgCgFAAgHQAAgFACgFQABgFADgDQACgDADgCIAHgDIAGAAIAHAAIAHADIAGAFIADAIQACAFAAAFQAAAHgCAFQgBAFgCACIgGAFIgHADIgHAAIgGAAgAgEgRIgEABIgDADIgCAGIgBAHIABAKIADAGIAFACIAFABIAFAAIAEgCIADgDIADgGIAAgIIgBgJIgDgGIgFgCIgGgBg");
	this.shape_19.setTransform(8.4,69.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgTAbIAAg1IATAAQAKAAAFAFQAFAFAAAIQAAAIgFAEQgFAFgKAAIgJAAIAAASgAgJABIAJAAQAGAAACgCQACgCAAgFQAAgEgCgDQgCgCgGAAIgJAAg");
	this.shape_20.setTransform(2.8,69.5);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgRAbIAAg1IAjAAIAAAJIgZAAIAAAOIAVAAIAAAIIgVAAIAAANIAZAAIAAAJg");
	this.shape_21.setTransform(-2.5,69.5);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AAKAbIgMgTIgJAAIAAATIgJAAIAAg1IAUAAQAJAAAFAFQAFAEAAAJQAAALgMADIAOAVgAgLAAIALAAQAEAAADgCQACgBAAgFQAAgFgCgCQgDgCgEAAIgLAAg");
	this.shape_22.setTransform(-7.8,69.5);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgQAbIAAg1IAJAAIAAAsIAZAAIAAAJg");
	this.shape_23.setTransform(-16,69.5);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AARAbIgGgNIgVAAIgFANIgLAAIAWg1IAKAAIAVA1gAAIAFIgIgUIgHAUIAPAAg");
	this.shape_24.setTransform(-21.6,69.5);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AANAbIgagnIAAAnIgKAAIAAg1IALAAIAaAnIAAgnIAKAAIAAA1g");
	this.shape_25.setTransform(-27.9,69.5);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgEAbIAAg1IAJAAIAAA1g");
	this.shape_26.setTransform(-32.5,69.5);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgQAbIAAg1IAhAAIAAAJIgYAAIAAAOIAVAAIAAAIIgVAAIAAAWg");
	this.shape_27.setTransform(-36.1,69.5);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#2FB7AA").s().p("AnwDAIAAl/IPhAAIAAF/g");
	this.shape_28.setTransform(0,75.4);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#262733").s().p("AgKArIAAhCIgZAAIAAgTIBHAAIAAATIgZAAIAABCg");
	this.shape_29.setTransform(72,-2.7);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#262733").s().p("AgcArIAAhVIA5AAIAAASIgjAAIAAARIAfAAIAAARIgfAAIAAAhg");
	this.shape_30.setTransform(64.2,-2.7);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#262733").s().p("AAVArIgGgVIgcAAIgHAVIgYAAIAihVIAVAAIAiBVgAAJAGIgJgaIgIAaIARAAg");
	this.shape_31.setTransform(54.8,-2.7);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#262733").s().p("AALArIgPgdIgJAAIAAAdIgWAAIAAhVIAiAAQAPAAAJAHQAKAHAAAOQAAAKgFAGQgFAGgIADIAVAggAgNgCIANAAQAEAAADgDQADgDAAgFQAAgFgDgDQgDgDgEAAIgNAAg");
	this.shape_32.setTransform(45.4,-2.7);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#262733").s().p("AgjArIAAhVIAfAAQATAAALALQAKALAAAUQAAAVgKALQgLALgTAAgAgNAZIAJAAQASAAAAgZQAAgYgSAAIgJAAg");
	this.shape_33.setTransform(35.6,-2.7);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#262733").s().p("AgKArIAAhCIgZAAIAAgTIBHAAIAAATIgZAAIAABCg");
	this.shape_34.setTransform(21.5,-2.7);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#262733").s().p("AALArIgPgdIgJAAIAAAdIgWAAIAAhVIAiAAQAPAAAJAHQAKAHAAAOQAAAKgFAGQgFAGgIADIAVAggAgNgCIANAAQAEAAADgDQADgDAAgFQAAgFgDgDQgDgDgEAAIgNAAg");
	this.shape_35.setTransform(13.1,-2.7);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#262733").s().p("AgLArQgFgBgFgDQgGgDgEgFQgEgFgCgIQgDgIAAgKQAAgKADgIQACgIAEgFQAEgEAGgDQAFgDAFgBIALgBIALABQAGABAFADQAGADAEAEQAEAFACAIQADAIAAAKQAAAKgDAIQgCAIgEAFQgEAFgGADQgFADgGABQgFABgGAAQgFAAgGgBgAgMgTQgFAGAAANQAAAOAFAFQAFAGAHAAQAIAAAFgGQAFgFAAgOQAAgNgFgGQgFgFgIAAQgHAAgFAFg");
	this.shape_36.setTransform(2.8,-2.7);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#262733").s().p("AghArIAAhVIAiAAQAQAAAJAIQAIAIAAAOQAAANgIAIQgJAIgQAAIgMAAIAAAagAgLAAIALAAQAGAAADgDQADgEAAgFQAAgFgDgEQgDgDgGAAIgLAAg");
	this.shape_37.setTransform(-6.6,-2.7);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#262733").s().p("AgdArIAAhVIA7AAIAAASIglAAIAAAQIAgAAIAAARIggAAIAAAQIAlAAIAAASg");
	this.shape_38.setTransform(-15.4,-2.7);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#262733").s().p("AALArIgPgdIgJAAIAAAdIgWAAIAAhVIAiAAQAPAAAJAHQAKAHAAAOQAAAKgFAGQgFAGgIADIAVAggAgNgCIANAAQAEAAADgDQADgDAAgFQAAgFgDgDQgDgDgEAAIgNAAg");
	this.shape_39.setTransform(-24.3,-2.7);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#262733").s().p("AgdArIAAhVIAWAAIAABCIAlAAIAAATg");
	this.shape_40.setTransform(-37.9,-2.7);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#262733").s().p("AAVArIgHgVIgbAAIgGAVIgZAAIAjhVIAUAAIAiBVgAAJAGIgJgaIgHAaIAQAAg");
	this.shape_41.setTransform(-47.4,-2.7);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#262733").s().p("AASArIgjgyIAAAyIgWAAIAAhVIAWAAIAjAzIAAgzIAWAAIAABVg");
	this.shape_42.setTransform(-57.9,-2.7);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#262733").s().p("AgKArIAAhVIAVAAIAABVg");
	this.shape_43.setTransform(-65.8,-2.7);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#262733").s().p("AgcArIAAhVIA5AAIAAASIgjAAIAAARIAfAAIAAARIgfAAIAAAhg");
	this.shape_44.setTransform(-72.1,-2.7);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#262733").s().p("AgjArIAAhVIAfAAQATAAALALQAKALAAAUQAAAVgKALQgLALgTAAgAgNAZIAJAAQASAAAAgZQAAgYgSAAIgJAAg");
	this.shape_45.setTransform(46.7,-20.6);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#262733").s().p("AAVArIgHgVIgbAAIgHAVIgYAAIAihVIAVAAIAiBVgAAJAGIgJgaIgHAaIAQAAg");
	this.shape_46.setTransform(36.6,-20.6);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#262733").s().p("AgdArIAAhVIA7AAIAAASIglAAIAAAQIAgAAIAAARIggAAIAAAQIAlAAIAAASg");
	this.shape_47.setTransform(27.5,-20.6);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#262733").s().p("AgdArIAAhVIAWAAIAABCIAlAAIAAATg");
	this.shape_48.setTransform(19.4,-20.6);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#262733").s().p("AgKArIAAhCIgZAAIAAgTIBHAAIAAATIgZAAIAABCg");
	this.shape_49.setTransform(5.9,-20.6);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#262733").s().p("AgHAqQgHgCgGgEQgGgFgEgJQgDgJAAgNQAAgMADgKQAEgJAGgEQAGgFAHgCQAHgBAGAAQANAAAPAGIAAATQgNgGgNAAQgIAAgGAFQgFAGAAANQAAAOAFAGQAGAFAIAAQANAAANgGIAAATQgPAGgNAAQgGAAgHgCg");
	this.shape_50.setTransform(-2.5,-20.6);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#262733").s().p("AgdArIAAhVIA7AAIAAASIglAAIAAAQIAgAAIAAARIggAAIAAAQIAlAAIAAASg");
	this.shape_51.setTransform(-11.1,-20.6);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#262733").s().p("AgZAlIAAgVQAJAJAKAAQAFAAACgDQACgDAAgFIAAg5IAXAAIAAA3QAAAIgCAGQgCAGgDADQgDADgFACIgHADIgHABQgLAAgLgHg");
	this.shape_52.setTransform(-19.6,-20.6);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#262733").s().p("AgLArQgFgBgFgDQgGgDgEgFQgEgFgCgIQgDgIAAgKQAAgKADgIQACgIAEgFQAEgEAGgDQAFgDAFgBIALgBIALABQAGABAFADQAGADAEAEQAEAFACAIQADAIAAAKQAAAKgDAIQgCAIgEAFQgEAFgGADQgFADgGABQgFABgGAAQgFAAgGgBgAgMgTQgFAGAAANQAAAOAFAFQAFAGAHAAQAIAAAFgGQAFgFAAgOQAAgNgFgGQgFgFgIAAQgHAAgFAFg");
	this.shape_53.setTransform(-28,-20.6);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#262733").s().p("AALArIgPgdIgJAAIAAAdIgWAAIAAhVIAiAAQAPAAAJAHQAKAHAAAOQAAAKgFAGQgFAGgIADIAVAggAgNgCIANAAQAEAAADgDQADgDAAgFQAAgFgDgDQgDgDgEAAIgNAAg");
	this.shape_54.setTransform(-37.6,-20.6);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#262733").s().p("AghArIAAhVIAiAAQAQAAAJAIQAIAIAAAOQAAANgIAIQgJAIgQAAIgMAAIAAAagAgLAAIALAAQAGAAADgDQADgEAAgFQAAgFgDgEQgDgDgGAAIgLAAg");
	this.shape_55.setTransform(-46.9,-20.6);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f().s("#3F3B4F").ss(3).p("AtRtRIAAajIajAAIAA6jg");
	this.shape_56.setTransform(0,-9.6);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FFFFFF").s().p("AtRNSIAA6jIajAAIAAajg");
	this.shape_57.setTransform(0,-9.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer 2
	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("rgba(255,255,255,0.02)").s().p("AwZQaMAAAggzMAgzAAAMAAAAgzg");
	this.shape_58.setTransform(0.1,-9.6);

	this.timeline.addTween(cjs.Tween.get(this.shape_58).wait(1));

}).prototype = getMCSymbolPrototype(lib.SD41, new cjs.Rectangle(-104.9,-114.6,210,210), null);


(lib.SD38 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgRAXIAAgKQAHAFAJAAQAKAAAAgGQAAAAAAgBQAAgBgBAAQAAgBAAAAQgBgBAAAAIgFgDIgGgCIgGgDQgDAAgCgDQgCgDAAgFQAAgHAFgEQAFgEAIAAQAHAAAHADIAAAKQgGgEgHAAQgEAAgDABQgDACAAADQAAADADABIAGADIAIACQAEACADADQACAEAAAGQAAAGgFAEQgFAEgIAAQgJAAgIgEg");
	this.shape.setTransform(73.9,87.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgEAbIAAgrIgRAAIAAgKIArAAIAAAKIgRAAIAAArg");
	this.shape_1.setTransform(68.9,87.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgRAbIAAg1IAKAAIAAAsIAZAAIAAAJg");
	this.shape_2.setTransform(64.3,87.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgPAVQgGgGAAgLIAAgeIAJAAIAAAeQAAAIADADQADADAGAAQAHAAADgDQADgDAAgIIAAgeIAJAAIAAAeQAAALgFAGQgGAGgLAAQgKAAgFgGg");
	this.shape_3.setTransform(58.5,87.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgRAXIAAgKQAHAFAJAAQAKAAAAgGQAAAAAAgBQgBgBAAAAQAAgBAAAAQgBgBAAAAIgFgDIgGgCIgGgDQgDAAgCgDQgCgDAAgFQAAgHAFgEQAFgEAIAAQAHAAAHADIAAAKQgGgEgHAAQgEAAgDABQgDACAAADQAAADADABIAGADIAIACQAEACADADQACAEAAAGQAAAGgFAEQgFAEgIAAQgJAAgIgEg");
	this.shape_4.setTransform(52.9,87.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgRAbIAAg1IAjAAIAAAJIgZAAIAAAOIAVAAIAAAIIgVAAIAAANIAZAAIAAAJg");
	this.shape_5.setTransform(47.9,87.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAKAbIgMgTIgJAAIAAATIgJAAIAAg1IAUAAQAJAAAFAFQAFAEAAAJQAAALgMADIAOAVgAgLAAIALAAQAEAAADgCQACgBAAgFQAAgFgCgCQgDgCgEAAIgLAAg");
	this.shape_6.setTransform(42.7,87.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgRAbIAAgIIAIgGIAIgIIAGgHQACgFAAgDQAAgBAAAAQAAgBgBgBQAAAAAAgBQgBAAAAAAQgDgCgEgBIgIACIgHADIAAgJQAJgFAHAAQAIAAAFAFQAEAEAAAHQAAAHgEAHQgGAHgHAGIASAAIAAAKg");
	this.shape_7.setTransform(34,87.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgTAbIAAg1IATAAQAKAAAFAFQAFAFAAAIQAAAIgFAEQgFAFgKAAIgJAAIAAASgAgJABIAJAAQAGAAACgCQACgCAAgFQAAgEgCgDQgCgCgGAAIgJAAg");
	this.shape_8.setTransform(83.9,76.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgGAbIgHgDQgDgCgCgDQgDgCgBgFQgCgFAAgHQAAgFACgFQABgFADgDQACgDADgCIAHgDIAGAAIAHAAIAHADIAGAFIADAIQACAFAAAFQAAAHgCAFQgBAFgCACIgGAFIgHADIgHAAIgGAAgAgEgRIgEABIgDADIgCAGIgBAHIABAKIADAGIAFACIAFABIAFAAIAEgCIADgDIADgGIAAgIIgBgJIgDgGIgFgCIgGgBg");
	this.shape_9.setTransform(77.8,76.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AALAbIAAgWIgVAAIAAAWIgKAAIAAg1IAKAAIAAAXIAVAAIAAgXIAKAAIAAA1g");
	this.shape_10.setTransform(71.7,76.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgRAXIAAgKQAHAFAJAAQAKAAAAgGQAAAAAAgBQAAgBgBAAQAAgBAAAAQgBgBAAAAIgFgDIgGgCIgGgDQgDAAgCgDQgCgDAAgFQAAgHAFgEQAFgEAIAAQAHAAAHADIAAAKQgGgEgHAAQgEAAgDABQgDACAAADQAAABAAAAQABABAAAAQAAABABAAQAAABABAAIAGADIAIACQAEACADADQACAEAAAGQAAAGgFAEQgFAEgIAAQgJAAgIgEg");
	this.shape_11.setTransform(66.2,76.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AALAbIgRgXIgGAFIAAASIgKAAIAAg1IAKAAIAAAXIATgXIANAAIgUAYIAWAdg");
	this.shape_12.setTransform(61,76.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AAKAbIgMgTIgJAAIAAATIgJAAIAAg1IAUAAQAJAAAFAFQAFAEAAAJQAAALgMADIAOAVgAgLAAIALAAQAEAAADgCQACgBAAgFQAAgFgCgCQgDgCgEAAIgLAAg");
	this.shape_13.setTransform(55.2,76.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgGAbIgHgDQgDgCgCgDQgDgCgBgFQgCgFAAgHQAAgFACgFQABgFADgDQACgDADgCIAHgDIAGAAIAHAAIAHADIAGAFIADAIQACAFAAAFQAAAHgCAFQgBAFgCACIgGAFIgHADIgHAAIgGAAgAgEgRIgEABIgDADIgCAGIgBAHIABAKIADAGIAFACIAFABIAFAAIAEgCIADgDIADgGIAAgIIgBgJIgDgGIgFgCIgGgBg");
	this.shape_14.setTransform(49,76.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AAMAbIgLglIgMAlIgKAAIgRg1IAKAAIANAoIAMgoIAHAAIANAmIAMgmIAKAAIgSA1g");
	this.shape_15.setTransform(41.6,76.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AANAbIgbgnIAAAnIgJAAIAAg1IALAAIAbAnIAAgnIAJAAIAAA1g");
	this.shape_16.setTransform(31.1,76.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgGAbIgHgDQgDgCgCgDQgDgCgBgFQgCgFAAgHQAAgFACgFQABgFADgDQACgDADgCIAHgDIAGAAIAHAAIAHADIAGAFIADAIQACAFAAAFQAAAHgCAFQgBAFgCACIgGAFIgHADIgHAAIgGAAgAgEgRIgEABIgDADIgCAGIgBAHIABAKIADAGIAFACIAFABIAFAAIAEgCIADgDIADgGIAAgIIgBgJIgDgGIgFgCIgGgBg");
	this.shape_17.setTransform(24.6,76.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgEAbIAAgrIgRAAIAAgKIArAAIAAAKIgRAAIAAArg");
	this.shape_18.setTransform(81.9,65.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AAKAbIgMgTIgJAAIAAATIgJAAIAAg1IAUAAQAJAAAFAFQAFAEAAAJQAAALgMADIAOAVgAgLAAIALAAQAEAAADgCQACgBAAgFQAAgFgCgCQgDgCgEAAIgLAAg");
	this.shape_19.setTransform(76.8,65.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgGAbIgHgDQgDgCgCgDQgDgCgBgFQgCgFAAgHQAAgFACgFQABgFADgDQACgDADgCIAHgDIAGAAIAHAAIAHADIAGAFIADAIQACAFAAAFQAAAHgCAFQgBAFgCACIgGAFIgHADIgHAAIgGAAgAgEgRIgEABIgDADIgCAGIgBAHIABAKIADAGIAFACIAFABIAFAAIAEgCIADgDIADgGIAAgIIgBgJIgDgGIgFgCIgGgBg");
	this.shape_20.setTransform(70.6,65.2);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgTAbIAAg1IATAAQAKAAAFAFQAFAFAAAIQAAAIgFAEQgFAFgKAAIgJAAIAAASgAgJABIAJAAQAGAAACgCQACgCAAgFQAAgEgCgDQgCgCgGAAIgJAAg");
	this.shape_21.setTransform(64.9,65.2);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgRAbIAAg1IAjAAIAAAJIgZAAIAAAOIAVAAIAAAIIgVAAIAAANIAZAAIAAAJg");
	this.shape_22.setTransform(59.6,65.2);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AAKAbIgMgTIgJAAIAAATIgJAAIAAg1IAUAAQAJAAAFAFQAFAEAAAJQAAALgMADIAOAVgAgLAAIALAAQAEAAADgCQACgBAAgFQAAgFgCgCQgDgCgEAAIgLAAg");
	this.shape_23.setTransform(54.4,65.2);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgRAbIAAg1IAKAAIAAAsIAYAAIAAAJg");
	this.shape_24.setTransform(46.2,65.2);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AAQAbIgEgNIgWAAIgFANIgKAAIAVg1IAJAAIAVA1gAAIAFIgIgUIgHAUIAPAAg");
	this.shape_25.setTransform(40.5,65.2);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AANAbIgbgnIAAAnIgJAAIAAg1IALAAIAbAnIAAgnIAJAAIAAA1g");
	this.shape_26.setTransform(34.3,65.2);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgEAbIAAg1IAJAAIAAA1g");
	this.shape_27.setTransform(29.6,65.2);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgQAbIAAg1IAhAAIAAAJIgYAAIAAAOIAVAAIAAAIIgVAAIAAAWg");
	this.shape_28.setTransform(26,65.2);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#2FB7AA").s().p("AmGDAIAAl/IMNAAIAAF/g");
	this.shape_29.setTransform(54.1,75.4);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgRAXIAAgKQAHAFAJAAQAKAAAAgGQAAAAAAgBQgBgBAAAAQAAgBAAAAQgBgBAAAAIgFgDIgGgCIgGgDQgDAAgCgDQgCgDAAgFQAAgHAFgEQAFgEAIAAQAHAAAHADIAAAKQgGgEgHAAQgEAAgDABQgDACAAADQAAABAAAAQABABAAAAQAAABABAAQAAABABAAIAGADIAIACQAEACADADQACAEAAAGQAAAGgFAEQgFAEgIAAQgJAAgIgEg");
	this.shape_30.setTransform(-34.3,87.5);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgEAbIAAgrIgRAAIAAgKIArAAIAAAKIgRAAIAAArg");
	this.shape_31.setTransform(-39.3,87.5);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AgQAbIAAg1IAJAAIAAAsIAZAAIAAAJg");
	this.shape_32.setTransform(-43.9,87.5);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AgPAVQgGgGAAgLIAAgeIAJAAIAAAeQAAAIADADQADADAGABQAHgBADgDQADgDAAgIIAAgeIAJAAIAAAeQAAALgFAGQgGAGgLAAQgKAAgFgGg");
	this.shape_33.setTransform(-49.7,87.5);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AgRAXIAAgKQAHAFAJAAQAKAAAAgGQAAAAAAgBQAAgBgBAAQAAgBAAAAQgBgBAAAAIgFgDIgGgCIgGgDQgDAAgCgDQgCgDAAgFQAAgHAFgEQAFgEAIAAQAHAAAHADIAAAKQgGgEgHAAQgEAAgDABQgDACAAADQAAABAAAAQABABAAAAQAAABABAAQABABAAAAIAGADIAIACQAEACADADQACAEAAAGQAAAGgFAEQgFAEgIAAQgJAAgIgEg");
	this.shape_34.setTransform(-55.3,87.5);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AgRAbIAAg1IAjAAIAAAJIgZAAIAAAOIAVAAIAAAIIgVAAIAAANIAZAAIAAAJg");
	this.shape_35.setTransform(-60.3,87.5);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AAKAbIgMgTIgJAAIAAATIgJAAIAAg1IAUAAQAJAAAFAFQAFAEAAAJQAAALgMADIAOAVgAgLAAIALAAQAEAAADgCQACgBAAgFQAAgFgCgCQgDgCgEAAIgLAAg");
	this.shape_36.setTransform(-65.5,87.5);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AgRAbIAAgIIAIgGIAIgHIAGgIQACgEAAgEQAAgBAAAAQAAgBgBgBQAAAAAAgBQgBAAAAgBQgDgCgDAAIgIACIgIADIAAgJQAJgFAHAAQAJAAAEAFQAEAFABAGQAAAHgGAHQgFAHgGAGIARAAIAAAKg");
	this.shape_37.setTransform(-74.2,87.5);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AgTAbIAAg1IATAAQAKAAAFAFQAFAFAAAIQAAAIgFAEQgFAFgKAAIgJAAIAAASgAgJABIAJAAQAGAAACgCQACgCAAgFQAAgEgCgDQgCgCgGAAIgJAAg");
	this.shape_38.setTransform(-24.3,76.5);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AgGAbIgHgDQgDgCgCgDQgDgCgBgFQgCgFAAgHQAAgFACgFQABgFADgDQACgDADgCIAHgDIAGAAIAHAAIAHADIAGAFIADAIQACAFAAAFQAAAHgCAFQgBAFgCACIgGAFIgHADIgHAAIgGAAgAgEgRIgEABIgDADIgCAGIgBAHIABAKIADAGIAFACIAFABIAFAAIAEgCIADgDIADgGIAAgIIgBgJIgDgGIgFgCIgGgBg");
	this.shape_39.setTransform(-30.4,76.5);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AALAbIAAgWIgVAAIAAAWIgKAAIAAg1IAKAAIAAAXIAVAAIAAgXIAKAAIAAA1g");
	this.shape_40.setTransform(-36.5,76.5);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AgRAXIAAgKQAHAFAJAAQAKAAAAgGQAAgBAAAAQgBgBAAAAQAAgBAAAAQgBgBAAAAIgFgDIgGgCIgGgDQgDAAgCgDQgCgDAAgFQAAgHAFgEQAFgEAIAAQAHAAAHADIAAAKQgGgEgHAAQgEAAgDABQgDACAAADQAAABAAAAQABABAAABQAAAAABAAQAAABABAAIAGADIAIACQAEACADADQACAEAAAGQAAAGgFAEQgFAEgIAAQgJAAgIgEg");
	this.shape_41.setTransform(-42,76.5);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AALAbIgRgXIgGAFIAAASIgKAAIAAg1IAKAAIAAAXIATgXIANAAIgVAYIAXAdg");
	this.shape_42.setTransform(-47.2,76.5);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AAKAbIgMgTIgJAAIAAATIgJAAIAAg1IAUAAQAJAAAFAFQAFAEAAAJQAAALgMADIAOAVgAgLAAIALAAQAEAAADgCQACgBAAgFQAAgFgCgCQgDgCgEAAIgLAAg");
	this.shape_43.setTransform(-53,76.5);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AgGAbIgHgDQgDgCgCgDQgDgCgBgFQgCgFAAgHQAAgFACgFQABgFADgDQACgDADgCIAHgDIAGAAIAHAAIAHADIAGAFIADAIQACAFAAAFQAAAHgCAFQgBAFgCACIgGAFIgHADIgHAAIgGAAgAgEgRIgEABIgDADIgCAGIgBAHIABAKIADAGIAFACIAFABIAFAAIAEgCIADgDIADgGIAAgIIgBgJIgDgGIgFgCIgGgBg");
	this.shape_44.setTransform(-59.2,76.5);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AANAbIgMglIgMAlIgKAAIgRg1IAKAAIANAoIAMgoIAHAAIANAmIAMgmIAKAAIgRA1g");
	this.shape_45.setTransform(-66.6,76.5);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("AANAbIgbgnIAAAnIgJAAIAAg1IALAAIAaAnIAAgnIAKAAIAAA1g");
	this.shape_46.setTransform(-77.1,76.5);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("AgGAbIgHgDQgDgCgCgDQgDgCgBgFQgCgFAAgHQAAgFACgFQABgFADgDQACgDADgCIAHgDIAGAAIAHAAIAHADIAGAFIADAIQACAFAAAFQAAAHgCAFQgBAFgCACIgGAFIgHADIgHAAIgGAAgAgEgRIgEABIgDADIgCAGIgBAHIABAKIADAGIAFACIAFABIAFAAIAEgCIADgDIADgGIAAgIIgBgJIgDgGIgFgCIgGgBg");
	this.shape_47.setTransform(-83.6,76.5);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFFFF").s().p("AgEAbIAAgrIgRAAIAAgKIArAAIAAAKIgRAAIAAArg");
	this.shape_48.setTransform(-25.1,65.5);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFFFF").s().p("AgQAbIAAg1IAhAAIAAAJIgYAAIAAAOIAVAAIAAAIIgVAAIAAAWg");
	this.shape_49.setTransform(-29.8,65.5);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFFFFF").s().p("AAQAbIgFgNIgVAAIgFANIgLAAIAWg1IAKAAIAUA1gAAIAFIgIgUIgHAUIAPAAg");
	this.shape_50.setTransform(-35.4,65.5);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFFFFF").s().p("AAKAbIgMgTIgJAAIAAATIgJAAIAAg1IAUAAQAJAAAFAFQAFAEAAAJQAAALgMADIAOAVgAgLAAIALAAQAEAAADgCQACgBAAgFQAAgFgCgCQgDgCgEAAIgLAAg");
	this.shape_51.setTransform(-41,65.5);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FFFFFF").s().p("AgVAbIAAg1IATAAQALAAAGAHQAHAHAAAMQAAANgHAHQgGAHgLAAgAgLASIAJAAQAHAAAEgEQADgEAAgKQAAgJgDgEQgEgEgHAAIgJAAg");
	this.shape_52.setTransform(-46.8,65.5);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFFFFF").s().p("AgEAbIAAgrIgRAAIAAgKIArAAIAAAKIgRAAIAAArg");
	this.shape_53.setTransform(-55.5,65.5);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FFFFFF").s().p("AAKAbIgMgTIgJAAIAAATIgJAAIAAg1IAUAAQAJAAAFAFQAFAEAAAJQAAALgMADIAOAVgAgLAAIALAAQAEAAADgCQACgBAAgFQAAgFgCgCQgDgCgEAAIgLAAg");
	this.shape_54.setTransform(-60.5,65.5);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FFFFFF").s().p("AgGAbIgHgDQgDgCgCgDQgDgCgBgFQgCgFAAgHQAAgFACgFQABgFADgDQACgDADgCIAHgDIAGAAIAHAAIAHADIAGAFIADAIQACAFAAAFQAAAHgCAFQgBAFgCACIgGAFIgHADIgHAAIgGAAgAgEgRIgEABIgDADIgCAGIgBAHIABAKIADAGIAFACIAFABIAFAAIAEgCIADgDIADgGIAAgIIgBgJIgDgGIgFgCIgGgBg");
	this.shape_55.setTransform(-66.8,65.5);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FFFFFF").s().p("AgTAbIAAg1IATAAQAKAAAFAFQAFAFAAAIQAAAIgFAEQgFAFgKAAIgJAAIAAASgAgJABIAJAAQAGAAACgCQACgCAAgFQAAgEgCgDQgCgCgGAAIgJAAg");
	this.shape_56.setTransform(-72.4,65.5);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FFFFFF").s().p("AgRAbIAAg1IAjAAIAAAJIgZAAIAAAOIAVAAIAAAIIgVAAIAAANIAZAAIAAAJg");
	this.shape_57.setTransform(-77.7,65.5);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#FFFFFF").s().p("AAKAbIgMgTIgJAAIAAATIgJAAIAAg1IAUAAQAJAAAFAFQAFAEAAAJQAAALgMADIAOAVgAgLAAIALAAQAEAAADgCQACgBAAgFQAAgFgCgCQgDgCgEAAIgLAAg");
	this.shape_58.setTransform(-83,65.5);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#2FB7AA").s().p("AmGDAIAAl/IMNAAIAAF/g");
	this.shape_59.setTransform(-54.1,75.4);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#262733").s().p("AAPAhIgZgeIgHAIIAAAWIgHAAIAAhBIAHAAIAAAiIAfgiIAJAAIgcAfIAeAig");
	this.shape_60.setTransform(53.6,8.2);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#262733").s().p("AgQAZQgJgIAAgRQAAgRAJgIQAGgIAPAAQALAAAKAFIAAAGQgKgFgKAAQgMAAgFAHQgGAGAAAOQAAAOAGAHQAFAGAMAAQALAAAJgFIAAAHQgLAFgKAAQgOAAgHgJg");
	this.shape_61.setTransform(46.6,8.2);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#262733").s().p("AAXAhIgIgVIgcAAIgIAVIgIAAIAbhBIAGAAIAaBBgAgLAGIAXAAIgMgeg");
	this.shape_62.setTransform(39.9,8.2);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#262733").s().p("AgXAhIAAhBIAWAAQAVAAAAARQAAAGgCACIgFAGQAEABAEAEQADAEAAAGQAAAKgGAFQgGAEgMAAgAgQAbIAQAAQAIAAAEgDQAFgCAAgIQAAgHgFgDQgDgCgJAAIgQAAgAgQgEIAQAAQAGAAADgCQAEgCAAgGQAAgGgEgDQgEgDgFAAIgQAAg");
	this.shape_63.setTransform(33.2,8.2);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#262733").s().p("AgZAhIAAhBIAVAAQAPAAAHAIQAIAIAAAQQAAAhgeAAgAgSAaIANAAQANAAAFgGQAGgGAAgOQAAgNgGgGQgFgHgNAAIgNAAg");
	this.shape_64.setTransform(26.2,8.2);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#262733").s().p("AgUAhIAAhBIApAAIAAAGIgiAAIAAAXIAeAAIAAAGIgeAAIAAAXIAiAAIAAAHg");
	this.shape_65.setTransform(19.4,8.2);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#262733").s().p("AgUAhIAAhBIApAAIAAAGIgiAAIAAAXIAeAAIAAAGIgeAAIAAAXIAiAAIAAAHg");
	this.shape_66.setTransform(13.1,8.2);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#262733").s().p("AgUAhIAAhBIApAAIAAAGIghAAIAAAXIAcAAIAAAGIgcAAIAAAeg");
	this.shape_67.setTransform(7.2,8.2);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#262733").s().p("AAQAhIgQgbIgRAAIAAAbIgHAAIAAhBIAaAAQAKAAAFAEQAFAFAAAKQAAAIgEAFQgEAEgHACIASAbgAgRAAIARAAQAHAAAEgDQAEgDAAgHQAAgGgDgDQgDgEgIAAIgSAAg");
	this.shape_68.setTransform(-2.6,8.2);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#262733").s().p("AgVAaQgIgJAAgRQAAgQAIgJQAHgIAOAAQAPAAAIAIQAHAJAAAQQAAARgHAJQgIAIgPAAQgOAAgHgIgAgQgUQgFAHAAANQAAAOAFAHQAFAGALAAQAMAAAFgGQAFgGABgPQgBgOgFgGQgGgHgLAAQgLAAgFAHg");
	this.shape_69.setTransform(-10,8.2);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#262733").s().p("AgTAhIAAhBIAnAAIAAAGIggAAIAAAXIAdAAIAAAGIgdAAIAAAeg");
	this.shape_70.setTransform(-16.6,8.2);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#262733").s().p("AgKAhQgEgBgGgDIAAgIIAJAFQAHACAEAAQAHAAAEgDQAEgFAAgEQgBgDgCgDIgEgEIgIgEIgKgDQgEgCgDgEQgCgEAAgFQAAgFACgDQADgFAEgCQADgCAIAAQAGAAACABIAJADIAAAIIgEgDIgGgCIgHgBQgGAAgDADQgEADAAAEQAAADACADQABADADABIAIAEIAKADQADACAEAEQACADAAAGQAAAJgEAFQgGAFgLAAQgGAAgEgBg");
	this.shape_71.setTransform(-26.2,8.2);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#262733").s().p("AAPAhIgYgeIgIAIIAAAWIgHAAIAAhBIAHAAIAAAiIAegiIAKAAIgcAfIAeAig");
	this.shape_72.setTransform(-32.2,8.2);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#262733").s().p("AgLAhIgKgEIAAgIIAJAFQAIACAEAAQAHAAAEgDQADgEAAgFQAAgEgCgCIgFgEIgSgHQgDgCgDgEQgCgEgBgFIACgIQADgFAEgCQAEgCAHAAQAGAAACABIAJADIAAAIIgDgDIgHgCIgHgBQgFAAgEADQgDADAAAEQAAAEABACIAGAEIAHAEIAKADQAFACABAEQAEAEAAAFQgBAIgFAGQgGAFgKAAQgHAAgEgBg");
	this.shape_73.setTransform(-38.8,8.2);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#262733").s().p("AAWAhIgIgVIgbAAIgIAVIgIAAIAahBIAHAAIAaBBgAgLAGIAXAAIgMgeg");
	this.shape_74.setTransform(-45.4,8.2);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#2FB7AA").s().p("AgHAJQgDgFgBgEQABgEADgDQAEgEADABQAFgBADAEQAEADAAAEQAAAFgEAEQgDACgFAAQgDAAgEgCg");
	this.shape_75.setTransform(-54.6,8.2);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#262733").s().p("AgKAhQgEgBgGgDIAAgIIAJAFQAHACAEAAQAHAAAEgDQAEgFAAgEQgBgDgCgDIgEgEIgIgEIgKgDQgEgCgDgEQgCgEAAgFQAAgFACgDQADgFAEgCQADgCAHAAIAJABIAJADIAAAIIgEgDIgGgCIgIgBQgFAAgDADQgEADAAAEQAAADACADQABADADABIASAHQADACAEAEQACADAAAGQAAAJgEAFQgGAFgLAAQgGAAgEgBg");
	this.shape_76.setTransform(44.5,-3.8);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#262733").s().p("AgUAhIAAhBIApAAIAAAGIgiAAIAAAXIAeAAIAAAGIgeAAIAAAXIAiAAIAAAHg");
	this.shape_77.setTransform(38.3,-3.8);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#262733").s().p("AgCAhIAAg7IgYAAIAAgGIA1AAIAAAGIgYAAIAAA7g");
	this.shape_78.setTransform(32,-3.8);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#262733").s().p("AgSAaQgHgHAAgNIAAgnIAHAAIAAAnQAAAVASAAQATAAAAgVIAAgnIAHAAIAAAnQAAANgHAHQgGAIgNAAQgLAAgHgIg");
	this.shape_79.setTransform(25.1,-3.7);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#262733").s().p("AAUAhIgog3IAAA3IgHAAIAAhBIAIAAIAoA3IAAg3IAHAAIAABBg");
	this.shape_80.setTransform(17.5,-3.8);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#262733").s().p("AgDAhIAAhBIAHAAIAABBg");
	this.shape_81.setTransform(12.2,-3.8);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#262733").s().p("AAYAhIAAg2IgYAhIgWghIAAA2IgIAAIAAhBIAIAAIAWAhIAXghIAIAAIAABBg");
	this.shape_82.setTransform(6.5,-3.8);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#262733").s().p("AgKAhQgEgBgGgDIAAgIIAJAFQAHACAEAAQAIAAADgDQAEgFAAgEQAAgDgDgDIgEgEIgIgEIgKgDQgEgCgDgEQgCgEAAgFQAAgFACgDQADgFAEgCQAEgCAGAAIAJABIAJADIAAAIIgEgDIgGgCIgIgBQgFAAgEADQgDADAAAEQAAADACADQABADADABIASAHQADACAEAEQACADAAAGQAAAJgEAFQgGAFgLAAQgGAAgEgBg");
	this.shape_83.setTransform(-4,-3.8);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#262733").s().p("AgUAhIAAhBIApAAIAAAGIgiAAIAAAXIAeAAIAAAGIgeAAIAAAXIAiAAIAAAHg");
	this.shape_84.setTransform(-10.2,-3.8);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#262733").s().p("AgCAhIAAg7IgYAAIAAgGIA1AAIAAAGIgXAAIAAA7g");
	this.shape_85.setTransform(-16.5,-3.8);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#262733").s().p("AgDAhIAAhBIAHAAIAABBg");
	this.shape_86.setTransform(-21.2,-3.8);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#262733").s().p("AARAhIgRgbIgRAAIAAAbIgHAAIAAhBIAaAAQALAAAEAEQAFAFAAAKQAAAIgEAFQgEAEgHACIASAbgAgRAAIARAAQAGAAAFgDQAEgDAAgHQAAgGgDgDQgDgEgIAAIgSAAg");
	this.shape_87.setTransform(-25.8,-3.8);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#262733").s().p("AARAhIgRg2IgRA2IgHAAIgVhBIAHAAIASA3IARg3IAHAAIARA3IASg3IAHAAIgVBBg");
	this.shape_88.setTransform(-34.6,-3.8);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#2FB7AA").s().p("AgHAJQgEgEABgFQgBgEAEgDQADgEAEAAQAFAAADAEQAEADgBAEQABAFgEAEQgDACgFAAQgEAAgDgCg");
	this.shape_89.setTransform(-45.4,-3.8);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#262733").s().p("AgmArIAAhVIAjAAQAVAAAKAKQALAMAAAUQAAAWgLAKQgKALgVAAgAgRAbIALAAQALAAAGgHQAGgGAAgOQAAgNgGgHQgGgGgLAAIgLAAg");
	this.shape_90.setTransform(45.8,-26.8);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#262733").s().p("AAWArIgHgSIgfAAIgGASIgUAAIAghVIAWAAIAfBVgAgLAJIAVAAIgKggg");
	this.shape_91.setTransform(35.8,-26.8);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#262733").s().p("AgdArIAAhVIA7AAIAAAQIgmAAIAAATIAgAAIAAAPIggAAIAAATIAmAAIAAAQg");
	this.shape_92.setTransform(26.9,-26.8);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#262733").s().p("AgdArIAAhVIAWAAIAABFIAlAAIAAAQg");
	this.shape_93.setTransform(19,-26.8);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#262733").s().p("AgKArIAAhFIgYAAIAAgQIBFAAIAAAQIgZAAIAABFg");
	this.shape_94.setTransform(6.4,-26.8);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#262733").s().p("AgiAAQAAgsAqAAQANAAAOAGIAAATQgNgJgMAAQgKAAgHAHQgFAHAAAOQAAAQAFAHQAHAGALAAIAMgCQAHgDAFgEIAAATQgFADgIACIgOABQgqAAAAgtg");
	this.shape_95.setTransform(-2.2,-26.8);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#262733").s().p("AgdArIAAhVIA7AAIAAAQIgmAAIAAATIAhAAIAAAPIghAAIAAATIAmAAIAAAQg");
	this.shape_96.setTransform(-10.7,-26.8);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#262733").s().p("AgXAoIAAgUIAJAFIAGACQALAAAAgMIAAg6IAVAAIAAA7QAAAPgIAGQgIAHgLAAQgKAAgKgEg");
	this.shape_97.setTransform(-18.6,-26.7);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#262733").s().p("AgeAiQgLgLAAgXQAAgWALgLQALgLATAAQAUAAALALQALALAAAWQAAAWgLALQgKAMgVAAQgTAAgLgLgAgOgVQgGAHAAAOQAAAPAGAGQAEAHAKAAQAKAAAFgHQAGgHAAgOQAAgNgFgIQgGgGgKAAQgJAAgFAGg");
	this.shape_98.setTransform(-26.9,-26.8);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#262733").s().p("AANArIgRgeIgMAAIAAAeIgWAAIAAhVIApAAQAPAAAJAGQAIAIAAANQAAAHgFAIQgFAHgIACIAWAigAgQgBIAQAAQAMAAAAgNQAAgGgDgDQgCgDgGAAIgRAAg");
	this.shape_99.setTransform(-36.4,-26.8);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#262733").s().p("AgjArIAAhVIAmAAQARAAAHAHQAJAHAAAOQAAAOgJAHQgIAIgQAAIgRAAIAAAcgAgOAAIAPAAQAFAAAEgEQADgDAAgGQAAgNgMAAIgPAAg");
	this.shape_100.setTransform(-46,-26.8);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f().s("#3F3B4F").ss(3).p("AtRtRIAAajIajAAIAA6jg");
	this.shape_101.setTransform(0,-9.6);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#FFFFFF").s().p("AtRNSIAA6jIajAAIAAajg");
	this.shape_102.setTransform(0,-9.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer 2
	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#FFFFFF").s().p("AtRNSIAA6jIajAAIAAajg");
	this.shape_103.setTransform(0,-9.5,1.235,1.235);

	this.timeline.addTween(cjs.Tween.get(this.shape_103).wait(1));

}).prototype = getMCSymbolPrototype(lib.SD38, new cjs.Rectangle(-105,-114.5,210.1,210), null);


(lib.SD37 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgRAXIAAgKQAHAFAJAAQAKAAAAgGQAAAAAAgBQgBgBAAAAQAAgBAAAAQgBgBAAAAIgFgDIgGgCIgGgDQgDAAgCgDQgCgDAAgFQAAgHAFgEQAFgEAIAAQAHAAAHADIAAAKQgGgEgHAAQgEAAgDABQgDACAAADQAAADADABIAGADIAIACQAEACADADQACAEAAAGQAAAGgFAEQgFAEgIAAQgJAAgIgEg");
	this.shape.setTransform(16.6,11.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AALAbIgRgXIgGAFIAAASIgKAAIAAg1IAKAAIAAAXIATgXIANAAIgVAYIAXAdg");
	this.shape_1.setTransform(11.4,11.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgRAXIAAgKQAHAFAJAAQAKAAAAgGQAAAAAAgBQgBgBAAAAQAAgBAAAAQgBgBAAAAIgFgDIgGgCIgGgDQgDAAgCgDQgCgDAAgFQAAgHAFgEQAFgEAIAAQAHAAAHADIAAAKQgGgEgHAAQgEAAgDABQgDACAAADQAAADADABIAGADIAIACQAEACADADQACAEAAAGQAAAGgFAEQgFAEgIAAQgJAAgIgEg");
	this.shape_2.setTransform(5.7,11.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgEAbIAAg1IAJAAIAAA1g");
	this.shape_3.setTransform(1.9,11.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAKAbIgMgTIgJAAIAAATIgJAAIAAg1IAUAAQAJAAAFAFQAFAEAAAJQAAALgMADIAOAVgAgLAAIALAAQAEAAADgCQACgBAAgFQAAgFgCgCQgDgCgEAAIgLAAg");
	this.shape_4.setTransform(-2.1,11.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgQAbIAAg1IAhAAIAAAJIgYAAIAAAOIAVAAIAAAIIgVAAIAAAWg");
	this.shape_5.setTransform(-10.4,11.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgGAbIgHgDQgDgCgCgDQgDgCgBgFQgCgFAAgHQAAgFACgFQABgFADgDQACgDADgCIAHgDIAGAAIAHAAIAHADIAGAFIADAIQACAFAAAFQAAAHgCAFQgBAFgCACIgGAFIgHADIgHAAIgGAAgAgEgRIgEABIgDADIgCAGIgBAHIABAKIADAGIAFACIAFABIAFAAIAEgCIADgDIADgGIAAgIIgBgJIgDgGIgFgCIgGgBg");
	this.shape_6.setTransform(-16.3,11.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AACAbIgGAAIgGgDIgGgEQgDgDgBgFQgCgFAAgHQAAgFACgFQABgFADgDQACgDAEgCIAGgDIAGAAQAJAAAJADIAAAJQgJgEgIAAIgEABIgEABQgBABAAAAQgBAAAAABQgBAAAAAAQAAABAAAAIgDAGIgBAHIABAIIADAGQAAAAAAABQAAAAABABQAAAAABAAQAAABABAAQABAAAAAAQABABAAAAQABAAAAAAQABAAABAAIADABIAJgCIAAgMIgLAAIAAgIIAVAAIAAAaQgJAEgKAAg");
	this.shape_7.setTransform(16.5,0.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AANAbIgbgnIAAAnIgJAAIAAg1IALAAIAbAnIAAgnIAJAAIAAA1g");
	this.shape_8.setTransform(10.3,0.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgEAbIAAg1IAJAAIAAA1g");
	this.shape_9.setTransform(5.7,0.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AALAbIgRgXIgGAFIAAASIgKAAIAAg1IAKAAIAAAXIATgXIANAAIgUAYIAWAdg");
	this.shape_10.setTransform(1.6,0.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AANAbIgbgnIAAAnIgJAAIAAg1IALAAIAaAnIAAgnIAKAAIAAA1g");
	this.shape_11.setTransform(-4.8,0.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AAQAbIgEgNIgWAAIgFANIgKAAIAVg1IAJAAIAWA1gAAIAFIgIgUIgHAUIAPAAg");
	this.shape_12.setTransform(-11.1,0.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AAKAbIgMgTIgJAAIAAATIgJAAIAAg1IAUAAQAJAAAFAFQAFAEAAAJQAAALgMADIAOAVgAgLAAIALAAQAEAAADgCQACgBAAgFQAAgFgCgCQgDgCgEAAIgLAAg");
	this.shape_13.setTransform(-16.7,0.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgEARIAAgIIAJAAIAAAIgAgEgHIAAgJIAJAAIAAAJg");
	this.shape_14.setTransform(16.1,-9.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AANAbIgbgnIAAAnIgJAAIAAg1IALAAIAaAnIAAgnIAKAAIAAA1g");
	this.shape_15.setTransform(11,-10.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgGAbIgHgDQgDgCgCgDQgDgCgBgFQgCgFAAgHQAAgFACgFQABgFADgDQACgDADgCIAHgDIAGAAIAHAAIAHADIAGAFIADAIQACAFAAAFQAAAHgCAFQgBAFgCACIgGAFIgHADIgHAAIgGAAgAgEgRIgEABIgDADIgCAGIgBAHIABAKIADAGIAFACIAFABIAFAAIAEgCIADgDIADgGIAAgIIgBgJIgDgGIgFgCIgGgBg");
	this.shape_16.setTransform(4.5,-10.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgEAbIAAg1IAJAAIAAA1g");
	this.shape_17.setTransform(0,-10.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgEAbIAAgrIgRAAIAAgKIArAAIAAAKIgRAAIAAArg");
	this.shape_18.setTransform(-3.9,-10.6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgTAbIAAg1IATAAQAKAAAFAFQAFAFAAAIQAAAIgFAEQgFAFgKAAIgJAAIAAASgAgJABIAJAAQAGAAACgCQACgCAAgFQAAgEgCgDQgCgCgGAAIgJAAg");
	this.shape_19.setTransform(-8.8,-10.6);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgGAbIgHgDQgDgCgCgDQgDgCgBgFQgCgFAAgHQAAgFACgFQABgFADgDQACgDADgCIAHgDIAGAAIAHAAIAHADIAGAFIADAIQACAFAAAFQAAAHgCAFQgBAFgCACIgGAFIgHADIgHAAIgGAAgAgEgRIgEABIgDADIgCAGIgBAHIABAKIADAGIAFACIAFABIAFAAIAEgCIADgDIADgGIAAgIIgBgJIgDgGIgFgCIgGgBg");
	this.shape_20.setTransform(-14.9,-10.6);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#2FB7AA").s().p("AjIDJQhUhTAAh2QAAh1BUhTQBThUB1AAQB2AABTBUQBUBTAAB1QAAB2hUBTQhTBUh2AAQh1AAhThUg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.SD37, new cjs.Rectangle(-28.5,-28.4,57,57), null);


(lib.SD36 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgRAXIAAgKQAHAFAJAAQAKAAAAgGQAAAAAAgBQAAgBgBAAQAAgBAAAAQgBgBAAAAIgFgDIgGgCIgGgDQgDAAgCgDQgCgDAAgFQAAgHAFgEQAFgEAIAAQAHAAAHADIAAAKQgGgEgHAAQgEAAgDABQgDACAAADQAAABAAAAQABABAAAAQAAABABAAQAAABABAAIAGADIAIACQAEACADADQACAEAAAGQAAAGgFAEQgFAEgIAAQgJAAgIgEg");
	this.shape.setTransform(40.1,80.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AANAbIgagnIAAAnIgKAAIAAg1IALAAIAbAnIAAgnIAJAAIAAA1g");
	this.shape_1.setTransform(34.4,80.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgGAbIgHgDQgDgCgCgDQgDgCgBgFQgCgFAAgHQAAgFACgFQABgFADgDQACgDADgCIAHgDIAGAAIAHAAIAHADIAGAFIADAIQACAFAAAFQAAAHgCAFQgBAFgCACIgGAFIgHADIgHAAIgGAAgAgEgRIgEABIgDADIgCAGIgBAHIABAKIADAGIAFACIAFABIAFAAIAEgCIADgDIADgGIAAgIIgBgJIgDgGIgFgCIgGgBg");
	this.shape_2.setTransform(27.8,80.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgEAbIAAg1IAJAAIAAA1g");
	this.shape_3.setTransform(23.3,80.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgEAbIAAgrIgRAAIAAgKIArAAIAAAKIgRAAIAAArg");
	this.shape_4.setTransform(19.5,80.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AARAbIgGgNIgVAAIgFANIgLAAIAWg1IAKAAIAUA1gAAIAFIgIgUIgHAUIAPAAg");
	this.shape_5.setTransform(14,80.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgVAbIAAg1IATAAQALAAAGAHQAHAHAAAMQAAANgHAHQgGAHgLAAgAgLASIAJAAQAHAAAEgEQADgEAAgKQAAgJgDgEQgEgEgHAAIgJAAg");
	this.shape_6.setTransform(8.2,80.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AANAbIgbgnIAAAnIgJAAIAAg1IALAAIAbAnIAAgnIAJAAIAAA1g");
	this.shape_7.setTransform(1.9,80.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgRAbIAAg1IAjAAIAAAJIgZAAIAAAOIAVAAIAAAIIgVAAIAAANIAZAAIAAAJg");
	this.shape_8.setTransform(-3.9,80.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AARAbIAAgnIgRAXIgQgXIAAAnIgJAAIAAg1IAKAAIAPAXIAQgXIAKAAIAAA1g");
	this.shape_9.setTransform(-10,80.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AARAbIAAgnIgRAXIgQgXIAAAnIgJAAIAAg1IAKAAIAPAXIAQgXIAKAAIAAA1g");
	this.shape_10.setTransform(-17,80.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgGAbIgHgDQgDgCgCgDQgDgCgBgFQgCgFAAgHQAAgFACgFQABgFADgDQACgDADgCIAHgDIAGAAIAHAAIAHADIAGAFIADAIQACAFAAAFQAAAHgCAFQgBAFgCACIgGAFIgHADIgHAAIgGAAgAgEgRIgEABIgDADIgCAGIgBAHIABAKIADAGIAFACIAFABIAFAAIAEgCIADgDIADgGIAAgIIgBgJIgDgGIgFgCIgGgBg");
	this.shape_11.setTransform(-23.8,80.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgCAbIgGgDQgEgCgCgDQgDgCgBgFQgCgFAAgHQAAgGACgEQABgFADgDQACgDAEgCIAGgDIAGAAQAIAAAJADIAAAJQgIgEgIAAIgFABIgFACQgCACgBAEQgCAEAAAFQAAAGACAEQABAEACACIAFACIAFABQAIAAAIgEIAAAJQgJADgIAAIgGAAg");
	this.shape_12.setTransform(-29.6,80.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgRAbIAAg1IAjAAIAAAJIgZAAIAAAOIAVAAIAAAIIgVAAIAAANIAZAAIAAAJg");
	this.shape_13.setTransform(-34.8,80.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AAKAbIgMgTIgJAAIAAATIgJAAIAAg1IAUAAQAJAAAFAFQAFAEAAAJQAAALgMADIAOAVgAgLAAIALAAQAEAAADgCQACgBAAgFQAAgFgCgCQgDgCgEAAIgLAAg");
	this.shape_14.setTransform(-40,80.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgEAbIAAgXIgVgeIAMAAIANAWIAOgWIAMAAIgVAeIAAAXg");
	this.shape_15.setTransform(40.8,69.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AAKAbIgMgTIgJAAIAAATIgJAAIAAg1IAUAAQAJAAAFAFQAFAEAAAJQAAALgMADIAOAVgAgLAAIALAAQAEAAADgCQACgBAAgFQAAgFgCgCQgDgCgEAAIgLAAg");
	this.shape_16.setTransform(35.4,69.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AAQAbIgEgNIgWAAIgFANIgKAAIAVg1IAJAAIAWA1gAAIAFIgIgUIgHAUIAPAAg");
	this.shape_17.setTransform(29.4,69.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AANAbIgagnIAAAnIgKAAIAAg1IALAAIAbAnIAAgnIAJAAIAAA1g");
	this.shape_18.setTransform(23.1,69.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgRAbIAAg1IAjAAIAAAJIgZAAIAAAOIAVAAIAAAIIgVAAIAAANIAZAAIAAAJg");
	this.shape_19.setTransform(17.4,69.3);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgQAbIAAg1IAJAAIAAAsIAYAAIAAAJg");
	this.shape_20.setTransform(12.6,69.3);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgTAbIAAg1IATAAQAKAAAFAFQAFAFAAAIQAAAIgFAEQgFAFgKAAIgJAAIAAASgAgJABIAJAAQAGAAACgCQACgCAAgFQAAgEgCgDQgCgCgGAAIgJAAg");
	this.shape_21.setTransform(7.5,69.3);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgCAbIgGgDQgEgCgCgDQgDgCgBgFQgCgFAAgHQAAgGACgEQABgFADgDQACgDAEgCIAGgDIAGAAQAIAAAIADIAAAJQgHgEgIAAIgFABIgFACQgDACAAAEQgCAEAAAFQAAAGACAEQAAAEADACIAFACIAFABQAIAAAHgEIAAAJQgIADgIAAIgGAAg");
	this.shape_22.setTransform(-1.1,69.3);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgEAbIAAg1IAJAAIAAA1g");
	this.shape_23.setTransform(-5.2,69.3);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AACAbIgGAAIgGgDIgGgEQgDgDgBgFQgCgFAAgHQAAgFACgFQABgFADgDQACgDAEgCIAGgDIAGAAQAJAAAJADIAAAJQgIgEgJAAIgEABIgEABQgBAAAAABQgBAAAAAAQgBABAAAAQAAABAAAAIgDAGIgBAHIABAIIADAGQAAAAAAABQAAAAABAAQAAABABAAQAAAAABABQABAAAAAAQABABAAAAQABAAAAAAQABAAABAAIADABIAJgCIAAgMIgLAAIAAgIIAVAAIAAAaQgJAEgKAAg");
	this.shape_24.setTransform(-9.5,69.3);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgRAbIAAg1IAjAAIAAAJIgZAAIAAAOIAVAAIAAAIIgVAAIAAANIAZAAIAAAJg");
	this.shape_25.setTransform(-14.9,69.3);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgEAbIAAgrIgRAAIAAgKIArAAIAAAKIgRAAIAAArg");
	this.shape_26.setTransform(-20,69.3);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AAQAbIgFgNIgVAAIgFANIgLAAIAWg1IAKAAIAUA1gAAIAFIgIgUIgHAUIAPAAg");
	this.shape_27.setTransform(-25.5,69.3);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AAKAbIgMgTIgJAAIAAATIgJAAIAAg1IAUAAQAJAAAFAFQAFAEAAAJQAAALgMADIAOAVgAgLAAIALAAQAEAAADgCQACgBAAgFQAAgFgCgCQgDgCgEAAIgLAAg");
	this.shape_28.setTransform(-31.1,69.3);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgEAbIAAgrIgRAAIAAgKIArAAIAAAKIgRAAIAAArg");
	this.shape_29.setTransform(-36.6,69.3);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgRAXIAAgKQAHAFAJAAQAKAAAAgGQAAgBAAAAQgBgBAAAAQAAgBAAAAQgBgBAAAAIgFgDIgGgCIgGgDQgDAAgCgDQgCgDAAgFQAAgHAFgEQAFgEAIAAQAHAAAHADIAAAKQgGgEgHAAQgEAAgDABQgDACAAADQAAABAAAAQABABAAABQAAAAABAAQAAABABAAIAGADIAIACQAEACADADQACAEAAAGQAAAGgFAEQgFAEgIAAQgJAAgIgEg");
	this.shape_30.setTransform(-41.5,69.3);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#2FB7AA").s().p("AnlC/IAAl9IPLAAIAAF9g");
	this.shape_31.setTransform(0,75.5);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#262733").s().p("AgQAsQgEgBgJgEIAAgUQAGAFAHADQAJACAGAAQALAAAAgJQAAgEgEgCIgLgGIgFgBQgKgDgFgFQgGgFAAgLQAAgHAEgGQAEgGAHgEQAIgEAKAAQAHAAAGABIAMAFIAAAUIgMgHQgFgDgHAAQgFAAgEACQgDADAAAEQAAADACACIAFAEIAJADIANAFQAFACAEAFQADAFAAAHQAAAIgEAHQgDAGgIAEQgGADgKAAQgJAAgIgBg");
	this.shape_32.setTransform(56.8,43.9);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#262733").s().p("AgdArIAAhVIA7AAIAAAQIgmAAIAAATIAhAAIAAAPIghAAIAAATIAmAAIAAAQg");
	this.shape_33.setTransform(48.6,43.9);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#262733").s().p("AgKArIAAhVIAUAAIAABVg");
	this.shape_34.setTransform(42.1,43.9);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#262733").s().p("AgKArIAAhFIgYAAIAAgQIBFAAIAAAQIgYAAIAABFg");
	this.shape_35.setTransform(35.6,43.9);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#262733").s().p("AgKArIAAhVIAVAAIAABVg");
	this.shape_36.setTransform(29.2,43.9);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#262733").s().p("AAWArIgngzIAAAzIgUAAIAAhVIASAAIAmAyIAAgyIATAAIAABVg");
	this.shape_37.setTransform(21.9,43.9);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#262733").s().p("AgbAkQgKgJAAgRIAAg2IAWAAIAAA1QAAAKAEAFQAEAEAIAAQAJAAADgFQAFgEAAgKIAAg1IAUAAIAAA2QAAASgKAIQgJAJgRAAQgTAAgKgJg");
	this.shape_38.setTransform(11.8,44);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#262733").s().p("AgKArIAAhFIgYAAIAAgQIBFAAIAAAQIgZAAIAABFg");
	this.shape_39.setTransform(2.6,43.9);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#262733").s().p("AANArIgQgdIgOAAIAAAdIgVAAIAAhVIAqAAQAOAAAIAHQAJAHAAANQAAAJgFAGQgEAHgJADIAWAhgAgRgBIARAAQAMAAAAgNQAAgGgDgDQgCgDgGAAIgSAAg");
	this.shape_40.setTransform(-6.1,43.9);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#262733").s().p("AgeAhQgLgLAAgWQAAgWALgKQAKgMAUAAQAUAAALALQALALAAAWQAAAWgLALQgLAMgUAAQgTAAgLgMgAgPgVQgFAHAAAOQAAAPAFAHQAGAGAJAAQAKAAAFgGQAFgHAAgPQAAgPgFgGQgFgGgKAAQgKAAgFAGg");
	this.shape_41.setTransform(-16.3,43.9);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#262733").s().p("AgjArIAAhVIAmAAQAQAAAIAHQAJAGAAAPQAAAOgJAHQgJAIgPAAIgRAAIAAAcgAgOAAIAPAAQAGAAADgEQADgDAAgGQAAgNgMAAIgPAAg");
	this.shape_42.setTransform(-25.9,43.9);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#262733").s().p("AgjArIAAhVIAmAAQAPAAAJAHQAJAHAAAOQAAAOgJAHQgJAIgPAAIgRAAIAAAcgAgOAAIAOAAQAHAAADgEQADgDAAgGQAAgNgNAAIgOAAg");
	this.shape_43.setTransform(-35.2,43.9);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#262733").s().p("AgeAhQgLgLAAgWQAAgWALgKQAKgMAUAAQAUAAALALQALALAAAWQAAAWgLALQgLAMgUAAQgTAAgLgMgAgPgVQgFAIAAANQAAAOAFAIQAGAGAJAAQAKAAAFgGQAGgIAAgOQAAgOgGgHQgFgGgKAAQgKAAgFAGg");
	this.shape_44.setTransform(-45.1,43.9);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#262733").s().p("AgeA3IAvhtIAOAAIgvBtg");
	this.shape_45.setTransform(-57.7,44);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#262733").s().p("AgQAsQgFgBgIgEIAAgUQAFAFAIADQAIACAHAAQALAAAAgJQAAgEgEgCIgMgGIgEgBQgJgDgHgFQgEgFAAgLQAAgIADgFQAEgGAHgEQAIgEAKAAQAIAAAFABIALAFIAAAUIgLgHQgFgDgIAAQgEAAgEACQgDADAAAEQAAAEACABIAFAEIAJADQAJADAEACQAFACADAFQADAFABAHQAAAIgEAHQgEAGgHAEQgGADgLAAQgJAAgHgBg");
	this.shape_46.setTransform(25.7,28.3);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#262733").s().p("AgjArIAAhVIAmAAQAQAAAIAHQAJAGAAAPQAAAOgJAHQgJAIgPAAIgRAAIAAAcgAgOAAIAPAAQAGAAADgEQADgDAAgGQAAgNgMAAIgPAAg");
	this.shape_47.setTransform(17.1,28.3);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#262733").s().p("AAWArIgHgSIgfAAIgGASIgUAAIAhhVIAWAAIAeBVgAgLAJIAVAAIgKgfg");
	this.shape_48.setTransform(7.4,28.3);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#262733").s().p("AgaAiQgLgKAAgYQAAgWALgLQALgLATAAQAQAAAPAGIAAATIgQgHQgFgCgIAAQgKAAgGAHQgGAHAAAOQAAAQAGAGQAGAHAJAAQAJAAADgCIAAgPIgOAAIAAgQIAjAAIAAAoQgQAJgSAAQgUAAgKgLg");
	this.shape_49.setTransform(-2.5,28.3);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#262733").s().p("AgcArIAAhVIA5AAIAAAQIglAAIAAAVIAgAAIAAAPIggAAIAAAhg");
	this.shape_50.setTransform(-15.3,28.3);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#262733").s().p("AgeAiQgLgMAAgWQAAgWALgLQALgLATAAQAUAAALALQALALAAAWQAAAWgLAMQgKALgVAAQgTAAgLgLgAgOgUQgGAGAAAOQAAAOAGAIQAFAGAJAAQAKAAAFgGQAGgIAAgOQAAgOgFgGQgFgHgLAAQgKAAgEAHg");
	this.shape_51.setTransform(-24.6,28.3);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#262733").s().p("AAWArIgogzIAAAzIgTAAIAAhVIASAAIAlAyIAAgyIAUAAIAABVg");
	this.shape_52.setTransform(49.6,12.7);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#262733").s().p("AgeAiQgLgLAAgXQAAgVALgMQAKgLAUAAQAUAAALALQALALAAAWQAAAXgLALQgLALgUAAQgTAAgLgLgAgPgVQgFAHAAAOQAAAPAFAGQAGAHAJAAQAKAAAFgHQAFgGAAgPQAAgPgFgGQgFgGgKAAQgKAAgFAGg");
	this.shape_53.setTransform(39.5,12.7);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#262733").s().p("AgKArIAAhVIAUAAIAABVg");
	this.shape_54.setTransform(32.1,12.7);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#262733").s().p("AgKArIAAhFIgYAAIAAgQIBFAAIAAAQIgYAAIAABFg");
	this.shape_55.setTransform(25.6,12.7);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#262733").s().p("AAWArIgHgSIgfAAIgGASIgUAAIAhhVIAWAAIAeBVgAgLAJIAVAAIgKgfg");
	this.shape_56.setTransform(17.4,12.7);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#262733").s().p("AgiAAQAAgsAqAAQANAAAOAGIAAATQgLgJgOAAQgKAAgHAHQgFAHAAAOQAAAQAFAGQAHAHALAAQAGAAAGgCQAGgCAGgEIAAASIgNAEQgHACgHAAQgqAAAAgtg");
	this.shape_57.setTransform(8.1,12.7);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#262733").s().p("AgKArIAAhVIAUAAIAABVg");
	this.shape_58.setTransform(1.5,12.7);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#262733").s().p("AgcArIAAhVIA5AAIAAAQIgkAAIAAAVIAgAAIAAAPIggAAIAAAhg");
	this.shape_59.setTransform(-4.7,12.7);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#262733").s().p("AgKArIAAhVIAVAAIAABVg");
	this.shape_60.setTransform(-11.2,12.7);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#262733").s().p("AgJArIAAhFIgZAAIAAgQIBFAAIAAAQIgZAAIAABFg");
	this.shape_61.setTransform(-17.6,12.7);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#262733").s().p("AAWArIgogzIAAAzIgTAAIAAhVIASAAIAlAyIAAgyIAUAAIAABVg");
	this.shape_62.setTransform(-26.8,12.7);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#262733").s().p("AgdArIAAhVIA7AAIAAAQIgmAAIAAATIAhAAIAAAPIghAAIAAATIAmAAIAAAQg");
	this.shape_63.setTransform(-36,12.7);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#262733").s().p("AgmArIAAhVIAjAAQAVAAALALQAKAKAAAVQAAAWgKALQgLAKgVAAgAgRAbIAMAAQAKAAAHgGQAFgHABgOQgBgNgFgGQgHgHgKAAIgMAAg");
	this.shape_64.setTransform(-44.9,12.7);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#262733").s().p("AgJArIAAhVIATAAIAABVg");
	this.shape_65.setTransform(-52.4,12.7);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#262733").s().p("AgQAsQgFgBgIgEIAAgUQAFAFAIADQAIACAHAAQALAAAAgJQAAgEgEgCQgDgDgJgDIgEgBQgKgDgFgFQgGgFABgLQgBgIAEgFQADgGAIgEQAIgEAKAAQAIAAAFABIALAFIAAAUIgLgHQgFgDgIAAQgFAAgDACQgDACAAAFQAAAEACABIAFAEIAJADIANAFQAFACADAFQAEAFAAAHQAAAIgEAHQgEAGgHAEQgHADgKAAQgJAAgHgBg");
	this.shape_66.setTransform(44.2,-2.9);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#262733").s().p("AgdArIAAhVIA7AAIAAAQIglAAIAAATIAfAAIAAAPIgfAAIAAATIAlAAIAAAQg");
	this.shape_67.setTransform(36,-2.9);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#262733").s().p("AgKArIAAhVIAVAAIAABVg");
	this.shape_68.setTransform(29.4,-2.9);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#262733").s().p("AgbAiQgLgKABgYQgBgWALgLQAMgLASAAQARAAAPAGIAAATIgQgHQgGgCgHAAQgLAAgFAHQgGAGAAAPQAAAQAGAGQAFAHALAAQAHAAAEgCIAAgPIgOAAIAAgQIAjAAIAAAoQgQAJgTAAQgTAAgLgLg");
	this.shape_69.setTransform(22.1,-2.9);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#262733").s().p("AgdArIAAhVIA7AAIAAAQIgmAAIAAATIAgAAIAAAPIggAAIAAATIAmAAIAAAQg");
	this.shape_70.setTransform(13.2,-2.9);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#262733").s().p("AgKArIAAhFIgYAAIAAgQIBFAAIAAAQIgYAAIAABFg");
	this.shape_71.setTransform(4.8,-2.9);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#262733").s().p("AAWArIgHgSIgfAAIgGASIgUAAIAhhVIAWAAIAeBVgAgLAJIAVAAIgKgfg");
	this.shape_72.setTransform(-3.4,-2.9);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#262733").s().p("AAMArIgQgdIgNAAIAAAdIgVAAIAAhVIApAAQAPAAAIAHQAJAHAAANQAAAJgFAGQgFAHgIADIAWAhgAgRgBIARAAQAMAAgBgNQAAgFgCgEQgDgDgFAAIgSAAg");
	this.shape_73.setTransform(-12.9,-2.9);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#262733").s().p("AgKArIAAhFIgYAAIAAgQIBFAAIAAAQIgYAAIAABFg");
	this.shape_74.setTransform(-22.2,-2.9);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#262733").s().p("AgQAsQgFgBgIgEIAAgUQAGAFAHADQAJACAGAAQALAAAAgJQAAgEgEgCQgDgDgIgDIgGgBQgJgDgFgFQgGgFABgLQgBgGAEgHQAEgGAHgEQAIgEAKAAQAIAAAFABIAMAFIAAAUQgEgEgIgDQgFgDgHAAQgGAAgCACQgEACAAAFQAAAEACABIAFAEIAJADIAOAFQAEACADAFQAEAFAAAHQgBAIgDAHQgEAGgHAEQgGADgLAAQgIAAgIgBg");
	this.shape_75.setTransform(-30.4,-2.9);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#262733").s().p("AgaApQgFgCgEgGQgEgHAAgFQAAgGAFgHQAEgHAJgDIgBgCQgIgJAAgJQAAgFADgFQAFgHAFgCQAGgDAIAAQAIAAAFADQAGADADAEQADAFAAAGQAAAIgEAEQgEAFgLAGIAMAOIADgHIABgDIAPAAIgEAKIgFALIAPASIgYAAIgEgFQgKAHgNAAQgIAAgHgEgAgQAOIgBAGQAAAEACACQACAEAGAAQAGgBADgDIgNgSIgFAGgAgIgaQgCACAAADIABAFIAEAFIABABIAGgFQACgEAAgCQAAgEgCgBQgCgCgDAAQgDAAgCACg");
	this.shape_76.setTransform(-43.5,-2.9);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#262733").s().p("AgPAsQgGgBgIgEIAAgUQAFAFAIADQAIACAHAAQALAAAAgJQAAgEgEgCQgDgDgIgDIgGgBQgIgDgGgFQgFgFgBgLQABgIADgFQAEgGAHgEQAIgEAKAAQAIAAAFABIAMAFIAAAUIgMgHQgFgDgHAAQgGAAgCACQgEACAAAFQAAAEACABIAFAEIAJADIANAFQAFACAEAFQACAFABAHQgBAIgDAHQgEAGgHAEQgHADgJAAQgKAAgGgBg");
	this.shape_77.setTransform(60.7,-18.5);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#262733").s().p("AgcArIAAhVIA5AAIAAAQIgkAAIAAATIAgAAIAAAPIggAAIAAATIAkAAIAAAQg");
	this.shape_78.setTransform(52.5,-18.5);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#262733").s().p("AgKArIAAhVIAVAAIAABVg");
	this.shape_79.setTransform(46,-18.5);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#262733").s().p("AgiAAQAAgsApAAQAOAAAOAGIAAATQgMgJgNAAQgLAAgGAHQgFAHAAAOQAAAQAGAGQAGAHALAAQAGAAAGgCQAFgCAHgEIAAASIgNAEQgHACgIAAQgpAAAAgtg");
	this.shape_80.setTransform(39.1,-18.5);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#262733").s().p("AgKArIAAhVIAUAAIAABVg");
	this.shape_81.setTransform(32.5,-18.5);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#262733").s().p("AgdArIAAhVIAWAAIAABFIAlAAIAAAQg");
	this.shape_82.setTransform(26.5,-18.5);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#262733").s().p("AgeAiQgLgMAAgWQAAgVAKgMQALgLAUAAQAUAAALALQALAMAAAVQAAAVgLANQgLALgUAAQgTAAgLgLgAgPgUQgFAGAAAOQAAAPAFAHQAGAGAJAAQAKAAAFgGQAFgHAAgPQAAgPgFgFQgFgHgKAAQgKAAgFAHg");
	this.shape_83.setTransform(17.2,-18.5);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#262733").s().p("AgjArIAAhVIAmAAQAQAAAIAHQAJAGAAAPQAAAOgJAHQgJAIgPAAIgRAAIAAAcgAgOAAIAPAAQAGAAADgEQADgDAAgGQAAgNgMAAIgPAAg");
	this.shape_84.setTransform(7.6,-18.5);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#262733").s().p("AgaAiQgLgKAAgYQAAgWALgLQAMgLASAAQAQAAAPAGIAAATIgQgHQgFgCgIAAQgKAAgGAHQgGAHAAAOQAAAQAGAGQAGAHAJAAQAJAAADgCIAAgQIgOAAIAAgPIAjAAIAAAoQgQAJgSAAQgUAAgKgLg");
	this.shape_85.setTransform(-6.5,-18.5);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#262733").s().p("AAWArIgogzIAAAzIgTAAIAAhVIASAAIAlAyIAAgyIAUAAIAABVg");
	this.shape_86.setTransform(-16.3,-18.5);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#262733").s().p("AgJArIAAhVIATAAIAABVg");
	this.shape_87.setTransform(-23.6,-18.5);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#262733").s().p("AgKArIAAhFIgYAAIAAgQIBFAAIAAAQIgZAAIAABFg");
	this.shape_88.setTransform(-30,-18.5);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#262733").s().p("AgQAsQgFgBgIgEIAAgUQAHAFAGADQAIACAHAAQALAAAAgJQAAgEgEgCQgDgDgJgDIgEgBQgKgDgFgFQgGgFABgLQAAgIADgFQAEgGAHgEQAJgEAJAAQAIAAAFABIAMAFIAAAUIgMgHQgFgDgIAAQgFAAgDACQgDACAAAFQAAAEACABIAFAEIAJADIANAFQAFACADAFQADAFABAHQAAAIgEAHQgEAGgGAEQgIADgKAAQgIAAgIgBg");
	this.shape_89.setTransform(-38.2,-18.5);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#262733").s().p("AgJArIAAhVIATAAIAABVg");
	this.shape_90.setTransform(-44.6,-18.5);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#262733").s().p("AAQArIgRgbIgRAbIgXAAIAdgrIgegqIAaAAIASAbIAQgbIAYAAIgdAqIAeArg");
	this.shape_91.setTransform(-51.7,-18.5);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#262733").s().p("AgdArIAAhVIA7AAIAAAQIgmAAIAAATIAhAAIAAAPIghAAIAAATIAmAAIAAAQg");
	this.shape_92.setTransform(-60.6,-18.5);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#262733").s().p("AAQArIAAgiIgfAAIAAAiIgVAAIAAhVIAVAAIAAAjIAfAAIAAgjIAVAAIAABVg");
	this.shape_93.setTransform(68.1,-34.1);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#262733").s().p("AgbAiQgLgKABgYQgBgWALgLQAMgLASAAQARAAAPAGIAAATIgQgHQgGgCgGAAQgMAAgFAHQgGAHAAAOQAAAQAGAGQAFAHALAAQAHAAAEgCIAAgQIgOAAIAAgPIAjAAIAAAoQgQAJgTAAQgSAAgMgLg");
	this.shape_94.setTransform(58.1,-34.1);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#262733").s().p("AgbAkQgKgJAAgRIAAg2IAWAAIAAA1QAAAJAEAGQAFAEAHAAQAJAAAEgFQAEgEAAgKIAAg1IAUAAIAAA2QAAASgKAIQgJAJgRAAQgTAAgKgJg");
	this.shape_95.setTransform(48.3,-34);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#262733").s().p("AgeAiQgLgLAAgXQAAgVALgMQAKgLAUAAQAUAAALALQALALAAAWQAAAXgLALQgLALgUAAQgTAAgLgLgAgPgVQgFAHAAAOQAAAPAFAGQAGAHAJAAQAKAAAFgHQAFgGAAgPQAAgPgFgGQgFgGgKAAQgKAAgFAGg");
	this.shape_96.setTransform(38.1,-34.1);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#262733").s().p("AAMArIgQgdIgNAAIAAAdIgVAAIAAhVIAqAAQAOAAAIAHQAJAGgBAOQABAJgFAGQgEAHgJADIAWAhgAgRgBIARAAQAMAAAAgNQAAgGgDgDQgDgDgGAAIgRAAg");
	this.shape_97.setTransform(28.7,-34.1);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#262733").s().p("AAQArIAAgiIgfAAIAAAiIgVAAIAAhVIAVAAIAAAjIAfAAIAAgjIAVAAIAABVg");
	this.shape_98.setTransform(18.6,-34.1);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#262733").s().p("AgKArIAAhFIgYAAIAAgQIBFAAIAAAQIgZAAIAABFg");
	this.shape_99.setTransform(9.5,-34.1);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#262733").s().p("AgdArIAAhVIA7AAIAAAQIgmAAIAAATIAhAAIAAAPIghAAIAAATIAmAAIAAAQg");
	this.shape_100.setTransform(-3,-34.1);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#262733").s().p("AgaAiQgLgKAAgYQAAgWALgLQALgLATAAQAQAAAPAGIAAATIgPgHQgGgCgHAAQgMAAgFAHQgGAHAAAOQAAAQAGAGQAFAHAKAAQAIAAAFgCIAAgQIgPAAIAAgPIAjAAIAAAoQgQAJgSAAQgTAAgLgLg");
	this.shape_101.setTransform(-12.3,-34.1);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#262733").s().p("AAWArIgHgSIgfAAIgGASIgUAAIAhhVIAWAAIAeBVgAgLAJIAVAAIgKgfg");
	this.shape_102.setTransform(-21.6,-34.1);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#262733").s().p("AAMArIgQgdIgNAAIAAAdIgVAAIAAhVIApAAQAPAAAJAHQAHAGABAOQgBAJgEAGQgEAHgJADIAWAhgAgRgBIARAAQAMAAAAgNQAAgGgDgDQgDgDgGAAIgRAAg");
	this.shape_103.setTransform(-31.1,-34.1);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#262733").s().p("AgdArIAAhVIA7AAIAAAQIgmAAIAAATIAhAAIAAAPIghAAIAAATIAmAAIAAAQg");
	this.shape_104.setTransform(-40.4,-34.1);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#262733").s().p("AgLArIghhVIAZAAIAUA+IAVg+IAXAAIgjBVg");
	this.shape_105.setTransform(-49.6,-34.1);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#262733").s().p("AgeAiQgLgMAAgWQAAgVALgMQALgLATAAQAUAAALALQALALAAAWQAAAXgLALQgKALgVAAQgTAAgLgLgAgOgVQgGAIAAANQAAAPAGAGQAFAHAJAAQAKAAAFgHQAGgGAAgPQAAgOgFgHQgFgGgLAAQgJAAgFAGg");
	this.shape_106.setTransform(-59.1,-34.1);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#262733").s().p("AgiAAQAAgsAqAAQAOAAANAGIAAATQgMgJgNAAQgLAAgGAHQgFAHAAAOQAAAQAFAGQAHAHALAAQAGAAAGgCQAGgCAGgEIAAASQgGADgHABQgGACgIAAQgqAAAAgtg");
	this.shape_107.setTransform(-68.7,-34.1);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#262733").s().p("AgdArIAAhVIA6AAIAAAQIgkAAIAAAVIAfAAIAAAPIgfAAIAAAhg");
	this.shape_108.setTransform(48.8,-49.7);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#262733").s().p("AgeAhQgLgLAAgWQAAgVALgLQAKgMAUAAQAUAAALALQALALAAAWQABAWgLALQgMAMgUAAQgTAAgLgMgAgOgVQgGAHAAAOQAAAPAGAHQAFAGAJAAQAKAAAFgGQAFgHABgPQgBgPgFgGQgEgGgLAAQgKAAgEAGg");
	this.shape_109.setTransform(39.5,-49.7);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#262733").s().p("AAWArIgogzIAAAzIgTAAIAAhVIASAAIAlAyIAAgyIAUAAIAABVg");
	this.shape_110.setTransform(25.1,-49.7);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#262733").s().p("AgeAhQgLgLAAgWQAAgWALgKQAKgMAUAAQAUAAALALQALALAAAWQAAAWgLALQgLAMgUAAQgTAAgLgMgAgPgVQgFAIAAANQAAAOAFAIQAGAGAJAAQAKAAAFgGQAGgIAAgOQAAgOgGgHQgFgGgKAAQgKAAgFAGg");
	this.shape_111.setTransform(14.9,-49.7);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#262733").s().p("AgKArIAAhVIAVAAIAABVg");
	this.shape_112.setTransform(7.5,-49.7);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#262733").s().p("AgPAsQgGgBgIgEIAAgUIANAIQAJACAGAAQALAAAAgJQAAgEgEgCIgMgGIgEgBQgJgDgGgFQgGgFAAgLQAAgIAEgFQADgGAJgEQAIgEAJAAQAIAAAFABIAMAFIAAAUIgMgHQgFgDgIAAQgFAAgDACQgDACAAAFQAAAEACABIAFAEIAJADQAJADAEACQAGACADAFQACAFAAAHQABAIgEAHQgEAGgGAEQgHADgKAAQgJAAgHgBg");
	this.shape_113.setTransform(1.2,-49.7);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#262733").s().p("AgQAsQgFgBgIgEIAAgUQAGAFAHADQAJACAGAAQALAAAAgJQAAgEgEgCIgLgGIgFgBQgKgDgFgFQgGgFABgLQgBgIAEgFQAEgGAHgEQAIgEAKAAQAIAAAFABIAMAFIAAAUIgMgHQgFgDgHAAQgGAAgCACQgEACAAAFQAAAEACABIAFAEIAJADQAIACAFADQAFACADAFQAEAFAAAHQgBAIgDAHQgEAGgHAEQgGADgLAAQgIAAgIgBg");
	this.shape_114.setTransform(-7,-49.7);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#262733").s().p("AgbAkQgKgJAAgRIAAg2IAWAAIAAA1QAAAJAEAGQAFAEAHAAQAIAAAEgFQAFgEAAgKIAAg1IAUAAIAAA2QAAASgJAIQgKAJgRAAQgTAAgKgJg");
	this.shape_115.setTransform(-16.1,-49.6);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#262733").s().p("AgiAAQAAgsApAAQAOAAAOAGIAAATQgLgJgNAAQgMAAgFAHQgHAHAAAOQAAAQAHAGQAFAHANAAQAFAAAFgCQAHgCAGgEIAAASIgNAEQgGACgJAAQgpAAAAgtg");
	this.shape_116.setTransform(-25.7,-49.7);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#262733").s().p("AgQAsQgEgBgJgEIAAgUQAGAFAHADQAJACAGAAQALAAAAgJQAAgEgEgCIgLgGIgFgBQgKgDgFgFQgGgFAAgLQAAgHAEgGQAEgGAHgEQAIgEAKAAQAHAAAGABIAMAFIAAAUIgMgHQgFgDgHAAQgFAAgEACQgDADAAAEQAAADACACIAFAEIAJADQAJADAEACQAFACAEAFQADAFAAAHQAAAIgEAHQgDAGgIAEQgGADgKAAQgJAAgIgBg");
	this.shape_117.setTransform(-34.1,-49.7);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#262733").s().p("AgJArIAAhVIATAAIAABVg");
	this.shape_118.setTransform(-40.5,-49.7);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#262733").s().p("AgmArIAAhVIAjAAQAVAAALALQAKAKAAAVQAAAWgKALQgLAKgVAAgAgQAbIALAAQALAAAFgGQAGgHABgOQgBgNgGgGQgFgHgLAAIgLAAg");
	this.shape_119.setTransform(-47.5,-49.7);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#262733").s().p("AgWAdIAAgOIAKAFIAJACQAFAAADgCQADgCAAgEQAAgJgLAAIgKAAIAAgLIAKAAQAEAAACgCQACgCAAgDQAAgEgDgCQgCgCgFAAIgHABIgIADIAAgMIAIgDIAJgBQAJAAAHAEQAHAGAAAIQAAAEgCACIgEAFIgEACIAGACIAFAGQACAFAAAEQAAAKgIAEQgHAFgKAAQgKAAgKgFg");
	this.shape_120.setTransform(33.9,-74.3);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#262733").s().p("AARAhIgegnIAAAnIgPAAIAAhBIAOAAIAdAmIAAgmIAOAAIAABBg");
	this.shape_121.setTransform(23.5,-74.3);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#262733").s().p("AgXAaQgIgJAAgRQAAgPAIgKQAJgJAOAAQAPAAAJAJQAIAJAAAQQAAASgIAIQgIAJgQAAQgNAAgKgJgAgLgPQgEAFAAAKQAAALAEAGQAFAFAGAAQAHAAAFgFQAEgGAAgLQAAgKgEgFQgDgFgJAAQgHAAgEAFg");
	this.shape_122.setTransform(15.7,-74.3);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#262733").s().p("AgHAhIAAhBIAPAAIAABBg");
	this.shape_123.setTransform(10,-74.3);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#262733").s().p("AgMAiQgEgBgGgDIAAgPQAFAEAFABQAFACAGAAQAJAAAAgHQAAgCgDgDIgJgEIgEgBQgGgBgFgEQgEgFAAgIQAAgEACgGQADgFAGgDQAGgDAHAAIAKABIAKAEIAAAPIgJgFQgFgCgFAAQgEAAgCACQgDABAAAEQAAAAAAABQAAABABAAQAAABAAAAQAAAAABABIAEACIAQAHQAEABADAEQACAEAAAFQAAAHgDAEQgCAFgGADQgGADgHAAIgMgBg");
	this.shape_124.setTransform(5.1,-74.3);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#262733").s().p("AgMAiQgEgBgGgDIAAgPQAFAEAFABQAGACAFAAQAJAAgBgHQAAgCgCgDIgJgEIgEgBQgHgCgEgDQgFgFABgIQAAgFADgFQADgFAFgDQAGgDAHAAIALABIAJAEIAAAPIgJgFQgFgCgFAAQgEAAgCACQgDABAAAEQAAAAAAABQAAABABAAQAAABAAAAQAAAAABABIAEACIAQAHQAFABACAEQACAEAAAFQAAAHgCAEQgEAGgFACQgGADgHAAIgMgBg");
	this.shape_125.setTransform(-1.1,-74.3);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#262733").s().p("AgWAhIAAhBIAtAAIAAAMIgcAAIAAAPIAYAAIAAALIgYAAIAAAPIAcAAIAAAMg");
	this.shape_126.setTransform(-7.5,-74.3);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#262733").s().p("AgMAiQgEgBgGgDIAAgPQAFAEAFABQAGACAGAAQAIAAgBgHQAAgCgCgDIgJgEIgEgBQgGgCgFgDQgFgFAAgIQABgFADgFQADgFAFgDQAGgDAHAAIAKABIAJAEIAAAPIgJgFQgEgCgFAAQgEAAgCACQgDABAAAEQAAAAAAABQAAABABAAQAAABAAAAQABAAAAABIAEACIAHADIAKAEQAEABACAEQACAEABAFQAAAHgDAEQgDAGgGACQgGADgHAAIgMgBg");
	this.shape_127.setTransform(-13.8,-74.3);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#262733").s().p("AgMAiQgEgBgGgDIAAgPQAFAEAFABQAFACAGAAQAJAAAAgHQAAgCgDgDIgJgEIgEgBQgGgBgFgEQgEgFAAgIQAAgEACgGQADgFAGgDQAGgDAHAAIALABIAJAEIAAAPIgJgFQgFgCgFAAQgEAAgCACQgDABAAAEQAAAAAAABQAAABABAAQAAABAAAAQAAAAABABIAEACIAQAHQAEABADAEQACAEAAAFQAAAHgDAEQgCAFgGADQgGADgHAAIgMgBg");
	this.shape_128.setTransform(-23.4,-74.3);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#262733").s().p("AAOAhIgOgqIgMAqIgQAAIgThBIASAAIAKAtIAOgtIAMAAIANAtIALgtIARAAIgTBBg");
	this.shape_129.setTransform(-31.8,-74.3);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f().s("#3F3B4F").ss(3).p("AtRtRIAAajIajAAIAA6jg");
	this.shape_130.setTransform(0,-9.5);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#FFFFFF").s().p("AtRNSIAA6jIajAAIAAajg");
	this.shape_131.setTransform(0,-9.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer 2
	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#FFFFFF").s().p("AtRNSIAA6jIajAAIAAajg");
	this.shape_132.setTransform(0,-9.6,1.235,1.235);

	this.timeline.addTween(cjs.Tween.get(this.shape_132).wait(1));

}).prototype = getMCSymbolPrototype(lib.SD36, new cjs.Rectangle(-104.9,-114.5,210,210), null);


(lib.SD35 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgRAXIAAgKQAHAFAJAAQAKAAAAgGQAAAAAAgBQgBgBAAAAQAAgBAAAAQgBgBAAAAIgFgDIgGgCIgGgDQgDAAgCgDQgCgDAAgFQAAgHAFgEQAFgEAIAAQAHAAAHADIAAAKQgGgEgHAAQgEAAgDABQgDACAAADQAAADADABIAGADIAIACQAEACADADQACAEAAAGQAAAGgFAEQgFAEgIAAQgJAAgIgEg");
	this.shape.setTransform(25.3,86.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgRAbIAAg1IAjAAIAAAJIgZAAIAAAOIAVAAIAAAIIgVAAIAAANIAZAAIAAAJg");
	this.shape_1.setTransform(20.4,86.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgCAbIgGgDQgEgCgCgDQgDgCgBgFQgCgFAAgHQAAgGACgEQABgFADgDQACgDAEgCIAGgDIAGAAQAIAAAJADIAAAJQgIgEgIAAIgFABIgFACQgDACAAAEQgCAEAAAFQAAAGACAEQAAAEADACIAFACIAFABQAIAAAIgEIAAAJQgJADgIAAIgGAAg");
	this.shape_2.setTransform(15.1,86.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AANAbIgbgnIAAAnIgJAAIAAg1IALAAIAbAnIAAgnIAJAAIAAA1g");
	this.shape_3.setTransform(9.1,86.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgRAbIAAg1IAjAAIAAAJIgZAAIAAAOIAVAAIAAAIIgVAAIAAANIAZAAIAAAJg");
	this.shape_4.setTransform(3.3,86.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAKAbIgMgTIgJAAIAAATIgJAAIAAg1IAUAAQAJAAAFAFQAFAEAAAJQAAALgMADIAOAVgAgLAAIALAAQAEAAADgCQACgBAAgFQAAgFgCgCQgDgCgEAAIgLAAg");
	this.shape_5.setTransform(-1.9,86.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgRAbIAAg1IAjAAIAAAJIgZAAIAAAOIAVAAIAAAIIgVAAIAAANIAZAAIAAAJg");
	this.shape_6.setTransform(-7.4,86.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgQAbIAAg1IAhAAIAAAJIgYAAIAAAOIAVAAIAAAIIgVAAIAAAWg");
	this.shape_7.setTransform(-12.3,86.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgQAbIAAg1IAhAAIAAAJIgYAAIAAAOIAVAAIAAAIIgVAAIAAAWg");
	this.shape_8.setTransform(-17.1,86.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgEAbIAAg1IAJAAIAAA1g");
	this.shape_9.setTransform(-21.1,86.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgVAbIAAg1IATAAQALAAAGAHQAHAHAAAMQAAANgHAHQgGAHgLAAgAgLASIAJAAQAHAAAEgEQADgEAAgKQAAgJgDgEQgEgEgHAAIgJAAg");
	this.shape_10.setTransform(-25.3,86.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgSAiIAchDIAJAAIgdBDg");
	this.shape_11.setTransform(38.3,75.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AANAbIgagnIAAAnIgKAAIAAg1IALAAIAbAnIAAgnIAJAAIAAA1g");
	this.shape_12.setTransform(30,75.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgGAbIgHgDQgDgCgCgDQgDgCgBgFQgCgFAAgHQAAgFACgFQABgFADgDQACgDADgCIAHgDIAGAAIAHAAIAHADIAGAFIADAIQACAFAAAFQAAAHgCAFQgBAFgCACIgGAFIgHADIgHAAIgGAAgAgEgRIgEABIgDADIgCAGIgBAHIABAKIADAGIAFACIAFABIAFAAIAEgCIADgDIADgGIAAgIIgBgJIgDgGIgFgCIgGgBg");
	this.shape_13.setTransform(23.4,75.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgEAbIAAg1IAJAAIAAA1g");
	this.shape_14.setTransform(18.9,75.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgEAbIAAgrIgRAAIAAgKIArAAIAAAKIgRAAIAAArg");
	this.shape_15.setTransform(15.1,75.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AARAbIgGgNIgVAAIgFANIgLAAIAWg1IAKAAIAUA1gAAIAFIgIgUIgHAUIAPAAg");
	this.shape_16.setTransform(9.6,75.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgEAbIAAgrIgRAAIAAgKIArAAIAAAKIgRAAIAAArg");
	this.shape_17.setTransform(4.1,75.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AANAbIgbgnIAAAnIgJAAIAAg1IALAAIAaAnIAAgnIAKAAIAAA1g");
	this.shape_18.setTransform(-1.6,75.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgRAbIAAg1IAjAAIAAAJIgZAAIAAAOIAVAAIAAAIIgVAAIAAANIAZAAIAAAJg");
	this.shape_19.setTransform(-7.3,75.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AAQAbIAAgnIgQAXIgPgXIAAAnIgKAAIAAg1IALAAIAOAXIAPgXIALAAIAAA1g");
	this.shape_20.setTransform(-13.5,75.4);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgPAVQgGgGAAgLIAAgeIAJAAIAAAeQAAAIADADQADADAGABQAHgBADgDQADgDAAgIIAAgeIAJAAIAAAeQAAALgFAGQgGAGgLAAQgKAAgFgGg");
	this.shape_21.setTransform(-20.2,75.5);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AADAbIgGAAIgHgDIgGgEQgCgDgCgFQgCgFABgHQgBgFACgFQACgFACgDQACgDADgCIAIgDIAGAAQAIAAAKADIAAAJQgJgEgJAAIgEABIgEABQgBAAAAABQgBAAAAABQgBAAAAAAQAAABgBAAIgCAGIgBAHIABAIIACAGQABAAAAABQAAAAABAAQAAABABAAQAAABABAAQAAAAABAAQABABAAAAQABAAAAAAQABAAAAAAIAEABIAKgCIAAgMIgMAAIAAgIIAWAAIAAAaQgKAEgKAAg");
	this.shape_22.setTransform(-26.2,75.4);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AAKAbIgMgTIgJAAIAAATIgJAAIAAg1IAUAAQAJAAAFAFQAFAEAAAJQAAALgMADIAOAVgAgLAAIALAAQAEAAADgCQACgBAAgFQAAgFgCgCQgDgCgEAAIgLAAg");
	this.shape_23.setTransform(-31.7,75.4);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AARAbIgGgNIgVAAIgFANIgLAAIAWg1IAKAAIAUA1gAAIAFIgIgUIgHAUIAPAAg");
	this.shape_24.setTransform(-37.7,75.4);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AANAbIgbgnIAAAnIgJAAIAAg1IALAAIAbAnIAAgnIAJAAIAAA1g");
	this.shape_25.setTransform(18.5,64.4);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgGAbIgHgDQgDgCgCgDQgDgCgBgFQgCgFAAgHQAAgFACgFQABgFADgDQACgDADgCIAHgDIAGAAIAHAAIAHADIAGAFIADAIQACAFAAAFQAAAHgCAFQgBAFgCACIgGAFIgHADIgHAAIgGAAgAgEgRIgEABIgDADIgCAGIgBAHIABAKIADAGIAFACIAFABIAFAAIAEgCIADgDIADgGIAAgIIgBgJIgDgGIgFgCIgGgBg");
	this.shape_26.setTransform(12,64.4);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgRAXIAAgKQAHAFAJAAQAKAAAAgGQAAgBAAAAQAAgBgBAAQAAgBAAAAQgBgBAAAAIgFgDIgGgCIgGgDQgDAAgCgDQgCgDAAgFQAAgHAFgEQAFgEAIAAQAHAAAHADIAAAKQgGgEgHAAQgEAAgDABQgDACAAADQAAABAAAAQABABAAAAQAAABABAAQAAABABAAIAGADIAIACQAEACADADQACAEAAAGQAAAGgFAEQgFAEgIAAQgJAAgIgEg");
	this.shape_27.setTransform(3.2,64.4);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgRAbIAAg1IAjAAIAAAJIgZAAIAAAOIAVAAIAAAIIgVAAIAAANIAZAAIAAAJg");
	this.shape_28.setTransform(-1.7,64.4);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgEAbIAAgrIgRAAIAAgKIArAAIAAAKIgRAAIAAArg");
	this.shape_29.setTransform(-6.9,64.4);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgGAbIgHgDQgDgCgCgDQgDgCgBgFQgCgFAAgHQAAgFACgFQABgFADgDQACgDADgCIAHgDIAGAAIAHAAIAHADIAGAFIADAIQACAFAAAFQAAAHgCAFQgBAFgCACIgGAFIgHADIgHAAIgGAAgAgEgRIgEABIgDADIgCAGIgBAHIABAKIADAGIAFACIAFABIAFAAIAEgCIADgDIADgGIAAgIIgBgJIgDgGIgFgCIgGgBg");
	this.shape_30.setTransform(-12.6,64.4);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AANAbIgagnIAAAnIgKAAIAAg1IALAAIAaAnIAAgnIAKAAIAAA1g");
	this.shape_31.setTransform(-19,64.4);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#2FB7AA").s().p("AnwC/IAAl9IPhAAIAAF9g");
	this.shape_32.setTransform(0,75.5);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#262733").s().p("AAWArIgngzIAAAzIgUAAIAAhVIASAAIAmAyIAAgyIATAAIAABVg");
	this.shape_33.setTransform(67.2,5.9);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#262733").s().p("AgeAiQgLgMAAgWQAAgVALgMQALgLATAAQAUAAALALQALALAAAWQAAAXgLALQgKALgVAAQgUAAgKgLgAgOgVQgFAHAAAOQAAAPAFAGQAFAHAJAAQAKAAAGgHQAFgGAAgPQAAgPgFgGQgFgGgLAAQgJAAgFAGg");
	this.shape_34.setTransform(57,6);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#262733").s().p("AgKArIAAhVIAVAAIAABVg");
	this.shape_35.setTransform(49.6,5.9);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#262733").s().p("AgQAsQgEgBgJgEIAAgUQAGAFAHADQAJACAGAAQALAAAAgJQAAgEgEgCIgLgGIgFgBQgKgDgFgFQgGgFAAgLQAAgHAEgGQAEgGAHgEQAIgEAKAAQAHAAAGABIAMAFIAAAUQgEgDgIgEQgFgDgIAAQgEAAgEACQgDADAAAEQAAACACADIAFAEIAJADIANAFQAFACADAFQAEAFAAAHQAAAIgEAHQgDAGgIAEQgGADgKAAQgJAAgIgBg");
	this.shape_36.setTransform(43.3,5.9);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#262733").s().p("AgQAsQgEgBgJgEIAAgUQAGAFAHADQAJACAGAAQALAAAAgJQAAgEgEgCIgLgGIgFgBQgKgDgFgFQgGgFAAgLQAAgHAEgGQADgGAIgEQAIgEAKAAQAHAAAGABIAMAFIAAAUQgEgDgIgEQgFgDgIAAQgEAAgEACQgDADAAAEQAAACACADIAFAEIAJADIANAFQAFACADAFQAEAFAAAHQAAAIgEAHQgDAGgIAEQgGADgKAAQgJAAgIgBg");
	this.shape_37.setTransform(35.1,5.9);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#262733").s().p("AgdArIAAhVIA7AAIAAAQIgmAAIAAATIAhAAIAAAPIghAAIAAATIAmAAIAAAQg");
	this.shape_38.setTransform(26.9,5.9);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#262733").s().p("AgQAsQgFgBgIgEIAAgUQAGAFAHADQAJACAGAAQALAAAAgJQAAgEgEgCQgDgDgJgDIgFgBQgJgDgFgFQgGgFAAgLQAAgGAEgHQADgGAIgEQAIgEAKAAQAIAAAFABIAMAFIAAAUIgMgHQgFgDgIAAQgEAAgEACQgDACAAAFQAAADACACIAFAEIAJADIANAFQAFACADAFQAEAGAAAGQAAAIgEAHQgEAGgHAEQgHADgKAAQgIAAgIgBg");
	this.shape_39.setTransform(18.6,5.9);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#262733").s().p("AAWArIgngzIAAAzIgUAAIAAhVIASAAIAmAyIAAgyIATAAIAABVg");
	this.shape_40.setTransform(5.2,5.9);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#262733").s().p("AgeAiQgMgMAAgWQABgUAKgNQAMgLATAAQAUAAALALQAMALAAAWQAAAWgMAMQgLALgUAAQgTAAgLgLgAgPgVQgEAHAAAOQAAAPAEAGQAGAHAJAAQAKAAAGgHQAEgGAAgPQAAgPgEgGQgGgGgKAAQgJAAgGAGg");
	this.shape_41.setTransform(-4.9,6);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#262733").s().p("AgKArIAAhVIAVAAIAABVg");
	this.shape_42.setTransform(-12.3,5.9);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#262733").s().p("AgQAsQgEgBgJgEIAAgUQAGAFAHADQAJACAGAAQALAAAAgJQAAgEgEgCIgLgGIgFgBQgKgDgFgFQgGgFAAgLQAAgHAEgGQAEgGAHgEQAIgEAKAAQAHAAAGABIAMAFIAAAUQgEgDgIgEQgFgDgHAAQgFAAgEACQgDADAAAEQAAADACACIAFAEIAJADIANAFQAFACAEAFQADAFAAAHQAAAHgEAIQgEAGgHAEQgGADgKAAQgJAAgIgBg");
	this.shape_43.setTransform(-18.7,5.9);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#262733").s().p("AgQAsQgEgBgJgEIAAgUQAGAFAHADQAJACAGAAQALAAAAgJQAAgEgEgCIgLgGIgFgBQgKgDgFgFQgGgFAAgLQAAgHAEgGQAEgGAHgEQAIgEAKAAQAHAAAGABIAMAFIAAAUIgMgHQgFgDgHAAQgFAAgEACQgDADAAAEQAAADACACIAFAEIAJADIANAFQAFACAEAFQADAFAAAHQAAAHgEAIQgEAGgHAEQgGADgKAAQgJAAgIgBg");
	this.shape_44.setTransform(-26.8,5.9);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#262733").s().p("AgbAkQgKgJAAgRIAAg2IAWAAIAAA1QAAAKAEAFQAEAEAHAAQAJAAAEgFQAFgEAAgKIAAg1IAUAAIAAA2QAAARgKAJQgKAJgQAAQgTAAgKgJg");
	this.shape_45.setTransform(-35.9,6.1);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#262733").s().p("AgiAAQAAgsAqAAQANAAAOAGIAAATQgMgJgNAAQgLAAgFAHQgGAHAAAOQAAAQAGAGQAGAHALAAQAGAAAGgCIAMgGIAAASIgNAEQgHACgHAAQgqAAAAgtg");
	this.shape_46.setTransform(-45.5,5.9);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#262733").s().p("AgPAsQgGgBgIgEIAAgUQAHAFAGADQAIACAHAAQALAAAAgJQAAgEgEgCQgDgDgIgDIgGgBQgIgDgGgFQgFgFAAgLQAAgIADgFQADgHAJgDQAHgEAKAAQAIAAAFABIAMAFIAAAUIgMgHQgFgDgHAAQgGAAgCACQgEACAAAFQAAADACACIAFAEIAJADIANAFQAFACAEAFQACAFAAAHQAAAIgDAHQgEAGgHAEQgHADgJAAQgJAAgHgBg");
	this.shape_47.setTransform(-53.9,5.9);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#262733").s().p("AgKArIAAhVIAVAAIAABVg");
	this.shape_48.setTransform(-60.3,5.9);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#262733").s().p("AgmArIAAhVIAjAAQAVAAAKALQALAKAAAVQAAAWgLALQgKAKgVAAgAgRAbIAMAAQAKAAAGgGQAGgHAAgOQAAgNgGgGQgGgHgKAAIgMAAg");
	this.shape_49.setTransform(-67.4,5.9);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#262733").s().p("AgPAsQgGgBgIgEIAAgUQAGAFAIADQAHACAHAAQALAAAAgJQAAgEgEgCQgDgDgIgDIgGgBQgIgDgGgFQgFgFAAgLQAAgIADgFQADgGAJgEQAHgEAKAAQAIAAAFABIAMAFIAAAUIgMgHQgFgDgHAAQgGAAgCACQgEACAAAFQAAAEACABIAFAEIAJADIANAFQAFACAEAFQACAFAAAHQAAAIgDAHQgEAGgHAEQgHADgJAAQgJAAgHgBg");
	this.shape_50.setTransform(65.4,-9.7);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#262733").s().p("AAWArIgogzIAAAzIgTAAIAAhVIASAAIAlAyIAAgyIAUAAIAABVg");
	this.shape_51.setTransform(56.2,-9.7);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#262733").s().p("AgeAhQgLgKAAgXQAAgWALgKQAKgMAUAAQAUAAALALQALALAAAWQAAAXgLAKQgLAMgUAAQgTAAgLgMgAgOgVQgGAIAAANQAAAOAGAIQAFAGAJAAQAKAAAFgGQAGgIAAgOQAAgOgGgHQgEgGgLAAQgKAAgEAGg");
	this.shape_52.setTransform(46.1,-9.6);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#262733").s().p("AgJArIAAhVIAUAAIAABVg");
	this.shape_53.setTransform(38.7,-9.7);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#262733").s().p("AgKArIAAhFIgYAAIAAgQIBFAAIAAAQIgZAAIAABFg");
	this.shape_54.setTransform(32.2,-9.7);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#262733").s().p("AAWArIgHgSIgfAAIgGASIgUAAIAhhVIAWAAIAeBVgAgLAJIAVAAIgKgfg");
	this.shape_55.setTransform(24,-9.7);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#262733").s().p("AgmArIAAhVIAjAAQAVAAAKALQALAKAAAVQAAAWgLALQgKAKgVAAgAgRAbIALAAQALAAAGgGQAGgHAAgOQAAgNgGgGQgGgHgLAAIgLAAg");
	this.shape_56.setTransform(14.5,-9.7);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#262733").s().p("AAWArIgogzIAAAzIgTAAIAAhVIASAAIAlAyIAAgyIAUAAIAABVg");
	this.shape_57.setTransform(4.3,-9.7);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#262733").s().p("AgdArIAAhVIA7AAIAAAQIgmAAIAAATIAhAAIAAAPIghAAIAAATIAmAAIAAAQg");
	this.shape_58.setTransform(-4.9,-9.7);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#262733").s().p("AAZArIAAg5IgZAhIgZghIAAA5IgUAAIAAhVIAWAAIAXAiIAZgiIAVAAIAABVg");
	this.shape_59.setTransform(-14.9,-9.7);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#262733").s().p("AAZArIAAg5IgZAhIgZghIAAA5IgUAAIAAhVIAWAAIAXAiIAZgiIAVAAIAABVg");
	this.shape_60.setTransform(-26.6,-9.7);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#262733").s().p("AgeAhQgMgLAAgWQAAgVALgLQAMgMATAAQAUAAALALQALALAAAWQAAAWgLALQgLAMgUAAQgTAAgLgMgAgOgVQgFAHgBAOQABAPAFAHQAFAGAJAAQAKAAAFgGQAGgHgBgPQABgPgGgGQgEgGgLAAQgKAAgEAGg");
	this.shape_61.setTransform(-37.5,-9.6);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#262733").s().p("AgiAAQAAgsApAAQAOAAAOAGIAAATQgMgJgNAAQgLAAgGAHQgFAHAAAOQAAAQAGAGQAGAHALAAQAGAAAGgCQAFgCAHgEIAAASIgNAEQgHACgIAAQgpAAAAgtg");
	this.shape_62.setTransform(-47.1,-9.7);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#262733").s().p("AgdArIAAhVIA7AAIAAAQIglAAIAAATIAfAAIAAAPIgfAAIAAATIAlAAIAAAQg");
	this.shape_63.setTransform(-55.6,-9.7);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#262733").s().p("AANArIgRgdIgNAAIAAAdIgVAAIAAhVIAqAAQAOAAAIAHQAJAGgBAOQAAAJgEAGQgEAHgJADIAWAhgAgRgBIARAAQAMAAAAgNQAAgGgDgDQgDgDgFAAIgSAAg");
	this.shape_64.setTransform(-64.5,-9.7);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#262733").s().p("AgIArIAAglIghgwIAZAAIATAhIASghIAVAAIgfAwIAAAlg");
	this.shape_65.setTransform(27,-25.3);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#262733").s().p("AAMArIgQgdIgNAAIAAAdIgVAAIAAhVIApAAQAPAAAJAHQAHAGABAOQAAAJgFAGQgFAHgIADIAWAhgAgRgBIARAAQAMAAAAgNQAAgGgDgDQgDgDgFAAIgSAAg");
	this.shape_66.setTransform(18.3,-25.3);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#262733").s().p("AAWArIgHgSIgfAAIgGASIgUAAIAhhVIAWAAIAeBVgAgLAJIAVAAIgKgfg");
	this.shape_67.setTransform(8.3,-25.3);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#262733").s().p("AAWArIgngzIAAAzIgUAAIAAhVIASAAIAmAyIAAgyIATAAIAABVg");
	this.shape_68.setTransform(-1.5,-25.3);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#262733").s().p("AgdArIAAhVIA7AAIAAAQIgmAAIAAATIAgAAIAAAPIggAAIAAATIAmAAIAAAQg");
	this.shape_69.setTransform(-10.7,-25.3);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#262733").s().p("AgdArIAAhVIAWAAIAABFIAkAAIAAAQg");
	this.shape_70.setTransform(-18.6,-25.3);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#262733").s().p("AgjArIAAhVIAmAAQAQAAAIAHQAJAHAAAOQAAAOgJAHQgJAIgPAAIgRAAIAAAcgAgOAAIAPAAQAGAAADgEQADgDAAgGQAAgNgMAAIgPAAg");
	this.shape_71.setTransform(-27.2,-25.3);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f().s("#3F3B4F").ss(3).p("AtRtRIAAajIajAAIAA6jg");
	this.shape_72.setTransform(0,-9.5);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#FFFFFF").s().p("AtRNSIAA6jIajAAIAAajg");
	this.shape_73.setTransform(0,-9.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer 2
	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#FFFFFF").s().p("AtRNSIAA6jIajAAIAAajg");
	this.shape_74.setTransform(0,-9.6,1.235,1.235);

	this.timeline.addTween(cjs.Tween.get(this.shape_74).wait(1));

}).prototype = getMCSymbolPrototype(lib.SD35, new cjs.Rectangle(-104.9,-114.5,210,210), null);


(lib.SD34 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgRAXIAAgKQAHAFAJAAQAKAAAAgGQAAgBAAAAQgBgBAAAAQAAgBAAAAQgBgBAAAAIgFgDIgGgCIgGgDQgDAAgCgDQgCgDAAgFQAAgHAFgEQAFgEAIAAQAHAAAHADIAAAKQgGgEgHAAQgEAAgDABQgDACAAADQAAABAAAAQABABAAABQAAAAABAAQAAABABAAIAGADIAIACQAEACADADQACAEAAAGQAAAGgFAEQgFAEgIAAQgJAAgIgEg");
	this.shape.setTransform(35.1,81.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgRAbIAAg1IAjAAIAAAJIgZAAIAAAOIAVAAIAAAIIgVAAIAAANIAZAAIAAAJg");
	this.shape_1.setTransform(30.1,81.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgEAbIAAg1IAJAAIAAA1g");
	this.shape_2.setTransform(26.1,81.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgEAbIAAgrIgRAAIAAgKIArAAIAAAKIgRAAIAAArg");
	this.shape_3.setTransform(22.3,81.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgEAbIAAg1IAJAAIAAA1g");
	this.shape_4.setTransform(18.5,81.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgRAbIAAg1IAKAAIAAAsIAYAAIAAAJg");
	this.shape_5.setTransform(15,81.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgEAbIAAg1IAJAAIAAA1g");
	this.shape_6.setTransform(11,81.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgTAbIAAg1IATAAIAGABIAGADQACABACADQABADAAAEQAAAHgGAEQAJACAAAJIAAAEIgCAEIgDAEIgGADIgIABgAgKASIAKAAQALAAAAgHQAAgHgLAAIgKAAgAgKgEIAKAAQAIAAAAgGQAAgHgIAAIgKAAg");
	this.shape_7.setTransform(7,81.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AARAbIgFgNIgWAAIgFANIgKAAIAVg1IAJAAIAWA1gAAIAFIgIgUIgHAUIAPAAg");
	this.shape_8.setTransform(1.1,81.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAKAbIgMgTIgJAAIAAATIgJAAIAAg1IAUAAQAJAAAFAFQAFAEAAAJQAAALgMADIAOAVgAgLAAIALAAQAEAAADgCQACgBAAgFQAAgFgCgCQgDgCgEAAIgLAAg");
	this.shape_9.setTransform(-4.5,81.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgRAbIAAg1IAjAAIAAAJIgZAAIAAAOIAVAAIAAAIIgVAAIAAANIAZAAIAAAJg");
	this.shape_10.setTransform(-9.9,81.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AANAbIgagnIAAAnIgKAAIAAg1IALAAIAaAnIAAgnIAKAAIAAA1g");
	this.shape_11.setTransform(-15.8,81.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgRAbIAAg1IAKAAIAAAsIAYAAIAAAJg");
	this.shape_12.setTransform(-21.2,81.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgPAVQgGgGAAgLIAAgeIAJAAIAAAfQAAAHADADQADADAGAAQAHAAADgDQADgDAAgHIAAgfIAJAAIAAAeQAAALgFAGQgGAGgLAAQgKAAgFgGg");
	this.shape_13.setTransform(-27.1,81.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgEAbIgUg1IAKAAIAOApIAPgpIAKAAIgUA1g");
	this.shape_14.setTransform(-33,81.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AANAbIgagnIAAAnIgKAAIAAg1IALAAIAbAnIAAgnIAJAAIAAA1g");
	this.shape_15.setTransform(40.7,70.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgGAbIgHgDQgDgCgCgDQgDgCgBgFQgCgFAAgHQAAgFACgFQABgFADgDQACgDADgCIAHgDIAGAAIAHAAIAHADIAGAFIADAIQACAFAAAFQAAAHgCAFQgBAFgCACIgGAFIgHADIgHAAIgGAAgAgEgRIgEABIgDADIgCAGIgBAHIABAKIADAGIAFACIAFABIAFAAIAEgCIADgDIADgGIAAgIIgBgJIgDgGIgFgCIgGgBg");
	this.shape_16.setTransform(34.1,70.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgRAXIAAgKQAHAFAJAAQAKAAAAgGQAAAAAAgBQAAgBgBAAQAAgBAAAAQgBgBAAAAIgFgDIgGgCIgGgDQgDAAgCgDQgCgDAAgFQAAgHAFgEQAFgEAIAAQAHAAAHADIAAAKQgGgEgHAAQgEAAgDABQgDACAAADQAAADADABIAGADIAIACQAEACADADQACAEAAAGQAAAGgFAEQgFAEgIAAQgJAAgIgEg");
	this.shape_17.setTransform(25.4,70.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgRAbIAAg1IAjAAIAAAJIgZAAIAAAOIAVAAIAAAIIgVAAIAAANIAZAAIAAAJg");
	this.shape_18.setTransform(20.4,70.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgEAbIAAgrIgRAAIAAgKIArAAIAAAKIgRAAIAAArg");
	this.shape_19.setTransform(15.3,70.3);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgGAbIgHgDQgDgCgCgDQgDgCgBgFQgCgFAAgHQAAgFACgFQABgFADgDQACgDADgCIAHgDIAGAAIAHAAIAHADIAGAFIADAIQACAFAAAFQAAAHgCAFQgBAFgCACIgGAFIgHADIgHAAIgGAAgAgEgRIgEABIgDADIgCAGIgBAHIABAKIADAGIAFACIAFABIAFAAIAEgCIADgDIADgGIAAgIIgBgJIgDgGIgFgCIgGgBg");
	this.shape_20.setTransform(9.6,70.3);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AANAbIgagnIAAAnIgKAAIAAg1IALAAIAaAnIAAgnIAKAAIAAA1g");
	this.shape_21.setTransform(3.2,70.3);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgVAbIAAg1IATAAQALAAAGAHQAHAHAAAMQAAANgHAHQgGAHgLAAgAgLASIAJAAQAHAAAEgEQADgEAAgKQAAgJgDgEQgEgEgHAAIgJAAg");
	this.shape_22.setTransform(-6.1,70.3);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AANAbIgbgnIAAAnIgJAAIAAg1IALAAIAaAnIAAgnIAKAAIAAA1g");
	this.shape_23.setTransform(-12.4,70.3);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AARAbIgGgNIgVAAIgFANIgKAAIAVg1IAJAAIAWA1gAAIAFIgIgUIgHAUIAPAAg");
	this.shape_24.setTransform(-18.7,70.3);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgEAbIAAgrIgRAAIAAgKIArAAIAAAKIgRAAIAAArg");
	this.shape_25.setTransform(-27.3,70.3);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgRAXIAAgKQAHAFAJAAQAKAAAAgGQAAAAAAgBQAAgBgBAAQAAgBAAAAQgBgBAAAAIgFgDIgGgCIgGgDQgDAAgCgDQgCgDAAgFQAAgHAFgEQAFgEAIAAQAHAAAHADIAAAKQgGgEgHAAQgEAAgDABQgDACAAADQAAADADABIAGADIAIACQAEACADADQACAEAAAGQAAAGgFAEQgFAEgIAAQgJAAgIgEg");
	this.shape_26.setTransform(-32.2,70.3);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgEAbIAAg1IAJAAIAAA1g");
	this.shape_27.setTransform(-36.1,70.3);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgRAbIAAg1IAKAAIAAAsIAYAAIAAAJg");
	this.shape_28.setTransform(-39.5,70.3);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#2FB7AA").s().p("AnlC/IAAl9IPLAAIAAF9g");
	this.shape_29.setTransform(1.1,75.5);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#262733").s().p("AgLAhIgJgEIAAgIQADADAGACQAEACAHAAQAHAAADgDQAEgDAAgGQAAgEgCgCIgFgEIgRgHIgHgFQgCgEgBgGQAAgFACgDQACgEAFgDQAFgCAGAAIAIABIAJADIAAAIIgDgCIgHgDIgHgBQgFAAgEADQgDADAAAEQAAAFACACIAEAEIASAGQADACADAEQAEAEAAAGQAAAHgGAGQgFAFgLAAg");
	this.shape_30.setTransform(34.9,37.9);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#262733").s().p("AgDAhIAAgeIgYgjIAJAAIASAdIAUgdIAJAAIgZAjIAAAeg");
	this.shape_31.setTransform(28.6,37.9);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#262733").s().p("AAXAhIgIgUIgcAAIgIAUIgIAAIAbhBIAGAAIAaBBgAgLAGIAXAAIgMgeg");
	this.shape_32.setTransform(22.6,37.9);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#262733").s().p("AASAhIgSg2IgQA2IgIAAIgVhBIAHAAIASA4IASg4IAGAAIARA4IASg4IAHAAIgVBBg");
	this.shape_33.setTransform(14.5,37.9);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#262733").s().p("AgCAhIAAg6IgYAAIAAgHIA1AAIAAAHIgXAAIAAA6g");
	this.shape_34.setTransform(2.9,37.9);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#262733").s().p("AAWAhIgIgUIgbAAIgIAUIgIAAIAahBIAHAAIAaBBgAgLAGIAXAAIgMgeg");
	this.shape_35.setTransform(-3.2,37.9);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#262733").s().p("AASAhIAAgdIgiAAIAAAdIgIAAIAAhBIAIAAIAAAeIAiAAIAAgeIAHAAIAABBg");
	this.shape_36.setTransform(-10.2,37.9);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#262733").s().p("AASAhIgSg2IgQA2IgIAAIgVhBIAHAAIASA4IARg4IAHAAIARA4IASg4IAHAAIgVBBg");
	this.shape_37.setTransform(-19,37.9);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#262733").s().p("AATAhIgmg3IAAA3IgIAAIAAhBIAJAAIAmA3IAAg3IAHAAIAABBg");
	this.shape_38.setTransform(-31.3,37.9);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#262733").s().p("AgDAhIAAhBIAHAAIAABBg");
	this.shape_39.setTransform(-36.7,37.9);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#262733").s().p("AgZAhIAAhBIAVAAQAPAAAIAIQAHAJAAAPQAAAhgeAAgAgSAbIAOAAQALAAAGgHQAGgGAAgOQAAgMgGgHQgGgHgLAAIgOAAg");
	this.shape_40.setTransform(61.7,25.9);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#262733").s().p("AgUAhIAAhBIApAAIAAAHIgiAAIAAAWIAeAAIAAAHIgeAAIAAAXIAiAAIAAAGg");
	this.shape_41.setTransform(54.9,25.9);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#262733").s().p("AgDAhIAAg6IgXAAIAAgHIA1AAIAAAHIgXAAIAAA6g");
	this.shape_42.setTransform(48.5,25.9);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#262733").s().p("AgRAaQgHgJAAgRQAAgQAHgJQAJgIANAAQALAAAJAFIAAAHQgIgFgLAAQgLAAgHAGQgFAHAAANQAAAOAFAHQAHAGALAAQALAAAIgEIAAAGQgJAFgLAAQgNAAgJgIg");
	this.shape_43.setTransform(42,25.9);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#262733").s().p("AgUAhIAAhBIApAAIAAAHIgiAAIAAAWIAeAAIAAAHIgeAAIAAAXIAiAAIAAAGg");
	this.shape_44.setTransform(35.5,25.9);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#262733").s().p("AgTAhIAAhBIAnAAIAAAHIghAAIAAAWIAdAAIAAAHIgdAAIAAAdg");
	this.shape_45.setTransform(29.6,25.9);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#262733").s().p("AgUAhIAAhBIApAAIAAAHIghAAIAAAWIAcAAIAAAHIgcAAIAAAdg");
	this.shape_46.setTransform(23.7,25.9);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#262733").s().p("AAXAhIgIgUIgcAAIgIAUIgIAAIAbhBIAGAAIAaBBgAgLAGIAXAAIgMgeg");
	this.shape_47.setTransform(17,25.9);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#262733").s().p("AgKAhIgKgEIAAgIQAFAEAEABQAEACAHAAQAHAAAEgDQAEgEAAgFIgDgGIgEgEIgSgHIgHgFQgCgEAAgGQAAgFACgDQACgEAFgDQAEgCAHAAIAIABIAJADIAAAIIgEgCIgGgDIgHgBQgHAAgCADQgEAEAAADQAAAEACADIAEAEIASAGIAHAGQACADAAAHQAAAIgEAFQgGAFgLAAg");
	this.shape_48.setTransform(7.2,25.9);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#262733").s().p("AgCAhIAAhBIAFAAIAABBg");
	this.shape_49.setTransform(2.7,25.9);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#262733").s().p("AgCAhIAAg6IgYAAIAAgHIA1AAIAAAHIgXAAIAAA6g");
	this.shape_50.setTransform(-5.4,25.9);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#262733").s().p("AAWAhIgIgUIgcAAIgIAUIgHAAIAahBIAGAAIAbBBgAgKAGIAWAAIgMgeg");
	this.shape_51.setTransform(-11.4,25.9);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#262733").s().p("AARAhIAAgdIgiAAIAAAdIgHAAIAAhBIAHAAIAAAeIAiAAIAAgeIAIAAIAABBg");
	this.shape_52.setTransform(-18.4,25.9);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#262733").s().p("AARAhIgRg2IgRA2IgHAAIgVhBIAHAAIASA4IARg4IAHAAIARA4IASg4IAHAAIgVBBg");
	this.shape_53.setTransform(-27.2,25.9);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#262733").s().p("AgVArIAkhVIAHAAIgkBVg");
	this.shape_54.setTransform(-34.6,25.9);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#262733").s().p("AgWAaQgHgJAAgRQAAgQAHgJQAIgIAOAAQAPAAAHAIQAIAJAAAQQAAARgIAJQgHAIgPAAQgPAAgHgIgAgQgUQgFAHgBANQABAOAFAHQAFAHALAAQALAAAGgHQAFgGAAgPQAAgOgFgGQgFgGgMAAQgLAAgFAGg");
	this.shape_55.setTransform(-44.1,25.9);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#262733").s().p("AASAhIAAgdIgjAAIAAAdIgHAAIAAhBIAHAAIAAAeIAjAAIAAgeIAHAAIAABBg");
	this.shape_56.setTransform(-51.5,25.9);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#262733").s().p("AASAhIgSg2IgRA2IgHAAIgVhBIAIAAIASA4IARg4IAFAAIASA4IARg4IAIAAIgVBBg");
	this.shape_57.setTransform(-60.2,25.9);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#262733").s().p("AgCAhIAAg6IgYAAIAAgHIA1AAIAAAHIgYAAIAAA6g");
	this.shape_58.setTransform(58.1,13.9);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#262733").s().p("AgSAbQgHgIAAgNIAAgnIAHAAIAAAnQAAAVASAAQATAAAAgVIAAgnIAHAAIAAAnQAAANgHAIQgHAHgMAAQgLAAgHgHg");
	this.shape_59.setTransform(51.2,13.9);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#262733").s().p("AgVAaQgIgJAAgRQAAgQAIgJQAHgIAOAAQAPAAAHAIQAIAJAAAQQAAARgIAJQgHAIgPAAQgOAAgHgIgAgQgUQgGAHAAANQAAAOAGAHQAFAHALAAQAMAAAFgHQAGgHAAgOQAAgNgGgHQgFgGgMAAQgLAAgFAGg");
	this.shape_60.setTransform(43.7,13.9);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#262733").s().p("AgXAhIAAhBIAWAAQAVAAAAASQAAAEgCADIgDAEIgCACQAFABADAEQADAFAAAGQAAAJgGAFQgGAEgMAAgAgQAbIAQAAQAHAAAFgDQAFgDAAgHQAAgHgFgCQgFgDgHAAIgQAAgAgQgDIAQAAQAEAAAFgCQAEgCAAgHQAAgHgEgCQgDgCgGAAIgQAAg");
	this.shape_61.setTransform(36.6,13.9);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#262733").s().p("AAXAhIgIgUIgcAAIgIAUIgIAAIAbhBIAGAAIAaBBgAgLAGIAXAAIgMgeg");
	this.shape_62.setTransform(29.6,13.9);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#262733").s().p("AgTAaQgHgJAAgRQAAgQAHgJQAJgIAOAAQALAAAKAEIAAAIIgLgEIgKgBQgLAAgGAGQgGAHAAANQAAAOAGAHQAGAHALAAQAHAAAJgDIAAgTIgQAAIAAgGIAXAAIAAAdQgKAFgNAAQgOAAgJgIg");
	this.shape_63.setTransform(18.9,13.9);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#262733").s().p("AATAhIgmg3IAAA3IgIAAIAAhBIAIAAIAoA3IAAg3IAGAAIAABBg");
	this.shape_64.setTransform(11.5,13.9);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#262733").s().p("AgDAhIAAhBIAHAAIAABBg");
	this.shape_65.setTransform(6.2,13.9);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#262733").s().p("AAYAhIAAg2IgYAiIgWghIAAA1IgIAAIAAhBIAIAAIAWAhIAXghIAIAAIAABBg");
	this.shape_66.setTransform(0.5,13.9);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#262733").s().p("AAQAhIgQgbIgRAAIAAAbIgHAAIAAhBIAbAAQAJAAAFAFQAFAEAAAKQAAAIgEAFQgEAEgHACIASAbgAgRAAIARAAQAHAAAEgDQAEgDAAgGQAAgGgDgEQgDgDgHAAIgTAAg");
	this.shape_67.setTransform(-6.8,13.9);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#262733").s().p("AgWAaQgHgJAAgRQAAgQAHgJQAIgIAOAAQAPAAAHAIQAIAJAAAQQAAARgIAJQgGAIgQAAQgOAAgIgIgAgQgUQgFAHgBANQABAOAFAHQAGAHAKAAQAMAAAFgHQAFgGAAgPQAAgOgFgGQgFgGgMAAQgLAAgFAGg");
	this.shape_68.setTransform(-14.3,13.9);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#262733").s().p("AgDAhIAAg6IgXAAIAAgHIA1AAIAAAHIgXAAIAAA6g");
	this.shape_69.setTransform(-21.1,13.9);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#262733").s().p("AgLAhIgJgEIAAgIQADADAGACQAEACAHAAQAHAAADgDQAEgDAAgGQAAgEgCgCIgFgEIgRgHIgHgFQgDgEABgGQAAgFABgDQACgEAFgDQAFgCAGAAIAIABIAJADIAAAIIgDgCIgGgDIgIgBQgFAAgEADQgDADAAAEQAAAFACACIAEAEIASAGQADACADAEQADAEABAGQAAAHgGAGQgFAFgLAAg");
	this.shape_70.setTransform(-27.3,13.9);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#262733").s().p("AATAhIgmg3IAAA3IgIAAIAAhBIAJAAIAmA3IAAg3IAIAAIAABBg");
	this.shape_71.setTransform(-34.2,13.9);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#262733").s().p("AgCAhIAAhBIAFAAIAABBg");
	this.shape_72.setTransform(-39.5,13.9);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#262733").s().p("AAWAhIgIgUIgbAAIgIAUIgIAAIAahBIAHAAIAaBBgAgLAGIAXAAIgMgeg");
	this.shape_73.setTransform(-44.5,13.9);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#262733").s().p("AAQAhIgQgbIgRAAIAAAbIgHAAIAAhBIAaAAQAKAAAFAFQAFAEAAAKQAAAIgEAFQgEAEgHACIASAbgAgRAAIARAAQAHAAAEgDQAEgDAAgGQAAgGgDgEQgDgDgIAAIgSAAg");
	this.shape_74.setTransform(-51.1,13.9);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#262733").s().p("AgXAhIAAhBIAWAAQAVAAAAASQAAAFgBACIgEAEIgCACQAFABADAEQADAEAAAHQAAAJgGAFQgGAEgMAAgAgQAbIARAAQAHAAAFgDQAEgDAAgHQAAgHgEgCQgGgDgHAAIgQAAgAgQgDIAQAAQAEAAAFgCQAEgDAAgGQAAgGgDgDQgDgCgHAAIgQAAg");
	this.shape_75.setTransform(-58,13.9);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#262733").s().p("AgZAhIAAhBIAVAAQAOAAAIAIQAIAJAAAPQAAAhgeAAgAgSAbIANAAQALAAAHgHQAGgGAAgOQAAgMgGgHQgHgHgLAAIgNAAg");
	this.shape_76.setTransform(34.1,1.9);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#262733").s().p("AgUAhIAAhBIApAAIAAAHIgiAAIAAAWIAeAAIAAAHIgeAAIAAAXIAiAAIAAAGg");
	this.shape_77.setTransform(27.3,1.9);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#262733").s().p("AARAhIgRgbIgRAAIAAAbIgHAAIAAhBIAaAAQAKAAAFAFQAFAEAAAKQAAAIgEAFQgFAEgGACIASAbgAgRAAIARAAQAIAAADgDQAEgDAAgGQAAgGgDgEQgDgDgHAAIgTAAg");
	this.shape_78.setTransform(20.9,1.9);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#262733").s().p("AgSAbQgHgIAAgNIAAgnIAHAAIAAAnQAAAVASAAQATAAAAgVIAAgnIAHAAIAAAnQAAANgHAIQgHAHgMAAQgLAAgHgHg");
	this.shape_79.setTransform(13.6,1.9);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#262733").s().p("AgCAhIAAg6IgYAAIAAgHIA1AAIAAAHIgYAAIAAA6g");
	this.shape_80.setTransform(6.7,1.9);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#262733").s().p("AgRAaQgIgKAAgQQAAgPAIgKQAIgIAOAAQALAAAKAFIAAAHQgKgFgKAAQgLAAgGAGQgGAHAAANQAAAOAGAHQAGAGALAAQALAAAJgEIAAAGQgKAFgLAAQgOAAgIgIg");
	this.shape_81.setTransform(0.2,1.9);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#262733").s().p("AgSAbQgHgIAAgNIAAgnIAHAAIAAAnQAAAVASAAQATAAAAgVIAAgnIAHAAIAAAnQAAAOgHAHQgHAHgMAAQgLAAgHgHg");
	this.shape_82.setTransform(-6.9,1.9);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#262733").s().p("AAQAhIgQgbIgRAAIAAAbIgHAAIAAhBIAaAAQAKAAAFAFQAFAEAAAKQAAAIgEAFQgFAEgGACIASAbgAgRAAIARAAQAIAAADgDQAEgDAAgGQAAgGgDgEQgDgDgIAAIgSAAg");
	this.shape_83.setTransform(-13.8,1.9);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#262733").s().p("AgDAhIAAg6IgXAAIAAgHIA1AAIAAAHIgXAAIAAA6g");
	this.shape_84.setTransform(-20.6,1.9);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#262733").s().p("AgLAhIgJgEIAAgIQAEAEAFABQAFACAGAAQAHAAADgDQAFgDAAgGQgBgDgCgDIgFgEIgSgHQgEgCgCgDQgCgDAAgHQAAgFACgDQABgDAFgEQAFgCAGAAIAJABIAIADIAAAIIgDgCIgHgDIgHgBQgGAAgDADQgDADAAAEQAAAFACACIAFAEIARAGIAHAGQADAEAAAGQgBAIgFAFQgEAFgMAAg");
	this.shape_85.setTransform(-26.7,1.9);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#2FB7AA").s().p("AgHAIQgDgDgBgFQABgEADgDQAEgDADAAQAFAAADADQAEADAAAEQAAAFgEADQgEADgEAAQgDAAgEgDg");
	this.shape_86.setTransform(-35.5,1.9);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#262733").s().p("AgKArIAAhFIgYAAIAAgQIBFAAIAAAQIgZAAIAABFg");
	this.shape_87.setTransform(40.2,-21.1);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#262733").s().p("AAWArIgngzIAAAzIgUAAIAAhVIASAAIAmAyIAAgyIATAAIAABVg");
	this.shape_88.setTransform(31,-21.1);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#262733").s().p("AgdArIAAhVIA7AAIAAAQIgmAAIAAATIAgAAIAAAPIggAAIAAATIAmAAIAAAQg");
	this.shape_89.setTransform(21.9,-21.1);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#262733").s().p("AAZArIAAg5IgZAhIgZghIAAA5IgUAAIAAhVIAWAAIAXAhIAZghIAVAAIAABVg");
	this.shape_90.setTransform(11.8,-21.1);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#262733").s().p("AgQAsQgHgCgGgDIAAgUQAGAFAHACQAGADAJAAQALAAAAgJQAAgEgEgDIgMgFIgEgBQgKgDgFgFQgGgFABgLQgBgIAEgFQADgGAIgEQAJgEAJAAQAIAAAFABIAMAEIAAAVIgMgHQgGgDgHAAQgEAAgEACQgDACAAAFQAAADACACIAFAEIAJADIANAFQAFACADAFQAEAFAAAHQAAAJgEAFQgEAHgHAEQgIADgJAAQgJAAgHgBg");
	this.shape_91.setTransform(2,-21.1);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#262733").s().p("AgPAsQgIgCgGgDIAAgUQAGAFAHACQAHADAIAAQALAAAAgJQAAgEgEgDIgLgFIgGgBQgIgDgGgFQgFgFgBgLQABgIADgFQAEgGAHgEQAIgEAKAAQAIAAAFABIAMAEIAAAVIgMgHQgGgDgGAAQgFAAgDACQgEACAAAFQAAADACACIAFAEIAJADQAHACAGADQAGACADAFQACAFAAAHQAAAJgDAFQgEAHgHAEQgIADgIAAQgKAAgGgBg");
	this.shape_92.setTransform(-6.2,-21.1);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#262733").s().p("AgcArIAAhVIA5AAIAAAQIgkAAIAAATIAgAAIAAAPIggAAIAAATIAkAAIAAAQg");
	this.shape_93.setTransform(-14.4,-21.1);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#262733").s().p("AgQAsIgNgFIAAgUQAGAFAHACQAGADAIAAQAMAAAAgJQAAgEgEgDIgLgFIgGgBQgIgDgHgFQgEgFAAgLQgBgIAEgFQADgGAIgEQAIgEAJAAQAIAAAGABIALAEIAAAVIgLgHQgGgDgGAAQgFAAgEACQgDADgBAEQABADACACIAFAEIAJADQAHACAGADQAFACADAFQAEAFAAAHQgBAJgDAFQgEAHgHAEQgIADgJAAQgIAAgIgBg");
	this.shape_94.setTransform(-22.7,-21.1);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#262733").s().p("AgPAsIgPgFIAAgUQAHAFAHACQAHADAHAAQAMAAAAgJQAAgEgEgDIgLgFIgGgBQgIgDgGgFQgGgFAAgLQABgIADgFQADgGAIgEQAIgEAKAAQAHAAAGABIAMAEIAAAVIgMgHQgGgDgHAAQgEAAgEACQgDADAAAEQAAADACACIAFAEIAJADQAHACAGADQAGACADAFQACAFAAAHQABAJgEAFQgEAHgHAEQgIADgIAAQgKAAgGgBg");
	this.shape_95.setTransform(-30.8,-21.1);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#262733").s().p("AAWArIgHgSIgfAAIgGASIgUAAIAghVIAWAAIAfBVgAgLAJIAVAAIgKggg");
	this.shape_96.setTransform(-39.8,-21.1);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#262733").s().p("AgJArIAAglIgggwIAZAAIAUAhIARghIAVAAIgfAwIAAAlg");
	this.shape_97.setTransform(50.1,-36.7);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#262733").s().p("AgKArIAAhFIgYAAIAAgQIBFAAIAAAQIgZAAIAABFg");
	this.shape_98.setTransform(41.2,-36.7);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#262733").s().p("AgJArIAAhVIATAAIAABVg");
	this.shape_99.setTransform(34.7,-36.7);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#262733").s().p("AgcArIAAhVIAVAAIAABFIAkAAIAAAQg");
	this.shape_100.setTransform(28.7,-36.7);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#262733").s().p("AgJArIAAhVIAUAAIAABVg");
	this.shape_101.setTransform(22.3,-36.7);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#262733").s().p("AgjArIAAhVIAkAAQAOAAAJAFQAIAGAAANQAAAKgLAGQAHACAEAEQAEAGAAAHQAAANgJAHQgIAGgPAAgAgOAbIARAAQAEAAAEgCQAEgEAAgFQAAgFgEgCQgEgDgFAAIgQAAgAgOgIIAQAAQAEAAACgCQACgDAAgEQAAgJgKAAIgOAAg");
	this.shape_102.setTransform(15.4,-36.7);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#262733").s().p("AAWArIgHgSIgfAAIgGASIgUAAIAhhVIAWAAIAeBVgAgLAJIAVAAIgKggg");
	this.shape_103.setTransform(5.7,-36.7);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#262733").s().p("AANArIgRgdIgNAAIAAAdIgVAAIAAhVIAqAAQAPAAAHAHQAJAGgBAOQAAAIgEAHQgFAHgIACIAWAigAgRgBIARAAQAMAAAAgNQAAgGgDgDQgDgDgGAAIgRAAg");
	this.shape_104.setTransform(-3.8,-36.7);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#262733").s().p("AgdArIAAhVIA7AAIAAAQIgmAAIAAATIAhAAIAAAPIghAAIAAATIAmAAIAAAQg");
	this.shape_105.setTransform(-13.1,-36.7);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#262733").s().p("AAWArIgogzIAAAzIgTAAIAAhVIASAAIAlAyIAAgyIAUAAIAABVg");
	this.shape_106.setTransform(-22.3,-36.7);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#262733").s().p("AgdArIAAhVIAWAAIAABFIAlAAIAAAQg");
	this.shape_107.setTransform(-31,-36.7);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#262733").s().p("AgbAkQgKgJAAgRIAAg2IAWAAIAAA1QAAAKAEAEQAEAFAIAAQAIAAAFgFQAEgFAAgJIAAg1IAUAAIAAA2QAAASgKAIQgJAJgRAAQgSAAgLgJg");
	this.shape_108.setTransform(-40.3,-36.6);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#262733").s().p("AgLArIghhVIAZAAIAUA+IAVg+IAWAAIgiBVg");
	this.shape_109.setTransform(-50.2,-36.7);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#262733").s().p("AgWAiIAAgLQAEgDAIgHQAIgGADgGQAFgFAAgGQAAgFgDgDQgDgCgEAAQgFAAgEABIgJAGIAAgOQAKgGAMAAQAKAAAGAFQAGAGAAAJQAAAHgDAGQgEAFgFAFIgMAKIAZAAIAAAOg");
	this.shape_110.setTransform(33.8,-61.4);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#262733").s().p("AARAhIgfgnIAAAnIgOAAIAAhBIANAAIAdAmIAAgmIAPAAIAABBg");
	this.shape_111.setTransform(23.4,-61.3);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#262733").s().p("AgXAaQgJgIABgSQAAgQAIgJQAIgJAPAAQAPAAAJAJQAJAJAAAQQAAAQgJAKQgIAJgQAAQgOAAgJgJgAgLgPQgEAFAAAKQAAALAEAGQAEAEAHAAQAIAAAEgFQADgEAAgMQAAgLgDgEQgEgFgIAAQgHAAgEAFg");
	this.shape_112.setTransform(15.6,-61.3);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#262733").s().p("AgHAhIAAhBIAPAAIAABBg");
	this.shape_113.setTransform(9.8,-61.3);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#262733").s().p("AgMAiQgEgBgGgDIAAgPQAFAEAFABQAGACAFAAQAIAAAAgHQAAgCgDgDIgIgEIgEgBQgIgDgDgCQgFgFABgIQAAgFACgFQAEgFAFgDQAGgDAIAAIAKABIAJAEIAAAPQgDgDgGgCQgFgCgFAAQgDAAgDABQgDADAAADQAAAAAAABQAAAAAAABQABAAAAABQAAAAABABIADACIAHADIAKAEQAFABACAEQADAEgBAFQAAAGgCAFQgEAGgFACQgFADgHAAg");
	this.shape_114.setTransform(5,-61.3);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#262733").s().p("AgMAiIgKgEIAAgPQAFAEAFABQAFACAGAAQAJAAAAgHQAAgCgDgDIgJgEIgEgBQgHgDgEgCQgEgFAAgIQAAgFADgFQACgFAGgDQAGgDAHAAIALABIAJAEIAAAPIgJgFQgFgCgFAAQgDAAgDABQgDADAAADQAAAAAAABQAAAAABABQAAAAAAABQAAAAABABIAEACIARAHQAEABACAEQACADAAAGQAAAFgCAGQgEAGgFACQgFADgIAAg");
	this.shape_115.setTransform(-1.3,-61.3);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#262733").s().p("AgWAhIAAhBIAtAAIAAAMIgdAAIAAAPIAZAAIAAALIgZAAIAAAPIAdAAIAAAMg");
	this.shape_116.setTransform(-7.7,-61.3);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#262733").s().p("AgMAiIgKgEIAAgPQAFAEAFABQAFACAGAAQAJAAAAgHQAAgCgDgDIgJgEIgEgBQgHgDgEgCQgEgFAAgIQAAgFADgFQACgFAGgDQAGgDAHAAIALABIAJAEIAAAPIgJgFQgFgCgFAAQgDAAgDABQgDADAAADQAAAAAAABQAAAAABABQAAAAAAABQAAAAABABIAEACIARAHQAEABACAEQACADAAAGQAAAFgCAGQgEAGgFACQgFADgIAAg");
	this.shape_117.setTransform(-14,-61.3);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#262733").s().p("AgMAiQgEgBgGgDIAAgPQAFAEAFABQAFACAHAAQAHAAABgHQAAgCgEgDIgIgEIgEgBQgIgDgDgCQgEgFgBgIQAAgFADgFQAEgFAFgDQAGgDAHAAIAKABIAJAEIAAAPQgCgDgHgCQgDgCgGAAQgEAAgCABQgDADAAADQAAAAAAABQAAAAAAABQABAAAAABQABAAAAABIAEACIAGADIALAEQAEABACAEQADAEAAAFQgBAGgDAFQgDAGgFACQgGADgGAAg");
	this.shape_118.setTransform(-23.5,-61.3);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#262733").s().p("AANAhIgNgqIgNAqIgPAAIgThBIASAAIAKAtIANgtIAMAAIANAtIALgtIASAAIgTBBg");
	this.shape_119.setTransform(-32,-61.3);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f().s("#3F3B4F").ss(3).p("AtRtRIAAajIajAAIAA6jg");
	this.shape_120.setTransform(0,-9.5);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#FFFFFF").s().p("AtRNSIAA6jIajAAIAAajg");
	this.shape_121.setTransform(0,-9.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer 2
	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#FFFFFF").s().p("AtRNSIAA6jIajAAIAAajg");
	this.shape_122.setTransform(0,-9.6,1.235,1.235);

	this.timeline.addTween(cjs.Tween.get(this.shape_122).wait(1));

}).prototype = getMCSymbolPrototype(lib.SD34, new cjs.Rectangle(-105,-114.5,210,210), null);


(lib.SD33 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgRAXIAAgKQAHAFAJAAQAKAAAAgGQAAAAAAgBQAAgBgBAAQAAgBAAAAQgBgBAAAAIgFgDIgGgCIgGgDQgDAAgCgDQgCgDAAgFQAAgHAFgEQAFgEAIAAQAHAAAHADIAAAKQgGgEgHAAQgEAAgDABQgDACAAADQAAADADABIAGADIAIACQAEACADADQACAEAAAGQAAAGgFAEQgFAEgIAAQgJAAgIgEg");
	this.shape.setTransform(26.3,86.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgRAbIAAg1IAjAAIAAAJIgZAAIAAAOIAVAAIAAAIIgVAAIAAANIAZAAIAAAJg");
	this.shape_1.setTransform(21.3,86.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgCAbIgHgDQgDgCgCgDQgCgCgCgFQgBgFgBgHQABgGABgEQACgFACgDQACgDADgCIAHgDIAHAAQAHAAAJADIAAAJQgIgEgIAAIgFABIgFACQgDACgBAEQgBAEAAAFQAAAGABAEQABAEADACIAFACIAFABQAIAAAIgEIAAAJQgJADgHAAIgHAAg");
	this.shape_2.setTransform(16,86.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AANAbIgagnIAAAnIgKAAIAAg1IALAAIAaAnIAAgnIAKAAIAAA1g");
	this.shape_3.setTransform(10,86.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgRAbIAAg1IAjAAIAAAJIgZAAIAAAOIAVAAIAAAIIgVAAIAAANIAZAAIAAAJg");
	this.shape_4.setTransform(4.3,86.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAKAbIgMgTIgJAAIAAATIgJAAIAAg1IAUAAQAJAAAFAFQAFAEAAAJQAAALgMADIAOAVgAgLAAIALAAQAEAAADgCQACgBAAgFQAAgFgCgCQgDgCgEAAIgLAAg");
	this.shape_5.setTransform(-1,86.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgRAbIAAg1IAjAAIAAAJIgZAAIAAAOIAVAAIAAAIIgVAAIAAANIAZAAIAAAJg");
	this.shape_6.setTransform(-6.4,86.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgQAbIAAg1IAhAAIAAAJIgYAAIAAAOIAVAAIAAAIIgVAAIAAAWg");
	this.shape_7.setTransform(-11.3,86.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgQAbIAAg1IAhAAIAAAJIgYAAIAAAOIAVAAIAAAIIgVAAIAAAWg");
	this.shape_8.setTransform(-16.2,86.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgEAbIAAg1IAJAAIAAA1g");
	this.shape_9.setTransform(-20.1,86.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgVAbIAAg1IATAAQALAAAGAHQAHAHAAAMQAAANgHAHQgGAHgLAAgAgLASIAJAAQAHAAAEgEQADgEAAgKQAAgJgDgEQgEgEgHAAIgJAAg");
	this.shape_10.setTransform(-24.3,86.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgSAiIAchDIAJAAIgdBDg");
	this.shape_11.setTransform(39.2,75.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AANAbIgbgnIAAAnIgJAAIAAg1IALAAIAaAnIAAgnIAKAAIAAA1g");
	this.shape_12.setTransform(30.9,75.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgGAbIgHgDQgDgCgCgDQgDgCgBgFQgCgFAAgHQAAgFACgFQABgFADgDQACgDADgCIAHgDIAGAAIAHAAIAHADIAGAFIADAIQACAFAAAFQAAAHgCAFQgBAFgCACIgGAFIgHADIgHAAIgGAAgAgEgRIgEABIgDADIgCAGIgBAHIABAKIADAGIAFACIAFABIAFAAIAEgCIADgDIADgGIAAgIIgBgJIgDgGIgFgCIgGgBg");
	this.shape_13.setTransform(24.4,75.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgEAbIAAg1IAJAAIAAA1g");
	this.shape_14.setTransform(19.9,75.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgEAbIAAgrIgRAAIAAgKIArAAIAAAKIgRAAIAAArg");
	this.shape_15.setTransform(16,75.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AARAbIgGgNIgVAAIgFANIgKAAIAVg1IAJAAIAWA1gAAIAFIgIgUIgHAUIAPAAg");
	this.shape_16.setTransform(10.6,75.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgEAbIAAgrIgRAAIAAgKIArAAIAAAKIgRAAIAAArg");
	this.shape_17.setTransform(5.1,75.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AANAbIgagnIAAAnIgKAAIAAg1IALAAIAbAnIAAgnIAJAAIAAA1g");
	this.shape_18.setTransform(-0.6,75.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgRAbIAAg1IAjAAIAAAJIgZAAIAAAOIAVAAIAAAIIgVAAIAAANIAZAAIAAAJg");
	this.shape_19.setTransform(-6.4,75.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AARAbIAAgnIgRAXIgQgXIAAAnIgJAAIAAg1IAKAAIAPAXIAQgXIAKAAIAAA1g");
	this.shape_20.setTransform(-12.5,75.4);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgPAVQgGgGAAgLIAAgeIAJAAIAAAeQAAAIADADQADADAGABQAHgBADgDQADgDAAgIIAAgeIAJAAIAAAeQAAALgFAGQgGAGgLAAQgKAAgFgGg");
	this.shape_21.setTransform(-19.2,75.5);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AACAbIgGAAIgGgDIgGgEQgDgDgBgFQgCgFAAgHQAAgFACgFQABgFADgDQACgDAEgCIAGgDIAGAAQAJAAAJADIAAAJQgIgEgJAAIgEABIgEABQgBAAAAABQgBAAAAABQgBAAAAAAQAAABAAAAIgDAGIgBAHIABAIIADAGQAAAAAAABQAAAAABAAQAAABABAAQAAABABAAQABAAAAAAQABABAAAAQABAAAAAAQABAAABAAIADABIAJgCIAAgMIgLAAIAAgIIAVAAIAAAaQgJAEgKAAg");
	this.shape_22.setTransform(-25.2,75.4);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AAKAbIgMgTIgJAAIAAATIgJAAIAAg1IAUAAQAJAAAFAFQAFAEAAAJQAAALgMADIAOAVgAgLAAIALAAQAEAAADgCQACgBAAgFQAAgFgCgCQgDgCgEAAIgLAAg");
	this.shape_23.setTransform(-30.8,75.4);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AAQAbIgEgNIgWAAIgFANIgKAAIAVg1IAJAAIAWA1gAAIAFIgIgUIgHAUIAPAAg");
	this.shape_24.setTransform(-36.8,75.4);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AANAbIgbgnIAAAnIgJAAIAAg1IALAAIAaAnIAAgnIAKAAIAAA1g");
	this.shape_25.setTransform(19.5,64.4);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgGAbIgHgDQgDgCgCgDQgDgCgBgFQgCgFAAgHQAAgFACgFQABgFADgDQACgDADgCIAHgDIAGAAIAHAAIAHADIAGAFIADAIQACAFAAAFQAAAHgCAFQgBAFgCACIgGAFIgHADIgHAAIgGAAgAgEgRIgEABIgDADIgCAGIgBAHIABAKIADAGIAFACIAFABIAFAAIAEgCIADgDIADgGIAAgIIgBgJIgDgGIgFgCIgGgBg");
	this.shape_26.setTransform(12.9,64.4);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgRAXIAAgKQAHAFAJAAQAKAAAAgGQAAgBAAAAQgBgBAAAAQAAgBAAAAQgBgBAAAAIgFgDIgGgCIgGgDQgDAAgCgDQgCgDAAgFQAAgHAFgEQAFgEAIAAQAHAAAHADIAAAKQgGgEgHAAQgEAAgDABQgDACAAADQAAABAAAAQABABAAAAQAAABABAAQABABAAAAIAGADIAIACQAEACADADQACAEAAAGQAAAGgFAEQgFAEgIAAQgJAAgIgEg");
	this.shape_27.setTransform(4.2,64.4);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgRAbIAAg1IAjAAIAAAJIgZAAIAAAOIAVAAIAAAIIgVAAIAAANIAZAAIAAAJg");
	this.shape_28.setTransform(-0.8,64.4);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgEAbIAAgrIgRAAIAAgKIArAAIAAAKIgRAAIAAArg");
	this.shape_29.setTransform(-5.9,64.4);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgGAbIgHgDQgDgCgCgDQgDgCgBgFQgCgFAAgHQAAgFACgFQABgFADgDQACgDADgCIAHgDIAGAAIAHAAIAHADIAGAFIADAIQACAFAAAFQAAAHgCAFQgBAFgCACIgGAFIgHADIgHAAIgGAAgAgEgRIgEABIgDADIgCAGIgBAHIABAKIADAGIAFACIAFABIAFAAIAEgCIADgDIADgGIAAgIIgBgJIgDgGIgFgCIgGgBg");
	this.shape_30.setTransform(-11.6,64.4);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AANAbIgbgnIAAAnIgJAAIAAg1IALAAIAbAnIAAgnIAJAAIAAA1g");
	this.shape_31.setTransform(-18,64.4);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#2FB7AA").s().p("AnwDAIAAl/IPhAAIAAF/g");
	this.shape_32.setTransform(0.9,75.4);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#262733").s().p("AAWArIgogzIAAAzIgTAAIAAhVIASAAIAlAyIAAgyIAUAAIAABVg");
	this.shape_33.setTransform(67.2,5.8);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#262733").s().p("AgeAiQgLgLAAgXQAAgVALgMQAKgLAUAAQATAAAMALQALAMAAAVQAAAWgLAMQgLALgUAAQgTAAgLgLgAgPgUQgFAFAAAPQAAAQAFAFQAFAHAKAAQAKAAAFgHQAFgGAAgPQAAgOgFgHQgFgGgKAAQgKAAgFAHg");
	this.shape_34.setTransform(57.1,5.8);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#262733").s().p("AgJArIAAhVIATAAIAABVg");
	this.shape_35.setTransform(49.7,5.8);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#262733").s().p("AgPAsQgIgCgGgDIAAgUQAHAFAGACQAHADAIAAQALAAAAgJQAAgEgEgDIgLgFIgGgBQgKgFgEgDQgFgFgBgLQABgHADgHQAEgGAIgEQAGgDALAAQAIAAAFABQAFABAHADIAAAVQgHgGgFgBQgGgDgGAAQgFAAgDACQgEACAAAFQAAADACACIAFAEIAJADIANAFQAGACADAFQACAEAAAIQAAAJgDAFQgEAGgGAEQgJAEgIAAQgKAAgGgBg");
	this.shape_36.setTransform(43.3,5.8);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#262733").s().p("AgQAsQgHgCgGgDIAAgUQAHAFAGACQAHADAIAAQALAAAAgJQAAgEgEgDIgMgFIgEgBQgLgFgEgDQgGgFABgLQAAgHADgHQAEgGAHgEQAIgDAKAAQAIAAAFABQAFABAHADIAAAVQgHgGgFgBQgGgDgHAAQgEAAgEACQgDACAAAFQAAADACACIAFAEIAJADIANAFQAFACADAFQADAEABAIQAAAJgEAFQgEAGgGAEQgJAEgJAAQgIAAgIgBg");
	this.shape_37.setTransform(35.2,5.8);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#262733").s().p("AgdArIAAhVIA7AAIAAAQIgmAAIAAATIAgAAIAAAPIggAAIAAATIAmAAIAAAQg");
	this.shape_38.setTransform(26.9,5.8);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#262733").s().p("AgPAsQgIgCgGgDIAAgUQAFAFAIACQAHADAHAAQAMAAAAgJQAAgEgEgDIgMgFIgFgBQgJgEgFgEQgGgFAAgLQABgHADgHQAEgGAHgEQAHgDALAAQAIAAAFABQAFABAHADIAAAVQgGgFgGgCQgGgDgGAAQgFAAgEACQgDADAAAEQAAADACACIAFAEIAJADQAHACAGADQAGACADAFQACAEAAAIQABAJgEAFQgDAGgIAEQgHAEgJAAQgKAAgGgBg");
	this.shape_39.setTransform(18.7,5.8);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#262733").s().p("AAWArIgogzIAAAzIgTAAIAAhVIASAAIAlAyIAAgyIAUAAIAABVg");
	this.shape_40.setTransform(5.3,5.8);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#262733").s().p("AgeAiQgLgLAAgXQAAgVALgMQAKgLAUAAQAUAAALALQALALAAAWQAAAWgLAMQgLALgUAAQgTAAgLgLgAgPgUQgFAGAAAOQAAAPAFAGQAFAHAKAAQAKAAAFgHQAGgHAAgOQAAgOgGgHQgFgGgKAAQgKAAgFAHg");
	this.shape_41.setTransform(-4.9,5.8);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#262733").s().p("AgJArIAAhVIATAAIAABVg");
	this.shape_42.setTransform(-12.3,5.8);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#262733").s().p("AgQAsQgHgCgGgDIAAgUQAGAFAHACQAGADAJAAQALAAAAgJQAAgFgEgCIgLgFIgGgBQgKgFgEgDQgGgFABgLQgBgHAEgHQAEgGAHgEQAHgDALAAQAIAAAFABQAEABAIADIAAAVQgHgGgFgBQgGgDgGAAQgFAAgDACQgEACAAAFQAAADACACIAFAEIAJADQAIACAFADQAFACADAFQAEAEAAAIQAAAJgEAFQgDAGgIAEQgHAEgKAAQgIAAgIgBg");
	this.shape_43.setTransform(-18.6,5.8);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#262733").s().p("AgPAsQgIgCgGgDIAAgUQAHAFAGACQAGADAJAAQALAAAAgJQAAgFgEgCIgMgFIgFgBQgKgFgEgDQgGgFAAgLQABgHADgHQAEgGAIgEQAHgDAKAAQAIAAAFABQAEABAIADIAAAVQgHgGgFgBQgGgDgHAAQgEAAgEACQgDACAAAFQAAADACACIAFAEIAJADQAIACAFADQAGACADAFQACAEAAAIQABAJgEAFQgEAGgGAEQgJAEgIAAQgJAAgHgBg");
	this.shape_44.setTransform(-26.8,5.8);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#262733").s().p("AgbAkQgKgJAAgSIAAg1IAWAAIAAA1QAAAJAEAFQAFAFAHAAQAIAAAFgFQAEgFAAgJIAAg1IAUAAIAAA1QAAASgKAJQgJAJgRAAQgTAAgKgJg");
	this.shape_45.setTransform(-35.9,5.9);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#262733").s().p("AgiABQAAgtAqAAQANAAAOAGIAAASQgMgHgNAAQgKgBgHAHQgFAHgBAPQABAPAFAGQAHAHALAAIALgCQAIgCAFgEIAAASQgFADgIACIgOABQgqAAAAgsg");
	this.shape_46.setTransform(-45.5,5.8);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#262733").s().p("AgQAsIgNgFIAAgUQAGAFAHACQAHADAIAAQALAAAAgJQAAgEgEgDIgLgFIgFgBQgLgEgEgEQgGgFAAgLQAAgHAEgHQAEgGAHgEQAHgDALAAQAHAAAGABQAFABAHADIAAAVQgGgFgGgCQgGgDgGAAQgFAAgEACQgDADAAAEQAAACACADIAFAEIAJADQAHACAGADQAFACAEAFQADAEAAAIQAAAIgEAGQgDAGgIAEQgHAEgJAAQgJAAgIgBg");
	this.shape_47.setTransform(-53.9,5.8);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#262733").s().p("AgKArIAAhVIAVAAIAABVg");
	this.shape_48.setTransform(-60.3,5.8);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#262733").s().p("AgmArIAAhVIAjAAQAVAAAKAKQALAMAAAUQAAAWgLAKQgKALgVAAgAgRAbIALAAQALAAAGgHQAHgGgBgOQABgNgHgHQgGgGgLAAIgLAAg");
	this.shape_49.setTransform(-67.3,5.8);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#262733").s().p("AgQAsIgNgFIAAgUQAGAFAHACQAHADAIAAQALAAAAgJQAAgEgEgDIgLgFIgFgBQgLgEgEgEQgGgFAAgLQAAgHAEgHQAEgGAHgEQAHgDALAAQAHAAAGABQAFABAHADIAAAVQgGgFgGgCQgGgDgGAAQgFAAgEACQgDADAAAEQAAADACACIAFAEIAJADQAHACAGADQAFACAEAFQADAEAAAIQAAAHgEAHQgDAGgIAEQgHAEgJAAQgJAAgIgBg");
	this.shape_50.setTransform(65.4,-9.8);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#262733").s().p("AAWArIgogzIAAAzIgTAAIAAhVIASAAIAmAyIAAgyIATAAIAABVg");
	this.shape_51.setTransform(56.3,-9.8);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#262733").s().p("AgeAiQgMgMABgWQgBgUALgNQAMgLATAAQAUAAALALQALAMAAAVQAAAVgLANQgLALgUAAQgSAAgMgLgAgPgUQgEAFgBAPQABAQAEAFQAFAHAKAAQALAAAEgHQAGgFgBgQQABgOgGgHQgEgGgLAAQgKAAgFAHg");
	this.shape_52.setTransform(46.1,-9.8);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#262733").s().p("AgKArIAAhVIAVAAIAABVg");
	this.shape_53.setTransform(38.7,-9.8);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#262733").s().p("AgKArIAAhFIgYAAIAAgQIBFAAIAAAQIgZAAIAABFg");
	this.shape_54.setTransform(32.3,-9.8);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#262733").s().p("AAWArIgHgSIgfAAIgGASIgUAAIAghVIAWAAIAfBVgAgLAJIAVAAIgKggg");
	this.shape_55.setTransform(24.1,-9.8);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#262733").s().p("AgmArIAAhVIAjAAQAUAAALAKQALAMAAAUQAAAVgLALQgLALgUAAgAgRAbIAMAAQAKAAAGgHQAGgGAAgOQAAgNgGgHQgGgGgKAAIgMAAg");
	this.shape_56.setTransform(14.5,-9.8);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#262733").s().p("AAWArIgngzIAAAzIgUAAIAAhVIASAAIAlAyIAAgyIAUAAIAABVg");
	this.shape_57.setTransform(4.3,-9.8);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#262733").s().p("AgdArIAAhVIA7AAIAAAQIglAAIAAATIAfAAIAAAPIgfAAIAAATIAlAAIAAAQg");
	this.shape_58.setTransform(-4.8,-9.8);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#262733").s().p("AAZArIAAg5IgZAhIgZghIAAA5IgUAAIAAhVIAWAAIAXAhIAZghIAVAAIAABVg");
	this.shape_59.setTransform(-14.9,-9.8);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#262733").s().p("AAZArIAAg5IgZAhIgZghIAAA5IgUAAIAAhVIAWAAIAXAhIAZghIAVAAIAABVg");
	this.shape_60.setTransform(-26.5,-9.8);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#262733").s().p("AgeAiQgLgLAAgXQAAgVALgMQAKgLAUAAQAUAAALALQALALAAAWQAAAWgLAMQgLALgUAAQgTAAgLgLgAgPgUQgFAGAAAOQAAAPAFAGQAFAHAKAAQAKAAAFgHQAGgGAAgPQAAgOgGgHQgEgGgLAAQgKAAgFAHg");
	this.shape_61.setTransform(-37.5,-9.8);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#262733").s().p("AgiAAQAAgsAqAAQAOAAANAGIAAASQgMgIgNAAQgLABgGAGQgFAHAAAOQAAAQAFAHQAHAGALAAIAMgCQAHgDAFgDIAAASQgFADgIABIgOACQgqAAAAgtg");
	this.shape_62.setTransform(-47.1,-9.8);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#262733").s().p("AgdArIAAhVIA7AAIAAAQIgmAAIAAATIAhAAIAAAPIghAAIAAATIAmAAIAAAQg");
	this.shape_63.setTransform(-55.6,-9.8);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#262733").s().p("AAMArIgQgeIgNAAIAAAeIgVAAIAAhVIApAAQAPAAAJAGQAHAIABANQAAAIgFAHQgGAHgHACIAWAigAgRgBIARAAQAMAAgBgNQABgGgDgDQgDgDgFAAIgSAAg");
	this.shape_64.setTransform(-64.5,-9.8);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#262733").s().p("AgIArIAAglIghgwIAaAAIASAgIASggIAVAAIgeAwIAAAlg");
	this.shape_65.setTransform(27,-25.4);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#262733").s().p("AAMArIgQgeIgNAAIAAAeIgVAAIAAhVIApAAQAPAAAJAGQAIAIAAANQAAAHgFAIQgFAHgIACIAWAigAgRgBIARAAQAMAAAAgNQAAgFgDgEQgDgDgFAAIgSAAg");
	this.shape_66.setTransform(18.3,-25.4);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#262733").s().p("AAVArIgGgSIgfAAIgHASIgTAAIAghVIAWAAIAfBVgAgLAJIAVAAIgKggg");
	this.shape_67.setTransform(8.4,-25.4);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#262733").s().p("AAWArIgngzIAAAzIgUAAIAAhVIASAAIAmAyIAAgyIATAAIAABVg");
	this.shape_68.setTransform(-1.5,-25.4);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#262733").s().p("AgdArIAAhVIA7AAIAAAQIgmAAIAAATIAhAAIAAAPIghAAIAAATIAmAAIAAAQg");
	this.shape_69.setTransform(-10.7,-25.4);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#262733").s().p("AgdArIAAhVIAVAAIAABFIAmAAIAAAQg");
	this.shape_70.setTransform(-18.5,-25.4);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#262733").s().p("AgjArIAAhVIAmAAQAQAAAIAHQAJAHAAAOQAAAOgJAHQgIAIgQAAIgRAAIAAAcgAgOAAIAOAAQAHAAADgEQADgDAAgGQAAgNgNAAIgOAAg");
	this.shape_71.setTransform(-27.2,-25.4);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f().s("#3F3B4F").ss(3).p("AtRtRIAAajIajAAIAA6jg");
	this.shape_72.setTransform(0,-9.6);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#FFFFFF").s().p("AtRNSIAA6jIajAAIAAajg");
	this.shape_73.setTransform(0,-9.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer 2
	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#FFFFFF").s().p("AtRNSIAA6jIajAAIAAajg");
	this.shape_74.setTransform(0,-9.6,1.235,1.235);

	this.timeline.addTween(cjs.Tween.get(this.shape_74).wait(1));

}).prototype = getMCSymbolPrototype(lib.SD33, new cjs.Rectangle(-105,-114.6,210,210), null);


(lib.SD322 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgVAbIAAg1IATAAQALAAAGAHQAHAHAAAMQAAANgHAHQgGAHgLAAgAgLASIAJAAQAHAAAEgEQADgEAAgKQAAgJgDgEQgEgEgHAAIgJAAg");
	this.shape.setTransform(55,11);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgRAbIAAg1IAjAAIAAAJIgZAAIAAAOIAVAAIAAAIIgVAAIAAANIAZAAIAAAJg");
	this.shape_1.setTransform(49.5,11);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgEAbIAAg1IAJAAIAAA1g");
	this.shape_2.setTransform(45.5,11);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgQAbIAAg1IAhAAIAAAJIgYAAIAAAOIAVAAIAAAIIgVAAIAAAWg");
	this.shape_3.setTransform(41.9,11);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgEAbIAAg1IAJAAIAAA1g");
	this.shape_4.setTransform(38,11);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgEAbIAAgrIgRAAIAAgKIArAAIAAAKIgRAAIAAArg");
	this.shape_5.setTransform(34.1,11);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AANAbIgbgnIAAAnIgJAAIAAg1IALAAIAbAnIAAgnIAJAAIAAA1g");
	this.shape_6.setTransform(28.4,11);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgRAbIAAg1IAjAAIAAAJIgZAAIAAAOIAVAAIAAAIIgVAAIAAANIAZAAIAAAJg");
	this.shape_7.setTransform(22.7,11);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgVAbIAAg1IATAAQALAAAGAHQAHAHAAAMQAAANgHAHQgGAHgLAAgAgLASIAJAAQAHAAAEgEQADgEAAgKQAAgJgDgEQgEgEgHAAIgJAAg");
	this.shape_8.setTransform(17.2,11);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgEAbIAAg1IAJAAIAAA1g");
	this.shape_9.setTransform(12.8,11);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgRAXIAAgKQAHAFAJAAQAKAAAAgGQAAAAAAgBQgBgBAAAAQAAgBAAAAQgBgBAAAAIgFgDIgGgCIgGgDQgDAAgCgDQgCgDAAgFQAAgHAFgEQAFgEAIAAQAHAAAHADIAAAKQgGgEgHAAQgEAAgDABQgDACAAADQAAABAAAAQABABAAAAQAAABABAAQAAABABAAIAGADIAIACQAEACADADQACAEAAAGQAAAGgFAEQgFAEgIAAQgJAAgIgEg");
	this.shape_10.setTransform(5.8,11);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgRAbIAAg1IAjAAIAAAJIgZAAIAAAOIAVAAIAAAIIgVAAIAAANIAZAAIAAAJg");
	this.shape_11.setTransform(0.9,11);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgEAbIAAg1IAJAAIAAA1g");
	this.shape_12.setTransform(-3.1,11);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgEAbIAAgrIgRAAIAAgKIArAAIAAAKIgRAAIAAArg");
	this.shape_13.setTransform(-7,11);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgEAbIAAg1IAJAAIAAA1g");
	this.shape_14.setTransform(-10.8,11);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AANAbIgagnIAAAnIgKAAIAAg1IALAAIAaAnIAAgnIAKAAIAAA1g");
	this.shape_15.setTransform(-15.4,11);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgPAVQgGgGAAgLIAAgeIAJAAIAAAeQAAAIADADQADADAGABQAHgBADgDQADgDAAgIIAAgeIAJAAIAAAeQAAALgFAGQgGAGgLAAQgKAAgFgGg");
	this.shape_16.setTransform(-21.9,11);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgEAbIAAgrIgRAAIAAgKIArAAIAAAKIgRAAIAAArg");
	this.shape_17.setTransform(-27.5,11);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AAKAbIgMgTIgJAAIAAATIgJAAIAAg1IAUAAQAJAAAFAFQAFAEAAAJQAAALgMADIAOAVgAgLAAIALAAQAEAAADgCQACgBAAgFQAAgFgCgCQgDgCgEAAIgLAAg");
	this.shape_18.setTransform(-32.5,11);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgGAbIgHgDQgDgCgCgDQgDgCgBgFQgCgFAAgHQAAgFACgFQABgFADgDQACgDADgCIAHgDIAGAAIAHAAIAHADIAGAFIADAIQACAFAAAFQAAAHgCAFQgBAFgCACIgGAFIgHADIgHAAIgGAAgAgEgRIgEABIgDADIgCAGIgBAHIABAKIADAGIAFACIAFABIAFAAIAEgCIADgDIADgGIAAgIIgBgJIgDgGIgFgCIgGgBg");
	this.shape_19.setTransform(-38.8,11);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgTAbIAAg1IATAAQAKAAAFAFQAFAFAAAIQAAAIgFAEQgFAFgKAAIgJAAIAAASgAgJABIAJAAQAGAAACgCQACgCAAgFQAAgEgCgDQgCgCgGAAIgJAAg");
	this.shape_20.setTransform(-44.4,11);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgTAbIAAg1IATAAQAKAAAFAFQAFAFAAAIQAAAIgFAEQgFAFgKAAIgJAAIAAASgAgJABIAJAAQAGAAACgCQACgCAAgFQAAgEgCgDQgCgCgGAAIgJAAg");
	this.shape_21.setTransform(-49.8,11);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgGAbIgHgDQgDgCgCgDQgDgCgBgFQgCgFAAgHQAAgFACgFQABgFADgDQACgDADgCIAHgDIAGAAIAHAAIAHADIAGAFIADAIQACAFAAAFQAAAHgCAFQgBAFgCACIgGAFIgHADIgHAAIgGAAgAgEgRIgEABIgDADIgCAGIgBAHIABAKIADAGIAFACIAFABIAFAAIAEgCIADgDIADgGIAAgIIgBgJIgDgGIgFgCIgGgBg");
	this.shape_22.setTransform(-55.9,11);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgSAiIAchDIAJAAIgdBDg");
	this.shape_23.setTransform(38.2,0);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgRAXIAAgKQAHAFAJAAQAKAAAAgGQAAgBAAAAQgBgBAAAAQAAgBAAAAQgBgBAAAAIgFgDIgGgCIgGgDQgDAAgCgDQgCgDAAgFQAAgHAFgEQAFgEAIAAQAHAAAHADIAAAKQgGgEgHAAQgEAAgDABQgDACAAADQAAABAAAAQABABAAABQAAAAABAAQAAABABAAIAGADIAIACQAEACADADQACAEAAAGQAAAGgFAEQgFAEgIAAQgJAAgIgEg");
	this.shape_24.setTransform(33.7,0);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AALAbIgRgXIgGAFIAAASIgKAAIAAg1IAKAAIAAAXIATgXIANAAIgVAYIAXAdg");
	this.shape_25.setTransform(28.5,0);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgRAXIAAgKQAHAFAJAAQAKAAAAgGQAAgBAAAAQgBgBAAAAQAAgBAAAAQgBgBAAAAIgFgDIgGgCIgGgDQgDAAgCgDQgCgDAAgFQAAgHAFgEQAFgEAIAAQAHAAAHADIAAAKQgGgEgHAAQgEAAgDABQgDACAAADQAAABAAAAQABABAAABQAAAAABAAQAAABABAAIAGADIAIACQAEACADADQACAEAAAGQAAAGgFAEQgFAEgIAAQgJAAgIgEg");
	this.shape_26.setTransform(22.8,0);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgEAbIAAg1IAJAAIAAA1g");
	this.shape_27.setTransform(19,0);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AAKAbIgMgTIgJAAIAAATIgJAAIAAg1IAUAAQAJAAAFAFQAFAEAAAJQAAALgMADIAOAVgAgLAAIALAAQAEAAADgCQACgBAAgFQAAgFgCgCQgDgCgEAAIgLAAg");
	this.shape_28.setTransform(15,0);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AANAbIgagnIAAAnIgKAAIAAg1IALAAIAbAnIAAgnIAJAAIAAA1g");
	this.shape_29.setTransform(5.7,0);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgGAbIgHgDQgDgCgCgDQgDgCgBgFQgCgFAAgHQAAgFACgFQABgFADgDQACgDADgCIAHgDIAGAAIAHAAIAHADIAGAFIADAIQACAFAAAFQAAAHgCAFQgBAFgCACIgGAFIgHADIgHAAIgGAAgAgEgRIgEABIgDADIgCAGIgBAHIABAKIADAGIAFACIAFABIAFAAIAEgCIADgDIADgGIAAgIIgBgJIgDgGIgFgCIgGgBg");
	this.shape_30.setTransform(-0.9,0);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgRAXIAAgKQAHAFAJAAQAKAAAAgGQAAgBAAAAQAAgBgBAAQAAgBAAAAQgBgBAAAAIgFgDIgGgCIgGgDQgDAAgCgDQgCgDAAgFQAAgHAFgEQAFgEAIAAQAHAAAHADIAAAKQgGgEgHAAQgEAAgDABQgDACAAADQAAADADABIAGADIAIACQAEACADADQACAEAAAGQAAAGgFAEQgFAEgIAAQgJAAgIgEg");
	this.shape_31.setTransform(-9.6,0);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AgRAbIAAg1IAKAAIAAAsIAYAAIAAAJg");
	this.shape_32.setTransform(-14.2,0);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AgRAbIAAg1IAjAAIAAAJIgZAAIAAAOIAVAAIAAAIIgVAAIAAANIAZAAIAAAJg");
	this.shape_33.setTransform(-19.3,0);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AgVAbIAAg1IATAAQALAAAGAHQAHAHAAAMQAAANgHAHQgGAHgLAAgAgLASIAJAAQAHAAAEgEQADgEAAgKQAAgJgDgEQgEgEgHAAIgJAAg");
	this.shape_34.setTransform(-24.8,0);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AgGAbIgHgDQgDgCgCgDQgDgCgBgFQgCgFAAgHQAAgFACgFQABgFADgDQACgDADgCIAHgDIAGAAIAHAAIAHADIAGAFIADAIQACAFAAAFQAAAHgCAFQgBAFgCACIgGAFIgHADIgHAAIgGAAgAgEgRIgEABIgDADIgCAGIgBAHIABAKIADAGIAFACIAFABIAFAAIAEgCIADgDIADgGIAAgIIgBgJIgDgGIgFgCIgGgBg");
	this.shape_35.setTransform(-31.1,0);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AAQAbIAAgnIgQAXIgPgXIAAAnIgKAAIAAg1IALAAIAOAXIAPgXIALAAIAAA1g");
	this.shape_36.setTransform(-37.8,0);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AgVAbIAAg1IATAAQALAAAGAHQAHAHAAAMQAAANgHAHQgGAHgLAAgAgLASIAJAAQAHAAAEgEQADgEAAgKQAAgJgDgEQgEgEgHAAIgJAAg");
	this.shape_37.setTransform(45.7,-11);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AgRAbIAAg1IAKAAIAAAsIAYAAIAAAJg");
	this.shape_38.setTransform(40.6,-11);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AgBAbIgIgDQgDgCgCgDQgCgCgCgFQgCgFABgHQgBgGACgEQACgFACgDQACgDADgCIAIgDIAGAAQAHAAAIADIAAAJQgHgEgIAAIgFABIgFACQgCACgCAEQgBAEAAAFQAAAGABAEQACAEACACIAFACIAFABQAIAAAHgEIAAAJQgIADgHAAIgGAAg");
	this.shape_39.setTransform(35.3,-11);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AgQAbIAAg1IAJAAIAAAsIAZAAIAAAJg");
	this.shape_40.setTransform(27.3,-11);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AgRAbIAAg1IAKAAIAAAsIAYAAIAAAJg");
	this.shape_41.setTransform(22.6,-11);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AAQAbIgEgNIgWAAIgFANIgLAAIAWg1IAKAAIAUA1gAAIAFIgIgUIgHAUIAPAAg");
	this.shape_42.setTransform(16.9,-11);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AARAbIAAgnIgRAXIgQgXIAAAnIgJAAIAAg1IAKAAIAPAXIAQgXIAKAAIAAA1g");
	this.shape_43.setTransform(10.4,-11);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AgRAXIAAgKQAHAFAJAAQAKAAAAgGQAAgBAAAAQAAgBgBAAQAAgBAAAAQgBgBAAAAIgFgDIgGgCIgGgDQgDAAgCgDQgCgDAAgFQAAgHAFgEQAFgEAIAAQAHAAAHADIAAAKQgGgEgHAAQgEAAgDABQgDACAAADQAAADADABIAGADIAIACQAEACADADQACAEAAAGQAAAGgFAEQgFAEgIAAQgJAAgIgEg");
	this.shape_44.setTransform(4.4,-11);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AgRAXIAAgKQAHAFAJAAQAKAAAAgGQAAgBAAAAQAAgBgBAAQAAgBAAAAQgBgBAAAAIgFgDIgGgCIgGgDQgDAAgCgDQgCgDAAgFQAAgHAFgEQAFgEAIAAQAHAAAHADIAAAKQgGgEgHAAQgEAAgDABQgDACAAADQAAADADABIAGADIAIACQAEACADADQACAEAAAGQAAAGgFAEQgFAEgIAAQgJAAgIgEg");
	this.shape_45.setTransform(-3.7,-11);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("AgTAbIAAg1IATAAQAKAAAFAFQAFAFAAAIQAAAIgFAEQgFAFgKAAIgJAAIAAASgAgJABIAJAAQAGAAACgCQACgCAAgFQAAgEgCgDQgCgCgGAAIgJAAg");
	this.shape_46.setTransform(-8.7,-11);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("AARAbIgGgNIgVAAIgFANIgKAAIAVg1IAJAAIAWA1gAAIAFIgIgUIgHAUIAPAAg");
	this.shape_47.setTransform(-14.5,-11);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFFFF").s().p("AAQAbIAAgnIgQAXIgPgXIAAAnIgKAAIAAg1IALAAIAOAXIAPgXIALAAIAAA1g");
	this.shape_48.setTransform(-21,-11);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFFFF").s().p("AgVAbIAAg1IATAAQALAAAGAHQAHAHAAAMQAAANgHAHQgGAHgLAAgAgLASIAJAAQAHAAAEgEQADgEAAgKQAAgJgDgEQgEgEgHAAIgJAAg");
	this.shape_49.setTransform(-30.5,-11);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFFFFF").s().p("AANAbIgbgnIAAAnIgJAAIAAg1IALAAIAaAnIAAgnIAKAAIAAA1g");
	this.shape_50.setTransform(-36.8,-11);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFFFFF").s().p("AgEAbIAAg1IAJAAIAAA1g");
	this.shape_51.setTransform(-41.4,-11);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FFFFFF").s().p("AARAbIAAgnIgRAXIgQgXIAAAnIgJAAIAAg1IAKAAIAPAXIAQgXIAKAAIAAA1g");
	this.shape_52.setTransform(-46.3,-11);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#2FB7AA").s().p("ArsDAIAAl/IXZAAIAAF/g");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.SD322, new cjs.Rectangle(-74.9,-19.2,149.9,38.3), null);


(lib.SD32 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgRAXIAAgKQAHAFAJAAQAKAAAAgGQAAgBAAAAQgBgBAAAAQAAgBAAAAQgBgBAAAAIgFgDIgGgCIgGgDQgDAAgCgDQgCgDAAgFQAAgHAFgEQAFgEAIAAQAHAAAHADIAAAKQgGgEgHAAQgEAAgDABQgDACAAADQAAABAAAAQABABAAABQAAAAABAAQAAABABAAIAGADIAIACQAEACADADQACAEAAAGQAAAGgFAEQgFAEgIAAQgJAAgIgEg");
	this.shape.setTransform(28.8,86.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgRAbIAAg1IAjAAIAAAJIgZAAIAAAOIAVAAIAAAIIgVAAIAAANIAZAAIAAAJg");
	this.shape_1.setTransform(24.2,86.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgEAbIAAg1IAJAAIAAA1g");
	this.shape_2.setTransform(20.6,86.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgEAbIAAgrIgRAAIAAgKIArAAIAAAKIgRAAIAAArg");
	this.shape_3.setTransform(17.2,86.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgEAbIAAg1IAJAAIAAA1g");
	this.shape_4.setTransform(13.8,86.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AANAbIgbgnIAAAnIgJAAIAAg1IALAAIAaAnIAAgnIAKAAIAAA1g");
	this.shape_5.setTransform(9.6,86.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgPAVQgGgGAAgLIAAgeIAJAAIAAAfQAAAHADADQADADAGAAQAHAAADgDQADgDAAgHIAAgfIAJAAIAAAeQAAALgFAGQgGAGgLAAQgKAAgFgGg");
	this.shape_6.setTransform(3.5,86.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgEAbIAAgrIgRAAIAAgKIArAAIAAAKIgRAAIAAArg");
	this.shape_7.setTransform(-1.7,86.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAKAbIgMgTIgJAAIAAATIgJAAIAAg1IAUAAQAJAAAFAFQAFAEAAAJQAAALgMADIAOAVgAgLAAIALAAQAEAAADgCQACgBAAgFQAAgFgCgCQgDgCgEAAIgLAAg");
	this.shape_8.setTransform(-6.4,86.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgGAbIgHgDQgDgCgCgDQgDgCgBgFQgCgFAAgHQAAgFACgFQABgFADgDQACgDADgCIAHgDIAGAAIAHAAIAHADIAGAFIADAIQACAFAAAFQAAAHgCAFQgBAFgCACIgGAFIgHADIgHAAIgGAAgAgEgRIgEABIgDADIgCAGIgBAHIABAKIADAGIAFACIAFABIAFAAIAEgCIADgDIADgGIAAgIIgBgJIgDgGIgFgCIgGgBg");
	this.shape_9.setTransform(-12.2,86.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgTAbIAAg1IATAAQAKAAAFAFQAFAFAAAIQAAAIgFAEQgFAFgKAAIgJAAIAAASgAgJABIAJAAQAGAAACgCQACgCAAgFQAAgEgCgDQgCgCgGAAIgJAAg");
	this.shape_10.setTransform(-17.5,86.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgTAbIAAg1IATAAQAKAAAFAFQAFAFAAAIQAAAIgFAEQgFAFgKAAIgJAAIAAASgAgJABIAJAAQAGAAACgCQACgCAAgFQAAgEgCgDQgCgCgGAAIgJAAg");
	this.shape_11.setTransform(-22.4,86.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgGAbIgHgDQgDgCgCgDQgDgCgBgFQgCgFAAgHQAAgFACgFQABgFADgDQACgDADgCIAHgDIAGAAIAHAAIAHADIAGAFIADAIQACAFAAAFQAAAHgCAFQgBAFgCACIgGAFIgHADIgHAAIgGAAgAgEgRIgEABIgDADIgCAGIgBAHIABAKIADAGIAFACIAFABIAFAAIAEgCIADgDIADgGIAAgIIgBgJIgDgGIgFgCIgGgBg");
	this.shape_12.setTransform(-28.1,86.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgQAbIAAg1IAhAAIAAAJIgYAAIAAAOIAVAAIAAAIIgVAAIAAAWg");
	this.shape_13.setTransform(45.4,75.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgGAbIgHgDQgDgCgCgDQgDgCgBgFQgCgFAAgHQAAgFACgFQABgFADgDQACgDADgCIAHgDIAGAAIAHAAIAHADIAGAFIADAIQACAFAAAFQAAAHgCAFQgBAFgCACIgGAFIgHADIgHAAIgGAAgAgEgRIgEABIgDADIgCAGIgBAHIABAKIADAGIAFACIAFABIAFAAIAEgCIADgDIADgGIAAgIIgBgJIgDgGIgFgCIgGgBg");
	this.shape_14.setTransform(40,75.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgEAbIAAgrIgRAAIAAgKIArAAIAAAKIgRAAIAAArg");
	this.shape_15.setTransform(32,75.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgRAXIAAgKQAHAFAJAAQAKAAAAgGQAAAAAAgBQAAgBgBAAQAAgBAAAAQgBgBAAAAIgFgDIgGgCIgGgDQgDAAgCgDQgCgDAAgFQAAgHAFgEQAFgEAIAAQAHAAAHADIAAAKQgGgEgHAAQgEAAgDABQgDACAAADQAAADADABIAGADIAIACQAEACADADQACAEAAAGQAAAGgFAEQgFAEgIAAQgJAAgIgEg");
	this.shape_16.setTransform(27.5,75.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgEAbIAAg1IAJAAIAAA1g");
	this.shape_17.setTransform(24,75.7);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgRAbIAAg1IAKAAIAAAsIAYAAIAAAJg");
	this.shape_18.setTransform(21,75.7);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgEAbIAAgXIgVgeIAMAAIANAWIAOgWIAMAAIgVAeIAAAXg");
	this.shape_19.setTransform(13.2,75.7);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgEAbIAAgrIgRAAIAAgKIArAAIAAAKIgRAAIAAArg");
	this.shape_20.setTransform(8.2,75.7);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AANAbIgbgnIAAAnIgJAAIAAg1IALAAIAaAnIAAgnIAKAAIAAA1g");
	this.shape_21.setTransform(2.9,75.7);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgEAbIAAg1IAJAAIAAA1g");
	this.shape_22.setTransform(-1.3,75.7);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AAQAbIgEgNIgWAAIgFANIgKAAIAVg1IAJAAIAWA1gAAIAFIgIgUIgHAUIAPAAg");
	this.shape_23.setTransform(-5.3,75.7);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgEAbIAAgrIgRAAIAAgKIArAAIAAAKIgRAAIAAArg");
	this.shape_24.setTransform(-10.4,75.7);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AAKAbIgMgTIgJAAIAAATIgJAAIAAg1IAUAAQAJAAAFAFQAFAEAAAJQAAALgMADIAOAVgAgLAAIALAAQAEAAADgCQACgBAAgFQAAgFgCgCQgDgCgEAAIgLAAg");
	this.shape_25.setTransform(-15,75.7);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgRAbIAAg1IAjAAIAAAJIgZAAIAAAOIAVAAIAAAIIgVAAIAAANIAZAAIAAAJg");
	this.shape_26.setTransform(-20.1,75.7);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgCAbIgGgDQgEgCgCgDQgDgCgBgFQgCgFAAgHQAAgGACgEQABgFADgDQACgDAEgCIAGgDIAGAAQAIAAAIADIAAAJQgHgEgIAAIgFABIgFACQgDACAAAEQgCAEAAAFQAAAGACAEQAAAEADACIAFACIAFABQAIAAAHgEIAAAJQgIADgIAAIgGAAg");
	this.shape_27.setTransform(-25,75.7);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgVAbIAAg1IATAAQALAAAGAHQAHAHAAAMQAAANgHAHQgGAHgLAAgAgLASIAJAAQAHAAAEgEQADgEAAgKQAAgJgDgEQgEgEgHAAIgJAAg");
	this.shape_28.setTransform(-32.9,75.7);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AANAbIgagnIAAAnIgKAAIAAg1IALAAIAaAnIAAgnIAKAAIAAA1g");
	this.shape_29.setTransform(-38.8,75.7);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AARAbIgGgNIgVAAIgFANIgKAAIAVg1IAJAAIAWA1gAAIAFIgIgUIgHAUIAPAAg");
	this.shape_30.setTransform(-44.7,75.7);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgRAbIAAg1IAjAAIAAAJIgZAAIAAAOIAVAAIAAAIIgVAAIAAANIAZAAIAAAJg");
	this.shape_31.setTransform(52.3,64.7);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AgBAbIgIgDQgDgCgCgDQgCgCgCgFQgCgFABgHQgBgGACgEQACgFACgDQACgDADgCIAIgDIAGAAQAHAAAIADIAAAJQgHgEgIAAIgFABIgFACQgCACgCAEQgBAEAAAFQAAAGABAEQACAEACACIAFACIAFABQAIAAAHgEIAAAJQgIADgHAAIgGAAg");
	this.shape_32.setTransform(47.4,64.7);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AANAbIgbgnIAAAnIgJAAIAAg1IALAAIAbAnIAAgnIAJAAIAAA1g");
	this.shape_33.setTransform(41.8,64.7);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AAQAbIgEgNIgWAAIgFANIgLAAIAWg1IAKAAIAUA1gAAIAFIgIgUIgHAUIAPAAg");
	this.shape_34.setTransform(35.9,64.7);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AgBAbIgIgDQgDgCgCgDQgCgCgCgFQgCgFABgHQgBgGACgEQACgFACgDQACgDADgCIAIgDIAGAAQAIAAAHADIAAAJQgHgEgIAAIgFABIgFACQgCACgCAEQgBAEAAAFQAAAGABAEQACAEACACIAFACIAFABQAIAAAHgEIAAAJQgHADgIAAIgGAAg");
	this.shape_35.setTransform(30.7,64.7);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AgEAbIAAg1IAJAAIAAA1g");
	this.shape_36.setTransform(27,64.7);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AgQAbIAAg1IAhAAIAAAJIgYAAIAAAOIAVAAIAAAIIgVAAIAAAWg");
	this.shape_37.setTransform(23.8,64.7);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AgEAbIAAg1IAJAAIAAA1g");
	this.shape_38.setTransform(20.2,64.7);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AANAbIgagnIAAAnIgKAAIAAg1IALAAIAbAnIAAgnIAJAAIAAA1g");
	this.shape_39.setTransform(16,64.7);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AACAbIgGAAIgGgDIgGgEQgDgDgBgFQgCgFAAgHQAAgFACgFQABgFADgDQACgDAEgCIAGgDIAGAAQAJAAAJADIAAAJQgJgEgIAAIgEABIgEABQgBABAAAAQgBAAAAABQgBAAAAAAQAAABAAAAIgDAGIgBAHIABAIIADAGQAAAAAAABQAAAAABABQAAAAABAAQAAABABAAQABAAAAAAQABABAAAAQABAAAAAAQABAAABAAIADABIAJgCIAAgMIgLAAIAAgIIAVAAIAAAaQgJAEgKAAg");
	this.shape_40.setTransform(10.2,64.7);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AgEAbIAAg1IAJAAIAAA1g");
	this.shape_41.setTransform(6.3,64.7);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AgRAXIAAgKQAHAFAJAAQAKAAAAgGQAAAAAAgBQAAgBgBAAQAAgBAAAAQgBgBAAAAIgFgDIgGgCIgGgDQgDAAgCgDQgCgDAAgFQAAgHAFgEQAFgEAIAAQAHAAAHADIAAAKQgGgEgHAAQgEAAgDABQgDACAAADQAAADADABIAGADIAIACQAEACADADQACAEAAAGQAAAGgFAEQgFAEgIAAQgJAAgIgEg");
	this.shape_42.setTransform(2.9,64.7);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AALAbIAAgWIgVAAIAAAWIgKAAIAAg1IAKAAIAAAXIAVAAIAAgXIAKAAIAAA1g");
	this.shape_43.setTransform(-4.9,64.7);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AgEAbIAAgrIgRAAIAAgKIArAAIAAAKIgRAAIAAArg");
	this.shape_44.setTransform(-10,64.7);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AgEAbIAAg1IAJAAIAAA1g");
	this.shape_45.setTransform(-13.4,64.7);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("AANAbIgNglIgLAlIgKAAIgRg1IAKAAIANAoIAMgoIAIAAIAMAmIAMgmIAKAAIgRA1g");
	this.shape_46.setTransform(-18.5,64.7);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("AANAbIgNgTIgNATIgLAAIATgbIgSgaIALAAIAMASIANgSIALAAIgSAaIATAbg");
	this.shape_47.setTransform(-27.8,64.7);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFFFF").s().p("AgEAbIAAg1IAJAAIAAA1g");
	this.shape_48.setTransform(-31.5,64.7);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFFFF").s().p("AAKAbIgMgTIgJAAIAAATIgJAAIAAg1IAUAAQAJAAAFAFQAFAEAAAJQAAALgMADIAOAVgAgLAAIALAAQAEAAADgCQACgBAAgFQAAgFgCgCQgDgCgEAAIgLAAg");
	this.shape_49.setTransform(-35,64.7);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFFFFF").s().p("AgEAbIAAgrIgRAAIAAgKIArAAIAAAKIgRAAIAAArg");
	this.shape_50.setTransform(-40.1,64.7);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFFFFF").s().p("AAQAbIgEgNIgWAAIgFANIgLAAIAWg1IAKAAIAUA1gAAIAFIgIgUIgHAUIAPAAg");
	this.shape_51.setTransform(-45.2,64.7);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FFFFFF").s().p("AAQAbIAAgnIgQAXIgPgXIAAAnIgKAAIAAg1IALAAIAOAXIAPgXIALAAIAAA1g");
	this.shape_52.setTransform(-51.3,64.7);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#2FB7AA").s().p("ApdDAIAAl/IS8AAIAAF/g");
	this.shape_53.setTransform(-0.1,75.4);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#262733").s().p("AgKAhIgLgEIAAgIQAGAEAEABQAFACAGAAQAHAAAEgDQADgEAAgFIgCgGIgEgEIgSgHQgFgDgBgCQgDgEAAgGQAAgFACgDQADgFAEgCQAEgCAHAAIAIABIAJADIAAAIIgEgCIgGgDIgHgBQgHAAgCADQgEAEAAADIACAHIAEADIASAHQADACAEAEQADADgBAGQAAAJgEAFQgGAFgLAAg");
	this.shape_54.setTransform(43.2,34.3);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#262733").s().p("AgUAhIAAhBIAHAAIAAA6IAiAAIAAAHg");
	this.shape_55.setTransform(37.6,34.3);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#262733").s().p("AgUAhIAAhBIApAAIAAAGIgiAAIAAAXIAeAAIAAAGIgeAAIAAAYIAiAAIAAAGg");
	this.shape_56.setTransform(31.4,34.3);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#262733").s().p("AgDAhIgZhBIAHAAIAVA4IAWg4IAHAAIgaBBg");
	this.shape_57.setTransform(24.8,34.3);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#262733").s().p("AgUAhIAAhBIApAAIAAAGIgiAAIAAAXIAeAAIAAAGIgeAAIAAAYIAiAAIAAAGg");
	this.shape_58.setTransform(18.3,34.3);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#262733").s().p("AgUAhIAAhBIAIAAIAAA6IAhAAIAAAHg");
	this.shape_59.setTransform(12.5,34.3);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#262733").s().p("AgUAhIAAhBIApAAIAAAGIgiAAIAAAXIAeAAIAAAGIgeAAIAAAYIAiAAIAAAGg");
	this.shape_60.setTransform(2.9,34.3);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#262733").s().p("AAYAhIAAg2IgYAhIgXggIAAA1IgHAAIAAhBIAIAAIAWAhIAXghIAIAAIAABBg");
	this.shape_61.setTransform(-4.5,34.3);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#262733").s().p("AgCAhIAAhBIAFAAIAABBg");
	this.shape_62.setTransform(-10.1,34.3);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#262733").s().p("AgDAhIAAg7IgXAAIAAgGIA1AAIAAAGIgXAAIAAA7g");
	this.shape_63.setTransform(-14.8,34.3);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#262733").s().p("AgUAeIAAgHQAIAEAIAAQAIAAAGgDQAEgEAAgGQAAgGgFgDQgEgEgJAAIgHAAIAAgGIAHAAQAIAAADgCQADgDABgFQAAgGgFgCQgDgDgHAAQgHAAgIADIAAgHQAHgDAIAAQAHAAAGACQAEAEACADQADAFAAAEQAAADgCAEIgEAFIgDABIAEACQADACADADQACADAAAGQAAAHgCADQgDAFgFACQgGADgIAAQgJAAgIgEg");
	this.shape_64.setTransform(-24.5,34.3);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#262733").s().p("AAUAhIgog3IAAA3IgHAAIAAhBIAIAAIAoA3IAAg3IAHAAIAABBg");
	this.shape_65.setTransform(-34.9,34.3);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#262733").s().p("AgWAaQgHgJAAgRQAAgQAHgJQAIgIAOAAQAPAAAHAIQAIAJAAAQQAAARgIAJQgHAIgPAAQgOAAgIgIgAgQgUQgGAHAAANQAAAOAGAHQAGAHAKAAQAMAAAFgHQAGgGgBgPQABgOgGgGQgFgGgMAAQgLAAgFAGg");
	this.shape_66.setTransform(-42.6,34.3);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#262733").s().p("AATAhIgTgbIgSAbIgJAAIAYghIgYggIAKAAIARAaIATgaIAJAAIgXAgIAXAhg");
	this.shape_67.setTransform(70.4,22.3);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#262733").s().p("AgDAhIAAhBIAHAAIAABBg");
	this.shape_68.setTransform(65.8,22.3);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#262733").s().p("AARAhIgRgbIgQAAIAAAbIgIAAIAAhBIAaAAQALAAAEAFQAFAEAAAKQAAAJgEAEQgDAEgIACIASAbgAgQAAIAQAAQAIAAADgDQAEgDAAgGQAAgGgDgEQgEgEgGAAIgSAAg");
	this.shape_69.setTransform(61.1,22.3);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#262733").s().p("AgDAhIAAg7IgXAAIAAgGIA1AAIAAAGIgYAAIAAA7g");
	this.shape_70.setTransform(54.4,22.3);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#262733").s().p("AAWAhIgIgUIgbAAIgIAUIgIAAIAahBIAHAAIAaBBgAgLAGIAXAAIgMgeg");
	this.shape_71.setTransform(48.3,22.3);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#262733").s().p("AAYAhIAAg2IgYAhIgXggIAAA1IgHAAIAAhBIAIAAIAWAhIAXghIAIAAIAABBg");
	this.shape_72.setTransform(40.7,22.3);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#262733").s().p("AgDAhIAAgeIgZgjIAJAAIATAdIAUgdIAJAAIgZAjIAAAeg");
	this.shape_73.setTransform(29.9,22.3);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#262733").s().p("AgDAhIAAg7IgXAAIAAgGIA1AAIAAAGIgXAAIAAA7g");
	this.shape_74.setTransform(23.5,22.3);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#262733").s().p("AAUAhIgng3IAAA3IgIAAIAAhBIAJAAIAmA3IAAg3IAIAAIAABBg");
	this.shape_75.setTransform(16.4,22.3);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#262733").s().p("AgCAhIAAhBIAGAAIAABBg");
	this.shape_76.setTransform(11.1,22.3);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#262733").s().p("AAXAhIgIgUIgcAAIgIAUIgIAAIAbhBIAGAAIAaBBgAgLAGIAXAAIgMgeg");
	this.shape_77.setTransform(6.2,22.3);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#262733").s().p("AgDAhIAAg7IgXAAIAAgGIA1AAIAAAGIgXAAIAAA7g");
	this.shape_78.setTransform(0.2,22.3);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#262733").s().p("AAQAhIgQgbIgRAAIAAAbIgHAAIAAhBIAaAAQAKAAAFAFQAFAFAAAJQAAAIgEAFQgFAEgGACIASAbgAgRAAIARAAQAIAAADgDQAEgDgBgGQAAgGgCgEQgEgEgGAAIgTAAg");
	this.shape_79.setTransform(-6,22.3);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#262733").s().p("AgUAhIAAhBIApAAIAAAGIgiAAIAAAXIAeAAIAAAGIgeAAIAAAYIAiAAIAAAGg");
	this.shape_80.setTransform(-12.8,22.3);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#262733").s().p("AgRAaQgHgJgBgRQABgQAHgJQAIgIAOAAQALAAAKAFIAAAHQgJgFgLAAQgMAAgFAGQgGAHAAANQAAAOAFAHQAHAGALAAQALAAAJgFIAAAHQgKAFgLAAQgOAAgIgIg");
	this.shape_81.setTransform(-19.3,22.3);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#262733").s().p("AgUAhIAAhBIApAAIAAAGIghAAIAAAXIAcAAIAAAGIgcAAIAAAeg");
	this.shape_82.setTransform(-28.8,22.3);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#262733").s().p("AgWAaQgHgJAAgRQAAgQAHgJQAJgIANAAQAPAAAHAIQAIAJAAAQQAAARgIAJQgHAIgPAAQgNAAgJgIgAgQgUQgFAHgBANQABAOAFAHQAFAHALAAQAMAAAFgHQAGgGgBgPQABgNgGgHQgFgGgMAAQgLAAgFAGg");
	this.shape_83.setTransform(-35.8,22.3);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#262733").s().p("AgUAhIAAhBIAHAAIAAA6IAiAAIAAAHg");
	this.shape_84.setTransform(-45.6,22.3);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#262733").s().p("AgUAhIAAhBIApAAIAAAGIgiAAIAAAXIAeAAIAAAGIgeAAIAAAYIAiAAIAAAGg");
	this.shape_85.setTransform(-51.9,22.3);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#262733").s().p("AgDAhIgZhBIAHAAIAVA4IAWg4IAHAAIgaBBg");
	this.shape_86.setTransform(-58.5,22.3);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#262733").s().p("AgUAhIAAhBIApAAIAAAGIgiAAIAAAXIAeAAIAAAGIgeAAIAAAYIAiAAIAAAGg");
	this.shape_87.setTransform(-64.9,22.3);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#262733").s().p("AgUAhIAAhBIAIAAIAAA6IAhAAIAAAHg");
	this.shape_88.setTransform(-70.7,22.3);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#262733").s().p("AgVArIAkhVIAHAAIgkBVg");
	this.shape_89.setTransform(69.4,10.4);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#262733").s().p("AgDAhIAAg7IgXAAIAAgGIA1AAIAAAGIgXAAIAAA7g");
	this.shape_90.setTransform(60.5,10.3);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#262733").s().p("AgRAaQgHgJgBgRQABgQAHgJQAIgIAOAAQALAAAKAFIAAAHQgJgFgLAAQgLAAgHAGQgFAHAAANQAAAOAFAHQAHAGALAAQALAAAJgFIAAAHQgKAFgLAAQgOAAgIgIg");
	this.shape_91.setTransform(54,10.3);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#262733").s().p("AAWAhIgHgUIgcAAIgIAUIgIAAIAahBIAHAAIAaBBgAgLAGIAXAAIgMgeg");
	this.shape_92.setTransform(47.3,10.3);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#262733").s().p("AgWAhIAAhBIAWAAQAMAAAFAFQAGAFAAAKQAAALgGAEQgFAFgMAAIgPAAIAAAZgAgPABIAPAAQAKAAADgDQADgDAAgHQAAgGgDgEQgDgDgKAAIgPAAg");
	this.shape_93.setTransform(41.4,10.3);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#262733").s().p("AAXAhIAAg2IgXAhIgXggIAAA1IgHAAIAAhBIAIAAIAWAhIAXghIAIAAIAABBg");
	this.shape_94.setTransform(33.8,10.3);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#262733").s().p("AgDAhIAAhBIAHAAIAABBg");
	this.shape_95.setTransform(28.2,10.3);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#262733").s().p("AgTAhIAAhBIAnAAIAAAGIggAAIAAAXIAcAAIAAAGIgcAAIAAAeg");
	this.shape_96.setTransform(20.6,10.3);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#262733").s().p("AgVAaQgIgJAAgRQAAgQAIgJQAHgIAOAAQAPAAAHAIQAIAJAAAQQAAARgIAJQgHAIgPAAQgOAAgHgIgAgQgUQgGAHAAANQAAAOAGAHQAGAHAKAAQAMAAAFgHQAGgHAAgOQAAgNgGgHQgFgGgMAAQgKAAgGAGg");
	this.shape_97.setTransform(13.6,10.3);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#262733").s().p("AgUAhIAAhBIApAAIAAAGIgiAAIAAAXIAeAAIAAAGIgeAAIAAAYIAiAAIAAAGg");
	this.shape_98.setTransform(3.3,10.3);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#262733").s().p("AgRAaQgIgJAAgRQAAgQAIgJQAIgIAOAAQALAAAKAFIAAAHQgKgFgKAAQgMAAgFAGQgGAHAAANQAAAOAGAHQAFAGAMAAQALAAAJgFIAAAHQgKAFgLAAQgOAAgIgIg");
	this.shape_99.setTransform(-3.3,10.3);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#262733").s().p("AAUAhIgog3IAAA3IgGAAIAAhBIAHAAIAoA3IAAg3IAHAAIAABBg");
	this.shape_100.setTransform(-10.5,10.3);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#262733").s().p("AAWAhIgIgUIgbAAIgIAUIgIAAIAahBIAHAAIAaBBgAgLAGIAXAAIgMgeg");
	this.shape_101.setTransform(-17.9,10.3);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#262733").s().p("AgRAaQgIgJABgRQgBgQAIgJQAIgIAOAAQALAAAJAFIAAAHQgIgFgLAAQgMAAgGAGQgFAHAAANQAAAOAFAHQAGAGAMAAQALAAAIgFIAAAHQgJAFgLAAQgOAAgIgIg");
	this.shape_102.setTransform(-24.7,10.3);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#262733").s().p("AgDAhIAAhBIAHAAIAABBg");
	this.shape_103.setTransform(-29.5,10.3);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#262733").s().p("AgTAhIAAhBIAnAAIAAAGIggAAIAAAXIAcAAIAAAGIgcAAIAAAeg");
	this.shape_104.setTransform(-33.7,10.3);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#262733").s().p("AgDAhIAAhBIAHAAIAABBg");
	this.shape_105.setTransform(-38.3,10.3);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#262733").s().p("AAUAhIgng3IAAA3IgHAAIAAhBIAIAAIAmA3IAAg3IAIAAIAABBg");
	this.shape_106.setTransform(-43.6,10.3);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#262733").s().p("AgSAaQgIgKAAgQQAAgPAIgKQAHgIAPAAQALAAAKAEIAAAIIgLgEIgJgBQgNAAgFAGQgGAHAAANQAAAOAGAHQAFAGANAAQAJAAAGgCIAAgTIgQAAIAAgGIAXAAIAAAdQgKAFgNAAQgPAAgHgIg");
	this.shape_107.setTransform(-51.3,10.3);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#262733").s().p("AgDAhIAAhBIAGAAIAABBg");
	this.shape_108.setTransform(-56.3,10.3);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#262733").s().p("AgKAhIgKgEIAAgIQAEAEAFABQAEACAHAAQAHAAADgDQAEgDAAgGQAAgEgCgCIgFgEIgRgHQgFgCgCgDQgDgEAAgGIACgIQADgFAFgCQAEgCAGAAQAGAAACABIAJADIAAAIIgDgCQgCgCgFgBIgHgBQgGAAgDADQgDADAAAEQAAAEACADIAFADIAHAEIAKADQAEACACAEQAEAEAAAFQAAAIgGAGQgFAFgLAAg");
	this.shape_109.setTransform(-60.8,10.3);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#2FB7AA").s().p("AgHAIQgEgDAAgFQAAgEAEgDQADgEAEAAQAEAAAEAEQADADABAEQgBAFgDADQgEAEgEAAQgEAAgDgEg");
	this.shape_110.setTransform(-69.6,10.3);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#262733").s().p("AgPAsQgIgCgGgDIAAgUQAGAFAHACQAHADAIAAQALAAAAgJQAAgEgEgDIgLgFIgGgBQgKgFgEgDQgFgFgBgLQABgIADgFQAEgHAHgEQAHgDALAAQAIAAAFABQAFABAHADIAAAVQgGgFgGgCQgGgDgGAAQgFAAgDACQgEACAAAFQAAADACACIAFAEIAJADQAHACAGADQAFACAEAFQACAEAAAIQAAAJgDAFQgDAGgIAEQgHAEgJAAQgKAAgGgBg");
	this.shape_111.setTransform(55.6,-12.7);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#262733").s().p("AAWArIgngzIAAAzIgUAAIAAhVIASAAIAlAyIAAgyIAUAAIAABVg");
	this.shape_112.setTransform(46.5,-12.7);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#262733").s().p("AgeAiQgLgLAAgXQAAgVALgMQAKgLAUAAQATAAAMALQALAMAAAVQAAAWgLAMQgLALgUAAQgTAAgLgLgAgPgUQgFAFAAAPQAAAQAFAFQAFAHAKAAQAKAAAFgHQAFgFAAgQQAAgPgFgFQgFgHgKAAQgKAAgFAHg");
	this.shape_113.setTransform(36.3,-12.7);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#262733").s().p("AgJArIAAhVIATAAIAABVg");
	this.shape_114.setTransform(28.9,-12.7);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#262733").s().p("AgKArIAAhFIgYAAIAAgQIBFAAIAAAQIgZAAIAABFg");
	this.shape_115.setTransform(22.5,-12.7);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#262733").s().p("AAWArIgHgSIgfAAIgGASIgUAAIAhhVIAWAAIAeBVgAgLAJIAVAAIgKggg");
	this.shape_116.setTransform(14.3,-12.7);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#262733").s().p("AgiAAQAAgsAqAAQANAAAOAGIAAASQgMgIgMAAQgMAAgGAHQgFAHgBAOQABAQAFAGQAHAHALAAQAGAAAFgCQAIgDAFgDIAAASQgFADgIABIgOACQgqAAAAgtg");
	this.shape_117.setTransform(5,-12.7);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#262733").s().p("AgJArIAAhVIATAAIAABVg");
	this.shape_118.setTransform(-1.7,-12.7);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#262733").s().p("AgcArIAAhVIAVAAIAABFIAkAAIAAAQg");
	this.shape_119.setTransform(-7.6,-12.7);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#262733").s().p("AgjArIAAhVIAmAAQAQAAAJAHQAIAHAAAOQAAAOgJAHQgIAIgQAAIgRAAIAAAcgAgOAAIAPAAQAGAAADgEQADgDAAgGQAAgNgMAAIgPAAg");
	this.shape_120.setTransform(-16.3,-12.7);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#262733").s().p("AAZArIAAg5IgZAhIgYghIAAA5IgVAAIAAhVIAWAAIAXAhIAZghIAVAAIAABVg");
	this.shape_121.setTransform(-27,-12.7);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#262733").s().p("AgKArIAAhVIAVAAIAABVg");
	this.shape_122.setTransform(-35.1,-12.7);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#262733").s().p("AgdArIAAhVIA7AAIAAAQIglAAIAAAVIAfAAIAAAPIgfAAIAAAhg");
	this.shape_123.setTransform(-45.5,-12.7);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#262733").s().p("AgeAiQgLgLAAgXQAAgVALgMQAKgLAUAAQATAAAMALQALAMAAAVQAAAVgLANQgLALgUAAQgTAAgLgLgAgPgUQgFAFAAAPQAAAQAFAFQAFAHAKAAQAKAAAFgHQAFgFAAgQQAAgPgFgFQgFgHgKAAQgKAAgFAHg");
	this.shape_124.setTransform(-54.8,-12.7);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#262733").s().p("AgKArIAAhFIgYAAIAAgQIBFAAIAAAQIgZAAIAABFg");
	this.shape_125.setTransform(58.4,-28.3);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#262733").s().p("AAWArIgogzIAAAzIgTAAIAAhVIASAAIAmAyIAAgyIATAAIAABVg");
	this.shape_126.setTransform(49.2,-28.3);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#262733").s().p("AgdArIAAhVIA7AAIAAAQIgmAAIAAATIAhAAIAAAPIghAAIAAATIAmAAIAAAQg");
	this.shape_127.setTransform(40,-28.3);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#262733").s().p("AAZArIAAg5IgZAhIgYghIAAA5IgVAAIAAhVIAWAAIAXAhIAZghIAVAAIAABVg");
	this.shape_128.setTransform(30,-28.3);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#262733").s().p("AgQAsQgHgCgGgDIAAgUQAGAFAHACQAHADAIAAQALAAAAgJQAAgFgEgCIgQgGQgLgEgEgEQgGgFAAgLQAAgGAEgHQADgHAIgEQAHgDALAAQAIAAAFABQAFABAHADIAAAVQgGgFgGgCQgGgDgHAAQgEAAgEACQgDACAAAFQAAACACADIAFAEIAJADQAHACAGADQAEACAEAFQAEAFAAAHQAAAIgEAGQgEAHgHADQgIAEgJAAQgIAAgIgBg");
	this.shape_129.setTransform(20.1,-28.3);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#262733").s().p("AgQAsQgHgCgGgDIAAgUQAGAFAHACQAHADAIAAQALAAAAgJQAAgFgEgCIgRgGQgKgFgEgDQgGgFAAgLQAAgGAEgHQADgHAIgEQAHgDALAAQAIAAAFABQAFABAHADIAAAVQgGgFgGgCQgGgDgHAAQgEAAgEACQgDACAAAFQAAADACACIAFAEIAJADQAHACAGADQAEACAEAFQAEAFAAAHQAAAIgEAGQgEAHgHADQgIAEgJAAQgIAAgIgBg");
	this.shape_130.setTransform(12,-28.3);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#262733").s().p("AgdArIAAhVIA7AAIAAAQIgmAAIAAATIAhAAIAAAPIghAAIAAATIAmAAIAAAQg");
	this.shape_131.setTransform(3.7,-28.3);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#262733").s().p("AgQAsQgHgCgGgDIAAgUQAHAFAGACQAGADAJAAQALAAAAgJQAAgFgEgCIgLgFIgFgBQgLgFgEgDQgGgFABgLQgBgIAEgFQAEgHAHgEQAIgDAKAAQAIAAAFABQAEABAIADIAAAVQgHgGgFgBQgGgDgGAAQgFAAgDACQgEACAAAFQAAADACACIAFAEIAJADQAIACAFADQAFACADAFQAEAEAAAIQgBAJgDAFQgEAHgHADQgHAEgKAAQgIAAgIgBg");
	this.shape_132.setTransform(-4.5,-28.3);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#262733").s().p("AgPAsQgIgCgGgDIAAgUQAGAFAHACQAGADAJAAQALAAAAgJQAAgFgEgCIgMgFIgFgBQgKgFgEgDQgFgFgBgLQABgIADgFQADgHAJgEQAHgDAKAAQAIAAAFABQAEABAIADIAAAVQgHgGgFgBQgGgDgGAAQgFAAgEACQgDACAAAFQAAADACACIAFAEIAJADQAIACAFADQAFACAEAFQACAEAAAIQABAJgEAFQgEAHgGADQgJAEgIAAQgJAAgHgBg");
	this.shape_133.setTransform(-12.7,-28.3);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#262733").s().p("AAWArIgHgSIgfAAIgGASIgUAAIAhhVIAWAAIAeBVgAgLAJIAVAAIgKggg");
	this.shape_134.setTransform(-21.6,-28.3);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#262733").s().p("AAMArIgWgiIgGAHIAAAbIgVAAIAAhVIAVAAIAAAkIAZgkIAbAAIghAkIAjAxg");
	this.shape_135.setTransform(-35.1,-28.3);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#262733").s().p("AgPAsQgIgCgGgDIAAgUQAFAFAIACQAGADAJAAQALAAAAgJQAAgEgEgDIgMgFIgFgBQgKgFgEgDQgFgFgBgLQABgIADgFQAEgHAHgEQAHgDALAAQAIAAAFABQAFABAHADIAAAVQgGgFgGgCQgGgDgGAAQgFAAgEACQgDACAAAFQAAADACACIAFAEIAJADQAHACAGADQAFACAEAFQACAEAAAIQABAJgEAFQgEAHgHADQgHAEgJAAQgKAAgGgBg");
	this.shape_136.setTransform(-44.2,-28.3);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#262733").s().p("AgKArIAAhVIAVAAIAABVg");
	this.shape_137.setTransform(-50.6,-28.3);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#262733").s().p("AANArIgRgeIgNAAIAAAeIgVAAIAAhVIAqAAQAPAAAHAHQAJAHAAANQAAAHgFAIQgFAHgIACIAWAigAgRgBIARAAQAMAAAAgNQAAgGgDgDQgDgDgFAAIgSAAg");
	this.shape_138.setTransform(-57.6,-28.3);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#262733").s().p("AgBAhIAAgyIgMAIIAAgPIAOgIIANAAIAABBg");
	this.shape_139.setTransform(33.5,-52.9);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#262733").s().p("AARAhIgegnIAAAnIgPAAIAAhBIAOAAIAcAmIAAgmIAPAAIAABBg");
	this.shape_140.setTransform(24,-52.9);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#262733").s().p("AgXAaQgJgJAAgRQAAgPAJgKQAIgJAPAAQAQAAAIAJQAJAJAAAQQAAAQgJAKQgJAJgPAAQgOAAgJgJgAgLgPQgEAEAAALQAAAMAEAFQAEAEAHAAQAIAAAEgFQAEgFAAgLQAAgKgEgGQgEgEgIAAQgHAAgEAFg");
	this.shape_141.setTransform(16.2,-52.9);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#262733").s().p("AgHAhIAAhBIAPAAIAABBg");
	this.shape_142.setTransform(10.5,-52.9);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#262733").s().p("AgMAiIgKgEIAAgPQAFAEAFABQAFACAGAAQAJAAAAgHQAAgDgDgCIgJgEIgEgBQgIgDgDgCQgEgFAAgIQAAgFADgFQACgGAGgCQAGgDAIAAIAKABIAJAEIAAAPIgJgFQgEgCgGAAQgDAAgDABQgDADAAACQAAABAAABQAAAAABABQAAAAAAABQAAAAABABIAEACIAGADIALAEQADABADAEQACADAAAGQAAAFgCAGQgEAGgFACQgFADgHAAg");
	this.shape_143.setTransform(5.6,-52.9);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#262733").s().p("AgMAiQgHgCgDgCIAAgPQAFAEAFABQAFACAGAAQAJAAAAgHQAAgDgDgCIgJgEIgEgBQgHgDgEgCQgEgEAAgJQAAgEACgGQAEgGAFgCQAGgDAHAAIAKABIAKAEIAAAPIgJgFQgFgCgFAAQgDAAgDABQgDACAAADQAAABAAABQAAAAABABQAAAAAAABQAAAAABABIAEACIAGADIAKAEQAEABADAEQACAEAAAFQAAAGgDAFQgCAFgGADQgFADgIAAg");
	this.shape_144.setTransform(-0.6,-52.9);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#262733").s().p("AgWAhIAAhBIAtAAIAAAMIgdAAIAAAPIAZAAIAAALIgZAAIAAAPIAdAAIAAAMg");
	this.shape_145.setTransform(-7,-52.9);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#262733").s().p("AgMAiQgHgCgDgCIAAgPQAFAEAFABQAFACAGAAQAJAAAAgHQAAgDgDgCIgJgEIgEgBQgHgDgEgCQgEgFAAgIQAAgEACgGQAEgGAFgCQAGgDAHAAIAKABIAKAEIAAAPIgJgFQgFgCgFAAQgDAAgDABQgDADAAACQAAABAAABQAAAAABABQAAAAAAABQAAAAABABIAEACIAGADIAKAEQAEABADAEQACAEAAAFQAAAGgDAFQgCAFgGADQgFADgIAAg");
	this.shape_146.setTransform(-13.3,-52.9);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#262733").s().p("AgMAiIgKgEIAAgPQAFAEAFABQAGACAFAAQAJAAAAgHQAAgDgDgCIgJgEIgEgBQgIgDgDgCQgEgFAAgIQAAgFADgFQACgGAGgCQAGgDAIAAIAKABIAJAEIAAAPIgJgFQgEgCgGAAQgDAAgDABQgDADAAACQAAABAAABQAAAAABABQAAAAAAABQAAAAABABIAEACIAGADIALAEQADABADAEQACADAAAGQAAAFgCAGQgEAGgFACQgFADgHAAg");
	this.shape_147.setTransform(-22.9,-52.9);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#262733").s().p("AANAhIgNgqIgMAqIgQAAIgThBIASAAIAKAtIANgtIAMAAIANAtIALgtIASAAIgTBBg");
	this.shape_148.setTransform(-31.3,-52.9);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f().s("#3F3B4F").ss(3).p("AtRtRIAAajIajAAIAA6jg");
	this.shape_149.setTransform(0,-9.6);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#FFFFFF").s().p("AtRNSIAA6jIajAAIAAajg");
	this.shape_150.setTransform(0,-9.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer 2
	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("rgba(255,255,255,0.02)").s().p("AwZQaMAAAggzMAgzAAAMAAAAgzg");
	this.shape_151.setTransform(0,-9.6);

	this.timeline.addTween(cjs.Tween.get(this.shape_151).wait(1));

}).prototype = getMCSymbolPrototype(lib.SD32, new cjs.Rectangle(-105,-114.6,210,210), null);


(lib.SD31 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// WORKSHOP 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#262733").s().p("AgcArIAAgRQAjgbAAgNQAAgEgDgCQgDgDgEAAQgMAAgNALIAAgWQAOgIANAAQAPAAAIAIQAHAHAAALQAAAKgHAKQgIALgJAJIAYAAIAAATg");
	this.shape.setTransform(43.8,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#262733").s().p("AghArIAAhVIAiAAQAQAAAJAIQAIAIAAAOQAAANgIAIQgJAIgQAAIgMAAIAAAagAgLAAIALAAQAGAAADgDQADgEAAgFQAAgFgDgEQgDgDgGAAIgLAAg");
	this.shape_1.setTransform(30.3,0);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#262733").s().p("AgLArQgFgBgFgDQgGgDgEgFQgEgFgCgIQgDgIAAgKQAAgKADgIQACgIAEgFQAEgEAGgDQAFgDAFgBIALgBIALABQAGABAFADQAGADAEAEQAEAFACAIQADAIAAAKQAAAKgDAIQgCAIgEAFQgEAFgGADQgFADgGABQgFABgGAAQgFAAgGgBgAgMgTQgFAGAAANQAAAOAFAFQAFAGAHAAQAIAAAFgGQAFgFAAgOQAAgNgFgGQgFgFgIAAQgHAAgFAFg");
	this.shape_2.setTransform(20.3,0);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#262733").s().p("AAOArIAAgiIgbAAIAAAiIgWAAIAAhVIAWAAIAAAiIAbAAIAAgiIAWAAIAABVg");
	this.shape_3.setTransform(10.1,0);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#262733").s().p("AgdAkIAAgVQAMAKAOAAIABAAQAEAAADgCQAEgCAAgDQAAgBAAAAQgBgBAAAAQAAgBAAAAQgBgBAAAAIgGgDIgHgCIgIgDQgFgBgDgDQgEgCgCgFQgCgFAAgGQAAgOAJgGQAJgHANAAQAMAAALAGIAAATQgKgGgKAAQgEAAgEACQgEABAAAEQAAABAAAAQABABAAAAQAAABABAAQAAABABAAQADACAEABIAJADQAFABAFADQAEADADAFQADAFAAAJQAAALgJAHQgJAHgNAAQgRAAgMgIg");
	this.shape_4.setTransform(0.9,0);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#262733").s().p("AALArIgVgiIgGAHIAAAbIgWAAIAAhVIAWAAIAAAeIAXgeIAeAAIgiAlIAkAwg");
	this.shape_5.setTransform(-8.1,0);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#262733").s().p("AALArIgPgdIgJAAIAAAdIgWAAIAAhVIAiAAQAPAAAJAHQAKAHAAAOQAAAKgFAGQgFAGgIADIAVAggAgNgCIANAAQAEAAADgDQADgDAAgFQAAgFgDgDQgDgDgEAAIgNAAg");
	this.shape_6.setTransform(-17.9,0);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#262733").s().p("AgLArQgFgBgFgDQgGgDgEgFQgEgFgCgIQgDgIAAgKQAAgKADgIQACgIAEgFQAEgEAGgDQAFgDAFgBIALgBIALABQAGABAFADQAGADAEAEQAEAFACAIQADAIAAAKQAAAKgDAIQgCAIgEAFQgEAFgGADQgFADgGABQgFABgGAAQgFAAgGgBgAgMgTQgFAGAAANQAAAOAFAFQAFAGAHAAQAIAAAFgGQAFgFAAgOQAAgNgFgGQgFgFgIAAQgHAAgFAFg");
	this.shape_7.setTransform(-28.1,0);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#262733").s().p("AAPArIgPgwIgOAwIgVAAIgbhVIAXAAIAPA1IAPg1IASAAIAQA1IAPg1IAWAAIgbBVg");
	this.shape_8.setTransform(-40.1,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer 3 copy
	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#3F3B4F").ss(3).p("AtRtRIAAajIajAAIAA6jg");

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AtRNSIAA6jIajAAIAAajg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9}]}).wait(1));

	// Layer 3
	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("rgba(255,255,255,0.008)").s().p("AwZQaMAAAggzMAgzAAAMAAAAgzg");
	this.shape_11.setTransform(0.2,0.2);

	this.timeline.addTween(cjs.Tween.get(this.shape_11).wait(1));

}).prototype = getMCSymbolPrototype(lib.SD31, new cjs.Rectangle(-104.8,-104.8,210.1,210), null);


(lib.SD25 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// DRAFT REPORT ON NATIONAL GMT IMPLICATIONS
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgQAYIAAgHQAGAFAJAAQANAAAAgJQAAgDgCgDQgCgCgEgBIgGgDIgHgBIgFgEQgCgDAAgEQgBgHAFgEQAFgEAIAAQAHAAAGADIAAAGQgGgEgGAAQgGAAgDADQgEACAAAFQAAACADACIAFADIAGACIAHACIAFAFQACADABAFQgBAHgFAEQgEADgJAAQgIAAgHgDg");
	this.shape.setTransform(29.8,86.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAQAbIgggsIAAAsIgFAAIAAg1IAGAAIAgAsIAAgsIAFAAIAAA1g");
	this.shape_1.setTransform(24.3,86.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgYAAQAAgaAYAAQAZAAAAAaQAAAbgZAAQgYAAAAgbgAgOgQQgEAGAAAKQAAALAEAGQAFAFAJAAQAKAAAEgFQAFgGAAgLQAAgKgFgGQgEgFgKAAQgJAAgFAFg");
	this.shape_2.setTransform(18,86.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgCAbIAAg1IAFAAIAAA1g");
	this.shape_3.setTransform(13.6,86.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgCAbIAAgvIgTAAIAAgGIArAAIAAAGIgTAAIAAAvg");
	this.shape_4.setTransform(10,86.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AASAbIgGgRIgWAAIgHARIgGAAIAVg1IAFAAIAVA1gAAJAFIgJgYIgIAYIARAAg");
	this.shape_5.setTransform(4.8,86.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAEAbQgYAAAAgbQAAgaAYAAQAJAAAIADIAAAFQgIgDgIAAQgJAAgFAFQgFAGAAAKQAAALAFAGQAFAFAJAAQAIAAAIgDIAAAFQgJADgHAAg");
	this.shape_6.setTransform(-0.6,86.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgCAbIAAg1IAFAAIAAA1g");
	this.shape_7.setTransform(-4.6,86.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgPAbIAAg1IAFAAIAAAvIAaAAIAAAGg");
	this.shape_8.setTransform(-7.7,86.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgSAbIAAg1IASAAQAJAAAFAFQAFAEAAAIQAAAIgFADQgFAEgJAAIgMAAIAAAVgAgMABIAMAAIAGgBIAFgCIABgDIABgEIgBgEIgBgEIgFgCIgGgBIgMAAg");
	this.shape_9.setTransform(-12.7,86.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AATAbIAAgrIgTAaIgSgaIAAArIgFAAIAAg1IAGAAIARAbIATgbIAFAAIAAA1g");
	this.shape_10.setTransform(-18.8,86.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgCAbIAAg1IAFAAIAAA1g");
	this.shape_11.setTransform(-23.3,86.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgCAbIAAgvIgTAAIAAgGIArAAIAAAGIgTAAIAAAvg");
	this.shape_12.setTransform(32.5,75.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AATAbIAAgrIgTAaIgSgaIAAArIgFAAIAAg1IAGAAIARAbIATgbIAFAAIAAA1g");
	this.shape_13.setTransform(26.7,75.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgVAAQABgaAXAAQAJAAAIADIAAAGQgIgEgJAAQgJAAgEAFQgFAGAAAKQAAALAFAGQAEAFAJAAQAHAAAGgCIAAgRIgNAAIAAgEIASAAIAAAYQgIAEgKAAQgXAAgBgbg");
	this.shape_14.setTransform(20.4,75.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgQAbIAAg1IAGAAIAAAvIAaAAIAAAGg");
	this.shape_15.setTransform(12.4,75.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AASAbIgGgRIgWAAIgHARIgGAAIAVg1IAFAAIAVA1gAAJAFIgJgYIgIAYIARAAg");
	this.shape_16.setTransform(7.1,75.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AAQAbIgggsIAAAsIgFAAIAAg1IAGAAIAgAsIAAgsIAFAAIAAA1g");
	this.shape_17.setTransform(1.2,75.9);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgYAAQAAgaAYAAQAZAAAAAaQAAAbgZAAQgYAAAAgbgAgOgQQgEAGAAAKQAAALAEAGQAFAFAJAAQAKAAAEgFQAFgGAAgLQAAgKgFgGQgEgFgKAAQgJAAgFAFg");
	this.shape_18.setTransform(-5.1,75.9);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgCAbIAAg1IAFAAIAAA1g");
	this.shape_19.setTransform(-9.4,75.9);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgCAbIAAgvIgTAAIAAgGIArAAIAAAGIgTAAIAAAvg");
	this.shape_20.setTransform(-13,75.9);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AASAbIgGgRIgWAAIgHARIgGAAIAVg1IAFAAIAVA1gAAJAFIgJgYIgIAYIARAAg");
	this.shape_21.setTransform(-18.3,75.9);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AAQAbIgggsIAAAsIgFAAIAAg1IAGAAIAfAsIAAgsIAGAAIAAA1g");
	this.shape_22.setTransform(-24.1,75.9);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AAQAbIgggsIAAAsIgFAAIAAg1IAGAAIAgAsIAAgsIAFAAIAAA1g");
	this.shape_23.setTransform(39.2,64.9);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgYAAQAAgaAYAAQAZAAAAAaQAAAbgZAAQgYAAAAgbgAgOgQQgEAGAAAKQAAALAEAGQAFAFAJAAQAKAAAEgFQAFgGAAgLQAAgKgFgGQgEgFgKAAQgJAAgFAFg");
	this.shape_24.setTransform(32.9,64.9);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgCAbIAAgvIgTAAIAAgGIArAAIAAAGIgTAAIAAAvg");
	this.shape_25.setTransform(24.2,64.9);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AANAbIgNgWIgOAAIAAAWIgFAAIAAg1IATAAQAJAAAEAEQAEAEABAIIgBAGIgDAEIgDACIgDACIgCAAIAOAXgAgOAAIAOAAIAGAAIAEgDIABgDIABgEIgBgDIgBgEIgEgCIgGgBIgOAAg");
	this.shape_26.setTransform(19.3,64.9);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgYAAQAAgaAYAAQAZAAAAAaQAAAbgZAAQgYAAAAgbgAgOgQQgEAGAAAKQAAALAEAGQAFAFAJAAQAKAAAEgFQAFgGAAgLQAAgKgFgGQgEgFgKAAQgJAAgFAFg");
	this.shape_27.setTransform(13.2,64.9);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgSAbIAAg1IASAAQAJAAAFAFQAFAEAAAIQAAAIgFADQgFAEgJAAIgMAAIAAAVgAgMABIAMAAIAGgBIAFgCIABgDIABgEIgBgEIgBgEIgFgCIgGgBIgMAAg");
	this.shape_28.setTransform(7.7,64.9);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgQAbIAAg1IAhAAIAAAGIgbAAIAAASIAYAAIAAAFIgYAAIAAASIAbAAIAAAGg");
	this.shape_29.setTransform(2.6,64.9);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AANAbIgNgWIgNAAIAAAWIgGAAIAAg1IATAAQAJAAAEAEQAFAEgBAIIgBAGIgCAEIgDACIgEACIgBAAIAOAXgAgNAAIANAAIAGAAIAEgDIACgDIAAgEIAAgDIgCgEIgEgCIgGgBIgNAAg");
	this.shape_30.setTransform(-2.4,64.9);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgCAbIAAgvIgTAAIAAgGIArAAIAAAGIgTAAIAAAvg");
	this.shape_31.setTransform(-10.9,64.9);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AgPAbIAAg1IAfAAIAAAGIgaAAIAAASIAXAAIAAAFIgXAAIAAAYg");
	this.shape_32.setTransform(-15.5,64.9);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AASAbIgGgRIgWAAIgHARIgGAAIAVg1IAFAAIAVA1gAAJAFIgJgYIgIAYIARAAg");
	this.shape_33.setTransform(-20.8,64.9);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AANAbIgNgWIgOAAIAAAWIgFAAIAAg1IATAAQAIAAAFAEQAFAEAAAIIgCAGIgCAEIgDACIgEACIgCAAIAPAXgAgOAAIAOAAIAGAAIAEgDIACgDIAAgEIAAgDIgCgEIgEgCIgGgBIgOAAg");
	this.shape_34.setTransform(-26,64.9);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AgUAbIAAg1IAQAAQAZAAAAAaQAAAbgZAAgAgPAVIALAAQAKAAAEgFQAFgFAAgLQAAgKgFgFQgEgFgKAAIgLAAg");
	this.shape_35.setTransform(-31.6,64.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer 3
	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#2FB7AA").s().p("AnKC/IAAl9IOVAAIAAF9g");
	this.shape_36.setTransform(4.1,75.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_36).wait(1));

	// Layer 4
	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#262733").s().p("AgDAhIAAg7IgXAAIAAgGIA1AAIAAAGIgXAAIAAA7g");
	this.shape_37.setTransform(57.2,13.5);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#262733").s().p("AARAhIgRgbIgRAAIAAAbIgHAAIAAhBIAaAAQAKAAAFAFQAFAEAAAKQAAAHgEAGQgFAEgGACIASAbgAgRAAIARAAQAHAAAEgDQAEgDAAgGQAAgHgDgDQgDgEgIAAIgSAAg");
	this.shape_38.setTransform(51,13.5);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#262733").s().p("AgVAaQgIgJAAgRQAAgQAIgJQAHgIAOAAQAPAAAIAIQAHAJAAAQQAAARgHAJQgIAIgPAAQgOAAgHgIgAgQgUQgGAGABAOQgBAPAGAGQAFAHALAAQALAAAGgHQAFgHABgOQgBgNgFgHQgFgGgMAAQgLAAgFAGg");
	this.shape_39.setTransform(43.6,13.5);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#262733").s().p("AgXAhIAAhBIAXAAQAMAAAGAFQAFAFABAKQgBAKgFAFQgGAFgMAAIgPAAIAAAZgAgPABIAPAAQAKAAADgDQADgEABgGQgBgFgDgFQgDgDgKAAIgPAAg");
	this.shape_40.setTransform(36.5,13.5);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#262733").s().p("AgUAhIAAhBIApAAIAAAGIghAAIAAAXIAdAAIAAAGIgdAAIAAAYIAhAAIAAAGg");
	this.shape_41.setTransform(30,13.5);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#262733").s().p("AARAhIgRgbIgRAAIAAAbIgHAAIAAhBIAaAAQALAAAEAFQAFAEAAAKQAAAHgEAGQgEAEgHACIASAbgAgRAAIARAAQAIAAADgDQAEgDAAgGQAAgHgDgDQgDgEgIAAIgSAAg");
	this.shape_42.setTransform(23.6,13.5);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#262733").s().p("AgCAhIAAg7IgYAAIAAgGIA1AAIAAAGIgXAAIAAA7g");
	this.shape_43.setTransform(13.4,13.5);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#262733").s().p("AgTAhIAAhBIAnAAIAAAGIggAAIAAAXIAcAAIAAAGIgcAAIAAAeg");
	this.shape_44.setTransform(7.5,13.5);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#262733").s().p("AAWAhIgIgUIgbAAIgIAUIgIAAIAahBIAHAAIAaBBgAgLAGIAXAAIgMgeg");
	this.shape_45.setTransform(0.9,13.5);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#262733").s().p("AARAhIgRgbIgRAAIAAAbIgHAAIAAhBIAaAAQAKAAAFAFQAFAEAAAKQAAAHgEAGQgEAEgHACIASAbgAgRAAIARAAQAHAAAEgDQAEgDAAgGQAAgHgDgDQgDgEgIAAIgSAAg");
	this.shape_46.setTransform(-5.8,13.5);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#262733").s().p("AgZAhIAAhBIAVAAQAPAAAHAIQAIAIAAAQQAAAhgeAAgAgSAbIANAAQALAAAHgHQAGgGAAgOQAAgNgGgGQgGgHgMAAIgNAAg");
	this.shape_47.setTransform(-12.9,13.5);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#262733").s().p("AgUAhIAAhBIApAAIAAAGIgiAAIAAAXIAeAAIAAAGIgeAAIAAAYIAiAAIAAAGg");
	this.shape_48.setTransform(-23.1,13.5);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#262733").s().p("AgCAhIAAg7IgYAAIAAgGIA1AAIAAAGIgXAAIAAA7g");
	this.shape_49.setTransform(-29.4,13.5);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#262733").s().p("AgDAhIAAhBIAHAAIAABBg");
	this.shape_50.setTransform(-34.1,13.5);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#262733").s().p("AARAhIgRgbIgRAAIAAAbIgHAAIAAhBIAaAAQALAAAEAFQAFAEAAAKQAAAHgEAGQgDAEgIACIASAbgAgRAAIARAAQAHAAAEgDQAEgDAAgGQAAgHgDgDQgEgEgHAAIgSAAg");
	this.shape_51.setTransform(-38.7,13.5);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#262733").s().p("AARAhIgRg2IgRA2IgHAAIgVhBIAHAAIASA4IARg4IAHAAIARA4IASg4IAHAAIgVBBg");
	this.shape_52.setTransform(-47.5,13.5);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#2FB7AA").s().p("AgHAIQgEgDABgFQgBgEAEgDQADgEAEAAQAEAAAEAEQAEADgBAEQABAFgEADQgEAEgEAAQgEAAgDgEg");
	this.shape_53.setTransform(-58.3,13.5);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#262733").s().p("AgmArIAAhVIAjAAQAVAAAKAKQALAMAAAUQAAAWgLAKQgKALgVAAgAgRAbIALAAQALAAAGgHQAGgGAAgOQAAgNgGgHQgGgGgLAAIgLAAg");
	this.shape_54.setTransform(45.8,-9.5);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#262733").s().p("AAWArIgHgSIgfAAIgGASIgUAAIAghVIAWAAIAfBVgAgLAJIAVAAIgKggg");
	this.shape_55.setTransform(35.8,-9.5);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#262733").s().p("AgdArIAAhVIA7AAIAAAQIgmAAIAAATIAgAAIAAAPIggAAIAAATIAmAAIAAAQg");
	this.shape_56.setTransform(26.9,-9.5);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#262733").s().p("AgcArIAAhVIAVAAIAABFIAkAAIAAAQg");
	this.shape_57.setTransform(19,-9.5);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#262733").s().p("AgKArIAAhFIgYAAIAAgQIBFAAIAAAQIgYAAIAABFg");
	this.shape_58.setTransform(6.4,-9.5);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#262733").s().p("AgiAAQAAgsApAAQAOAAAOAGIAAASQgNgIgLAAQgLAAgGAHQgHAHABAOQgBAQAHAGQAGAHAMAAIALgCQAHgDAFgDIAAASQgFADgIABIgPACQgpAAAAgtg");
	this.shape_59.setTransform(-2.2,-9.5);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#262733").s().p("AgdArIAAhVIA7AAIAAAQIgmAAIAAATIAhAAIAAAPIghAAIAAATIAmAAIAAAQg");
	this.shape_60.setTransform(-10.7,-9.5);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#262733").s().p("AgXAnIAAgTIAJAFQACACAEAAQALAAAAgMIAAg6IAVAAIAAA7QAAAPgIAGQgIAHgLAAQgJAAgLgFg");
	this.shape_61.setTransform(-18.6,-9.4);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#262733").s().p("AgeAiQgLgLAAgXQAAgVALgMQALgLATAAQAUAAALALQALALAAAWQAAAWgLAMQgKALgVAAQgTAAgLgLgAgOgUQgGAGAAAOQAAAPAGAGQAEAHAKAAQAKAAAFgHQAGgGAAgPQAAgOgFgGQgFgHgLAAQgKAAgEAHg");
	this.shape_62.setTransform(-26.9,-9.5);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#262733").s().p("AAMArIgQgeIgNAAIAAAeIgVAAIAAhVIApAAQAPAAAJAGQAIAIAAANQAAAHgFAIQgFAHgIACIAWAigAgRgBIARAAQAMAAAAgNQAAgFgDgEQgCgDgGAAIgSAAg");
	this.shape_63.setTransform(-36.4,-9.5);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#262733").s().p("AgjArIAAhVIAmAAQARAAAHAHQAJAHAAAOQAAAOgJAHQgJAIgPAAIgRAAIAAAcgAgOAAIAPAAQAFAAAEgEQADgDAAgGQAAgNgMAAIgPAAg");
	this.shape_64.setTransform(-46,-9.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37}]}).wait(1));

	// Layer 5 copy
	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f().s("#3F3B4F").ss(3).p("AtRtRIAAajIajAAIAA6jg");
	this.shape_65.setTransform(0,-9.5);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#FFFFFF").s().p("AtRNSIAA6jIajAAIAAajg");
	this.shape_66.setTransform(0,-9.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_66},{t:this.shape_65}]}).wait(1));

	// Layer 5
	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#FFFFFF").s().p("AtRNSIAA6jIajAAIAAajg");
	this.shape_67.setTransform(-0.3,-9.9,1.412,1.412);

	this.timeline.addTween(cjs.Tween.get(this.shape_67).wait(1));

}).prototype = getMCSymbolPrototype(lib.SD25, new cjs.Rectangle(-120.3,-129.8,240,240), null);


(lib.SD24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// CONSOLIDATED TABLE ON AVAILABLE INFORMATION
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAPAbIgegsIAAAsIgGAAIAAg1IAHAAIAeAsIAAgsIAGAAIAAA1g");
	this.shape.setTransform(49.6,80.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgYAAQAAgaAYAAQAZAAAAAaQAAAbgZAAQgYAAAAgbgAgOgQQgEAGAAAKQAAALAEAGQAFAFAJAAQAKAAAEgFQAFgGAAgLQAAgKgFgGQgEgFgKAAQgJAAgFAFg");
	this.shape_1.setTransform(43.3,80.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgCAbIAAg1IAFAAIAAA1g");
	this.shape_2.setTransform(39,80.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgCAbIAAgvIgTAAIAAgGIArAAIAAAGIgTAAIAAAvg");
	this.shape_3.setTransform(35.4,80.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AASAbIgGgRIgWAAIgHARIgGAAIAVg1IAFAAIAVA1gAAJAFIgJgYIgIAYIARAAg");
	this.shape_4.setTransform(30.1,80.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AATAbIAAgrIgTAaIgSgaIAAArIgGAAIAAg1IAGAAIASAbIASgbIAHAAIAAA1g");
	this.shape_5.setTransform(24,80.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AANAbIgNgWIgOAAIAAAWIgFAAIAAg1IATAAQAIAAAFAEQAFAEAAAIIgBAGIgDAEIgDACIgDACIgDAAIAPAXgAgOAAIAOAAIAGAAIAEgDIACgDIAAgEIAAgDIgCgEIgEgCIgGgBIgOAAg");
	this.shape_6.setTransform(18.2,80.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgYAAQAAgaAYAAQAZAAAAAaQAAAbgZAAQgYAAAAgbgAgOgQQgEAGAAAKQAAALAEAGQAFAFAJAAQAKAAAEgFQAFgGAAgLQAAgKgFgGQgEgFgKAAQgJAAgFAFg");
	this.shape_7.setTransform(12.1,80.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgPAbIAAg1IAfAAIAAAGIgaAAIAAASIAXAAIAAAFIgXAAIAAAYg");
	this.shape_8.setTransform(6.8,80.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAQAbIgggsIAAAsIgFAAIAAg1IAGAAIAgAsIAAgsIAFAAIAAA1g");
	this.shape_9.setTransform(1.2,80.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgCAbIAAg1IAFAAIAAA1g");
	this.shape_10.setTransform(-3.1,80.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgQAbIAAg1IAhAAIAAAGIgbAAIAAASIAYAAIAAAFIgYAAIAAASIAbAAIAAAGg");
	this.shape_11.setTransform(-9.7,80.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgQAbIAAg1IAGAAIAAAvIAaAAIAAAGg");
	this.shape_12.setTransform(-14.2,80.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgSAbIAAg1IARAAQARAAAAAPIAAAEIgCADIgCACIgBABIgBAAIABABIADAAIACACIACAEIABAGQAAAPgTAAgAgNAVIANAAQAHAAADgCQAEgCAAgGIgBgEIgCgDIgDgBIgEgBIgEAAIgNAAgAgNgCIANAAQAFAAACgCQADgCAAgFQAAgFgCgCQgDgCgFAAIgNAAg");
	this.shape_13.setTransform(-19.3,80.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AASAbIgGgRIgWAAIgHARIgGAAIAVg1IAFAAIAVA1gAAJAFIgJgYIgIAYIARAAg");
	this.shape_14.setTransform(-24.9,80.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgPAbIAAg1IAFAAIAAAvIAaAAIAAAGg");
	this.shape_15.setTransform(-29.7,80.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgCAbIAAg1IAFAAIAAA1g");
	this.shape_16.setTransform(-33.4,80.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AASAbIgGgRIgWAAIgHARIgGAAIAVg1IAFAAIAVA1gAAJAFIgJgYIgIAYIARAAg");
	this.shape_17.setTransform(-37.4,80.9);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgCAbIgUg1IAGAAIAQAtIARgtIAGAAIgUA1g");
	this.shape_18.setTransform(-42.8,80.9);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AASAbIgGgRIgWAAIgHARIgGAAIAVg1IAFAAIAVA1gAAJAFIgJgYIgIAYIARAAg");
	this.shape_19.setTransform(-48.2,80.9);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AAQAbIgggsIAAAsIgFAAIAAg1IAGAAIAgAsIAAgsIAFAAIAAA1g");
	this.shape_20.setTransform(51.3,69.9);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgYAAQAAgaAYAAQAZAAAAAaQAAAbgZAAQgYAAAAgbgAgOgQQgEAGAAAKQAAALAEAGQAFAFAJAAQAKAAAEgFQAFgGAAgLQAAgKgFgGQgEgFgKAAQgJAAgFAFg");
	this.shape_21.setTransform(45,69.9);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgQAbIAAg1IAhAAIAAAGIgbAAIAAASIAYAAIAAAFIgYAAIAAASIAbAAIAAAGg");
	this.shape_22.setTransform(36.4,69.9);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgQAbIAAg1IAGAAIAAAvIAbAAIAAAGg");
	this.shape_23.setTransform(31.8,69.9);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgSAbIAAg1IARAAQARAAAAAPIAAAEIgCADIgCACIgBABIgBAAIABABIADAAIACACIACAEIABAGQAAAPgTAAgAgNAVIANAAQAHAAADgCQAEgCAAgGIgBgEIgCgDIgDgBIgEgBIgEAAIgNAAgAgNgCIANAAQAFAAACgCQADgCAAgFQAAgFgCgCQgDgCgFAAIgNAAg");
	this.shape_24.setTransform(26.7,69.9);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AASAbIgGgRIgWAAIgHARIgGAAIAVg1IAFAAIAVA1gAAJAFIgJgYIgIAYIARAAg");
	this.shape_25.setTransform(21.1,69.9);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgCAbIAAgvIgTAAIAAgGIArAAIAAAGIgTAAIAAAvg");
	this.shape_26.setTransform(15.9,69.9);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgUAbIAAg1IAQAAQAZAAAAAaQAAAbgZAAgAgPAVIALAAQAJAAAFgFQAFgFAAgLQAAgKgFgFQgFgFgJAAIgLAAg");
	this.shape_27.setTransform(7.6,69.9);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgQAbIAAg1IAhAAIAAAGIgbAAIAAASIAYAAIAAAFIgYAAIAAASIAbAAIAAAGg");
	this.shape_28.setTransform(2.3,69.9);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgCAbIAAgvIgTAAIAAgGIArAAIAAAGIgTAAIAAAvg");
	this.shape_29.setTransform(-2.7,69.9);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AASAbIgGgRIgWAAIgHARIgGAAIAVg1IAFAAIAVA1gAAJAFIgJgYIgIAYIARAAg");
	this.shape_30.setTransform(-8,69.9);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgUAbIAAg1IAQAAQAZAAAAAaQAAAbgZAAgAgOAVIAKAAQAKAAAEgFQAFgFAAgLQAAgKgFgFQgEgFgKAAIgKAAg");
	this.shape_31.setTransform(-13.5,69.9);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AgCAbIAAg1IAFAAIAAA1g");
	this.shape_32.setTransform(-17.7,69.9);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AgQAbIAAg1IAGAAIAAAvIAbAAIAAAGg");
	this.shape_33.setTransform(-20.8,69.9);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AgYAAQAAgaAYAAQAZAAAAAaQAAAbgZAAQgYAAAAgbgAgOgQQgEAGAAAKQAAALAEAGQAFAFAJAAQAKAAAEgFQAFgGAAgLQAAgKgFgGQgEgFgKAAQgJAAgFAFg");
	this.shape_34.setTransform(-26.6,69.9);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AgQAYIAAgHQAGAFAJAAQANAAAAgJQAAgDgDgDQgCgCgDgBIgGgDIgHgBIgFgEQgDgDAAgEQAAgHAFgEQAFgEAIAAQAGAAAHADIAAAGQgGgEgHAAQgFAAgEADQgDACAAAFQAAACACACIAGADIAGACIAHACIAFAFQACADAAAFQAAAHgEAEQgGADgIAAQgIAAgHgDg");
	this.shape_35.setTransform(-32.1,69.9);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AAPAbIgegsIAAAsIgGAAIAAg1IAHAAIAeAsIAAgsIAGAAIAAA1g");
	this.shape_36.setTransform(-37.7,69.9);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AgYAAQAAgaAYAAQAZAAAAAaQAAAbgZAAQgYAAAAgbgAgOgQQgEAGAAAKQAAALAEAGQAFAFAJAAQAKAAAEgFQAFgGAAgLQAAgKgFgGQgEgFgKAAQgJAAgFAFg");
	this.shape_37.setTransform(-44,69.9);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AAEAbQgYAAABgbQgBgaAYAAQAJAAAHADIAAAFQgHgDgIAAQgKAAgEAFQgFAGAAAKQAAALAFAGQAEAFAKAAQAIAAAHgDIAAAFQgIADgHAAg");
	this.shape_38.setTransform(-49.8,69.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer 3
	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#2FB7AA").s().p("Ap7C/IAAl9IT3AAIAAF9g");
	this.shape_39.setTransform(1.1,75.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_39).wait(1));

	// Layer 4
	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#262733").s().p("AgLAhIgKgEIAAgIQAFAEAEABQAGACAGAAQAIAAADgDQADgDAAgGQAAgDgCgDIgFgEIgSgHQgDgBgCgEQgDgDAAgHQAAgFACgDQABgDAFgEQAGgCAFAAIAJABIAJADIAAAIIgEgCIgGgDIgHgBQgHAAgCADQgEADAAAEQAAAFACACIAEAEIASAGQAEACADAEQADAEgBAGQAAAIgEAFQgFAFgMAAQgIAAgDgBg");
	this.shape_40.setTransform(48.8,8.4);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#262733").s().p("AgZAhIAAhBIAVAAQAPAAAHAIQAIAIAAAQQAAAhgeAAgAgSAbIAOAAQALAAAGgHQAGgGAAgOQAAgMgGgHQgGgHgLAAIgOAAg");
	this.shape_41.setTransform(42.3,8.4);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#262733").s().p("AgUAhIAAhBIAIAAIAAA6IAhAAIAAAHg");
	this.shape_42.setTransform(36,8.4);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#262733").s().p("AgUAhIAAhBIApAAIAAAHIgiAAIAAAXIAeAAIAAAGIgeAAIAAAXIAiAAIAAAGg");
	this.shape_43.setTransform(29.8,8.4);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#262733").s().p("AgDAhIAAhBIAHAAIAABBg");
	this.shape_44.setTransform(25.1,8.4);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#262733").s().p("AgUAhIAAhBIApAAIAAAHIgiAAIAAAXIAdAAIAAAGIgdAAIAAAdg");
	this.shape_45.setTransform(20.9,8.4);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#262733").s().p("AgDAhIAAg6IgXAAIAAgHIA1AAIAAAHIgXAAIAAA6g");
	this.shape_46.setTransform(11.2,8.4);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#262733").s().p("AAUAhIgog3IAAA3IgGAAIAAhBIAHAAIAoA3IAAg3IAHAAIAABBg");
	this.shape_47.setTransform(4.2,8.4);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#262733").s().p("AAWAhIgIgUIgbAAIgIAUIgIAAIAahBIAHAAIAaBBgAgLAGIAXAAIgMgeg");
	this.shape_48.setTransform(-3.2,8.4);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#262733").s().p("AgCAhIgahBIAIAAIAUA4IAVg4IAIAAIgaBBg");
	this.shape_49.setTransform(-9.5,8.4);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#262733").s().p("AgUAhIAAhBIApAAIAAAHIgiAAIAAAXIAeAAIAAAGIgeAAIAAAXIAiAAIAAAGg");
	this.shape_50.setTransform(-16,8.4);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#262733").s().p("AgTAhIAAhBIAGAAIAAA6IAhAAIAAAHg");
	this.shape_51.setTransform(-21.7,8.4);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#262733").s().p("AgUAhIAAhBIApAAIAAAHIgiAAIAAAXIAdAAIAAAGIgdAAIAAAXIAiAAIAAAGg");
	this.shape_52.setTransform(-28,8.4);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#262733").s().p("AARAhIgRgaIgRAAIAAAaIgHAAIAAhBIAaAAQAKAAAFAFQAFAFAAAJQAAAIgEAFQgEAEgHACIASAbgAgRAAIARAAQAIAAADgDQAEgDAAgGQAAgGgDgEQgDgDgHAAIgTAAg");
	this.shape_53.setTransform(-34.4,8.4);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#262733").s().p("AATAhIgmg3IAAA3IgIAAIAAhBIAIAAIAnA3IAAg3IAHAAIAABBg");
	this.shape_54.setTransform(-45.3,8.4);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#262733").s().p("AgCAhIAAhBIAGAAIAABBg");
	this.shape_55.setTransform(-50.6,8.4);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#262733").s().p("AgLAhIgKgEIAAgIQAEADAFACQAFACAHAAQAHAAAEgDQADgDAAgGQAAgEgCgCIgFgEIgSgHQgDgBgDgEQgDgEAAgGQAAgFADgDQACgEAEgDQAFgCAGAAIAJABIAJADIAAAIIgKgFIgHgBQgGAAgEADQgDADAAAEQAAAFABACIAFAEIASAGQADABAEAFQACAEAAAGQAAAHgFAGQgFAFgLAAIgLgBg");
	this.shape_56.setTransform(48.8,-3.6);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#262733").s().p("AgDAhIAAg6IgXAAIAAgHIA1AAIAAAHIgXAAIAAA6g");
	this.shape_57.setTransform(42.6,-3.6);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#262733").s().p("AAQAhIgQgaIgRAAIAAAaIgHAAIAAhBIAbAAQAJAAAFAFQAFAEAAAKQAAAIgEAFQgEAEgHACIASAbgAgRAAIARAAQAHAAAEgDQAEgDAAgGQAAgGgDgEQgDgDgHAAIgTAAg");
	this.shape_58.setTransform(36.4,-3.6);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#262733").s().p("AgUAhIAAhBIApAAIAAAHIgiAAIAAAXIAeAAIAAAGIgeAAIAAAXIAiAAIAAAGg");
	this.shape_59.setTransform(29.7,-3.6);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#262733").s().p("AgXAhIAAhBIAXAAQALAAAHAFQAFAGAAAJQAAALgFAEQgGAFgMAAIgQAAIAAAZgAgQABIAQAAQAKAAACgDQAEgDAAgHQAAgGgEgEQgDgDgJAAIgQAAg");
	this.shape_60.setTransform(23.3,-3.6);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#262733").s().p("AATAhIgTgbIgSAbIgJAAIAXghIgWggIAIAAIASAbIATgbIAIAAIgXAgIAYAhg");
	this.shape_61.setTransform(16.6,-3.6);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#262733").s().p("AgUAhIAAhBIApAAIAAAHIgiAAIAAAXIAeAAIAAAGIgeAAIAAAXIAiAAIAAAGg");
	this.shape_62.setTransform(10.3,-3.6);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#262733").s().p("AgCAhIAAg6IgYAAIAAgHIA1AAIAAAHIgXAAIAAA6g");
	this.shape_63.setTransform(0.5,-3.6);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#262733").s().p("AgQAaQgJgJABgRQgBgQAJgJQAHgIAOAAQAKAAALAFIAAAHQgJgFgLAAQgMAAgFAGQgGAHAAANQAAAOAFAHQAHAGALAAQAMAAAIgEIAAAGQgKAFgLAAQgOAAgHgIg");
	this.shape_64.setTransform(-6,-3.6);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#262733").s().p("AAXAhIgIgUIgcAAIgIAUIgIAAIAbhBIAGAAIAaBBgAgLAGIAXAAIgMgeg");
	this.shape_65.setTransform(-12.7,-3.6);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#262733").s().p("AgDAhIAAg6IgXAAIAAgHIA1AAIAAAHIgYAAIAAA6g");
	this.shape_66.setTransform(-18.7,-3.6);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#262733").s().p("AAUAhIgng3IAAA3IgIAAIAAhBIAJAAIAmA3IAAg3IAIAAIAABBg");
	this.shape_67.setTransform(-25.7,-3.6);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#262733").s().p("AgVAaQgIgIAAgSQAAgQAIgIQAHgJAOAAQAPAAAHAJQAIAIAAAQQAAASgIAIQgHAIgPAAQgOAAgHgIgAgQgUQgGAHAAANQAAAOAGAHQAFAHALAAQAMAAAFgHQAGgHAAgOQAAgNgGgHQgFgGgMAAQgLAAgFAGg");
	this.shape_68.setTransform(-33.4,-3.6);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#262733").s().p("AgRAaQgIgJAAgRQAAgQAIgJQAIgIAOAAQAJAAAMAFIAAAHQgKgFgKAAQgLAAgGAGQgGAHAAANQAAAPAGAGQAFAGAMAAQALAAAJgEIAAAGQgKAFgLAAQgOAAgIgIg");
	this.shape_69.setTransform(-40.6,-3.6);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#2FB7AA").s().p("AgHAIQgEgDAAgFQAAgEAEgEQAEgCADgBQAFABAEACQACAEAAAEQAAAFgCADQgEAEgFAAQgDAAgEgEg");
	this.shape_70.setTransform(-49.7,-3.5);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#262733").s().p("AgmArIAAhVIAjAAQAVAAAKALQALAKAAAVQAAAWgLALQgKAKgVAAgAgRAbIAMAAQAKAAAGgGQAGgHAAgOQAAgNgGgGQgGgHgKAAIgMAAg");
	this.shape_71.setTransform(45.8,-26.6);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#262733").s().p("AAWArIgHgSIgfAAIgGASIgUAAIAhhVIAWAAIAeBVgAgLAJIAVAAIgKgfg");
	this.shape_72.setTransform(35.8,-26.6);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#262733").s().p("AgdArIAAhVIA7AAIAAAQIgmAAIAAATIAhAAIAAAPIghAAIAAATIAmAAIAAAQg");
	this.shape_73.setTransform(26.9,-26.6);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#262733").s().p("AgcArIAAhVIAVAAIAABFIAkAAIAAAQg");
	this.shape_74.setTransform(19,-26.6);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#262733").s().p("AgKArIAAhFIgYAAIAAgQIBFAAIAAAQIgYAAIAABFg");
	this.shape_75.setTransform(6.4,-26.6);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#262733").s().p("AgiAAQAAgsApAAQAOAAAOAGIAAATQgLgJgNAAQgMAAgFAHQgHAHAAAOQAAAQAHAGQAGAHAMAAQAFAAAGgCQAGgCAGgEIAAASQgHADgGABQgGACgJAAQgpAAAAgtg");
	this.shape_76.setTransform(-2.2,-26.6);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#262733").s().p("AgdArIAAhVIA7AAIAAAQIgmAAIAAATIAhAAIAAAPIghAAIAAATIAmAAIAAAQg");
	this.shape_77.setTransform(-10.7,-26.6);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#262733").s().p("AgXAnIAAgTIAIAGQADABAEAAQALAAAAgMIAAg6IAVAAIAAA7QAAAPgIAHQgIAGgLAAQgKAAgKgFg");
	this.shape_78.setTransform(-18.6,-26.5);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#262733").s().p("AgeAhQgLgLAAgWQAAgVALgMQALgLATAAQAUAAALALQALALAAAWQAAAXgLAKQgKAMgVAAQgUAAgKgMgAgOgVQgFAHAAAOQAAAPAFAGQAFAHAJAAQAKAAAGgHQAFgGAAgPQAAgPgFgGQgFgGgLAAQgJAAgFAGg");
	this.shape_79.setTransform(-26.9,-26.5);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#262733").s().p("AAMArIgQgdIgNAAIAAAdIgVAAIAAhVIApAAQAPAAAIAHQAJAHgBANQAAAJgEAGQgEAHgKADIAXAhgAgRgBIARAAQALAAABgNQgBgFgCgEQgDgDgFAAIgSAAg");
	this.shape_80.setTransform(-36.3,-26.6);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#262733").s().p("AgjArIAAhVIAmAAQAQAAAIAHQAJAGAAAPQAAAOgJAHQgJAIgPAAIgRAAIAAAcgAgOAAIAPAAQAGAAADgEQADgDAAgGQAAgNgMAAIgPAAg");
	this.shape_81.setTransform(-46,-26.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40}]}).wait(1));

	// Layer 5 copy
	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f().s("#3F3B4F").ss(3).p("AtRtRIAAajIajAAIAA6jg");
	this.shape_82.setTransform(0,-9.5);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#FFFFFF").s().p("AtRNSIAA6jIajAAIAAajg");
	this.shape_83.setTransform(0,-9.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_83},{t:this.shape_82}]}).wait(1));

	// Layer 5
	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#FFFFFF").s().p("AtRNSIAA6jIajAAIAAajg");
	this.shape_84.setTransform(-0.3,-9.9,1.412,1.412);

	this.timeline.addTween(cjs.Tween.get(this.shape_84).wait(1));

}).prototype = getMCSymbolPrototype(lib.SD24, new cjs.Rectangle(-120.3,-129.8,240,240), null);


(lib.SD23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// INVITATION
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAPAbIgegsIAAAsIgGAAIAAg1IAHAAIAeAsIAAgsIAGAAIAAA1g");
	this.shape.setTransform(70.2,74.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgYAAQAAgaAYAAQAZAAAAAaQAAAbgZAAQgYAAAAgbgAgOgQQgEAGAAAKQAAALAEAGQAFAFAJAAQAKAAAEgFQAFgGAAgLQAAgKgFgGQgEgFgKAAQgJAAgFAFg");
	this.shape_1.setTransform(63.9,74.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgCAbIAAg1IAFAAIAAA1g");
	this.shape_2.setTransform(59.6,74.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgCAbIAAgvIgTAAIAAgGIArAAIAAAGIgTAAIAAAvg");
	this.shape_3.setTransform(56,74.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AASAbIgGgRIgWAAIgHARIgGAAIAVg1IAFAAIAVA1gAAJAFIgJgYIgIAYIARAAg");
	this.shape_4.setTransform(50.7,74.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgCAbIAAgvIgTAAIAAgGIArAAIAAAGIgTAAIAAAvg");
	this.shape_5.setTransform(45.5,74.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgCAbIAAg1IAFAAIAAA1g");
	this.shape_6.setTransform(41.9,74.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgCAbIgUg1IAGAAIAQAtIARgtIAGAAIgUA1g");
	this.shape_7.setTransform(38.1,74.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAQAbIgggsIAAAsIgFAAIAAg1IAGAAIAgAsIAAgsIAFAAIAAA1g");
	this.shape_8.setTransform(32.4,74.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgCAbIAAg1IAFAAIAAA1g");
	this.shape_9.setTransform(28.1,74.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer 3
	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#2FB7AA").s().p("AmGDAIAAl/IMNAAIAAF/g");
	this.shape_10.setTransform(50.3,75.4);

	this.timeline.addTween(cjs.Tween.get(this.shape_10).wait(1));

	// Layer 4
	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#262733").s().p("AgKAhIgLgEIAAgIIAJAFIAMACQAGAAAFgEQADgDAAgEQAAgEgCgDIgEgEIgIgEQgHgCgDgBQgEgCgCgDQgDgEAAgGQAAgEACgEQACgFAFgCQAEgCAHAAIAIABIAJADIAAAIIgEgCIgGgDIgHAAQgHAAgCACQgEADAAAFQAAACACADIAEAFIAIADIAKADQAEACADAEQADADgBAGQAAAJgEAFQgGAGgLAAQgGAAgEgCg");
	this.shape_11.setTransform(66.1,13.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#262733").s().p("AATAhIgmg3IAAA3IgIAAIAAhBIAIAAIAnA3IAAg3IAHAAIAABBg");
	this.shape_12.setTransform(59.2,13.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#262733").s().p("AgWAZQgHgIAAgRQAAgQAHgJQAIgIAOAAQAQAAAGAIQAIAJAAAQQAAARgIAIQgHAJgPAAQgOAAgIgJgAgQgUQgFAHgBANQABAOAFAHQAFAGALAAQAMAAAFgGQAFgGAAgPQAAgOgFgGQgFgHgMAAQgKAAgGAHg");
	this.shape_13.setTransform(51.5,13.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#262733").s().p("AgDAhIAAhBIAGAAIAABBg");
	this.shape_14.setTransform(46.2,13.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#262733").s().p("AgDAhIAAg6IgXAAIAAgHIA1AAIAAAHIgXAAIAAA6g");
	this.shape_15.setTransform(41.6,13.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#262733").s().p("AAXAhIgIgVIgcAAIgIAVIgIAAIAbhBIAGAAIAaBBgAgLAFIAXAAIgMgdg");
	this.shape_16.setTransform(35.6,13.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#262733").s().p("AgRAaQgIgIAAgSQAAgRAIgHQAHgJAPAAQAKAAALAEIAAAHQgKgEgKAAQgLgBgGAHQgGAHAAANQAAAOAGAHQAFAGAMABQAKAAAKgGIAAAHQgLAFgKAAQgPAAgHgIg");
	this.shape_17.setTransform(28.7,13.9);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#262733").s().p("AgCAhIAAhBIAFAAIAABBg");
	this.shape_18.setTransform(23.9,13.9);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#262733").s().p("AgUAhIAAhBIAIAAIAAA7IAhAAIAAAGg");
	this.shape_19.setTransform(19.9,13.9);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#262733").s().p("AgWAhIAAhBIAWAAQALAAAGAFQAGAGAAAJQAAALgGADQgGAGgLAAIgPAAIAAAZgAgPABIAPAAQAJAAAEgDQADgDAAgHQAAgGgDgEQgEgDgJAAIgPAAg");
	this.shape_20.setTransform(13.5,13.9);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#262733").s().p("AAXAhIAAg2IgXAhIgXghIAAA2IgHAAIAAhBIAIAAIAWAiIAXgiIAIAAIAABBg");
	this.shape_21.setTransform(5.9,13.9);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#262733").s().p("AgDAhIAAhBIAHAAIAABBg");
	this.shape_22.setTransform(0.3,13.9);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#262733").s().p("AgZAhIAAhBIAVAAQAOAAAIAIQAIAJAAAPQAAAigegBgAgSAbIANAAQAMAAAGgHQAFgGAAgOQAAgOgFgFQgGgGgMAAIgNAAg");
	this.shape_23.setTransform(-8,13.9);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#262733").s().p("AgUAhIAAhBIApAAIAAAHIgiAAIAAAWIAdAAIAAAGIgdAAIAAAYIAiAAIAAAGg");
	this.shape_24.setTransform(-14.8,13.9);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#262733").s().p("AgDAhIAAg6IgXAAIAAgHIA1AAIAAAHIgXAAIAAA6g");
	this.shape_25.setTransform(-21.2,13.9);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#262733").s().p("AgKAhIgKgEIAAgIIAJAFQAHACAEAAQAGAAAEgEQAEgDAAgEQAAgFgCgCIgFgEIgHgEIgKgDQgEgCgDgDQgCgEAAgGQAAgEACgEQACgEAFgDQAEgCAGAAIAJABIAJADIAAAIIgEgCIgGgDIgIAAQgGAAgCACQgEADAAAFQAAADACACIAEAFIAIADIAKADQAFADACADQACAEAAAFQAAAJgEAFQgGAGgLAAQgHAAgDgCg");
	this.shape_26.setTransform(-27.4,13.9);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#262733").s().p("AgCAhIAAhBIAFAAIAABBg");
	this.shape_27.setTransform(-31.9,13.9);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#262733").s().p("AgUAhIAAhBIAHAAIAAA7IAiAAIAAAGg");
	this.shape_28.setTransform(-35.9,13.9);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#262733").s().p("AgOADIAAgGIAdAAIAAAGg");
	this.shape_29.setTransform(-41.7,14.2);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#262733").s().p("AgDAhIAAg6IgXAAIAAgHIA1AAIAAAHIgYAAIAAA6g");
	this.shape_30.setTransform(-47.4,13.9);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#262733").s().p("AARAhIgRgbIgRAAIAAAbIgHAAIAAhBIAaAAQAJgBAGAGQAFAFAAAJQAAAIgEAFQgEAFgHAAIASAcgAgRAAIARAAQAIAAADgDQAEgDAAgHQAAgGgDgDQgDgEgHABIgTAAg");
	this.shape_31.setTransform(-53.6,13.9);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#262733").s().p("AgVAZQgIgIAAgRQAAgQAIgJQAHgIAOAAQAPAAAHAIQAIAJAAAQQAAARgIAIQgHAJgPAAQgOAAgHgJgAgQgUQgGAHAAANQAAAOAGAHQAFAGALAAQAMAAAFgGQAGgHAAgOQAAgNgGgHQgFgHgMAAQgLAAgFAHg");
	this.shape_32.setTransform(-61.1,13.9);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#262733").s().p("AARAhIAAgeIgiAAIAAAeIgHAAIAAhBIAHAAIAAAdIAiAAIAAgdIAIAAIAABBg");
	this.shape_33.setTransform(-68.5,13.9);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#262733").s().p("AgKAhIgKgEIAAgIIAJAFQAGACAFAAQAGAAAEgEQAEgDAAgEQAAgFgCgCIgFgEIgHgEQgGgBgEgCQgEgBgDgEQgCgEAAgGIACgIQABgEAGgDQAEgCAGAAIAJABIAJADIAAAIIgEgCIgGgDIgHAAQgHAAgDACQgDADAAAFQAAADACACIAEAFIAHADIALADQAFADACADQACAEAAAFQABAIgGAGQgFAGgLAAQgHAAgDgCg");
	this.shape_34.setTransform(-75.1,13.9);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#262733").s().p("AgVAZQgIgIAAgRQAAgQAIgJQAHgIAOAAQAPAAAHAIQAIAJAAAQQAAARgIAIQgHAJgPAAQgOAAgHgJgAgQgUQgGAHAAANQAAAOAGAHQAFAGALAAQAMAAAFgGQAGgHAAgOQAAgNgGgHQgFgHgMAAQgLAAgFAHg");
	this.shape_35.setTransform(54.9,1.9);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#262733").s().p("AgDAhIAAg7IgXAAIAAgGIA1AAIAAAGIgXAAIAAA7g");
	this.shape_36.setTransform(48,1.9);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#262733").s().p("AgZAhIAAhBIAVAAQAPgBAHAJQAIAIAAAQQAAAhgeAAgAgSAaIANAAQANABAFgHQAFgGABgOQgBgNgFgGQgFgHgNAAIgNAAg");
	this.shape_37.setTransform(38,1.9);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#262733").s().p("AgUAhIAAhBIApAAIAAAGIgiAAIAAAYIAeAAIAAAGIgeAAIAAAWIAiAAIAAAHg");
	this.shape_38.setTransform(31.2,1.9);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#262733").s().p("AgCAhIAAg7IgYAAIAAgGIA1AAIAAAGIgYAAIAAA7g");
	this.shape_39.setTransform(24.8,1.9);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#262733").s().p("AAWAhIgIgUIgbAAIgIAUIgIAAIAahBIAHAAIAaBBgAgLAFIAXAAIgMgdg");
	this.shape_40.setTransform(18.8,1.9);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#262733").s().p("AgTAhIAAhBIAHAAIAAA6IAgAAIAAAHg");
	this.shape_41.setTransform(12.8,1.9);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#262733").s().p("AgUAhIAAhBIApAAIAAAGIgiAAIAAAYIAeAAIAAAGIgeAAIAAAWIAiAAIAAAHg");
	this.shape_42.setTransform(6.5,1.9);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#262733").s().p("AARAhIgRgbIgRAAIAAAbIgHAAIAAhBIAaAAQAKAAAFAEQAFAGAAAJQAAAIgEAFQgEAEgHABIASAcgAgRAAIARAAQAHAAAEgCQAEgFAAgFQAAgHgDgDQgDgEgIAAIgSAAg");
	this.shape_43.setTransform(0.1,1.9);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#262733").s().p("AgKAhIgLgEIAAgIIAJAFIAMACQAHAAADgEQAEgCAAgGQAAgEgCgCQgBgCgEgCIgHgEIgKgDQgEgBgCgEQgDgEAAgGQAAgFACgDQABgEAGgCQAEgDAGAAIAJABIAJADIAAAIIgEgCIgGgDIgHgBQgHAAgCADQgEADAAAEQAAAFACABIAEAFIAIADIAKADQAFADACADQADAEgBAFQAAAJgEAFQgGAGgLgBQgHABgDgCg");
	this.shape_44.setTransform(-9.9,1.9);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#262733").s().p("AgUAhIAAhBIApAAIAAAGIgiAAIAAAYIAeAAIAAAGIgeAAIAAAWIAiAAIAAAHg");
	this.shape_45.setTransform(-16.1,1.9);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#262733").s().p("AgDAhIAAhBIAGAAIAABBg");
	this.shape_46.setTransform(-20.7,1.9);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#262733").s().p("AgSAZQgIgIAAgRQAAgRAIgIQAHgIAPAAQALAAAKAEIAAAIIgLgEQgEgCgFAAQgMAAgGAHQgGAHAAANQAAAOAGAHQAGAGAMAAQAGAAAJgCIAAgTIgQAAIAAgGIAXAAIAAAdQgMAFgLAAQgPAAgHgJg");
	this.shape_47.setTransform(-26,1.9);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#262733").s().p("AgUAhIAAhBIApAAIAAAGIgiAAIAAAYIAeAAIAAAGIgeAAIAAAWIAiAAIAAAHg");
	this.shape_48.setTransform(-32.7,1.9);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#262733").s().p("AgCAhIAAg7IgYAAIAAgGIA1AAIAAAGIgXAAIAAA7g");
	this.shape_49.setTransform(-39.1,1.9);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#262733").s().p("AAXAhIgIgUIgcAAIgIAUIgIAAIAbhBIAGAAIAaBBgAgKAFIAWAAIgMgdg");
	this.shape_50.setTransform(-45.1,1.9);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#262733").s().p("AAQAhIgQgbIgRAAIAAAbIgHAAIAAhBIAaAAQAJAAAGAEQAFAHAAAIQAAAHgEAGQgFAFgGAAIASAcgAgRAAIARAAQAHAAAEgCQADgEABgGQAAgHgDgDQgEgEgGAAIgTAAg");
	this.shape_51.setTransform(-51.7,1.9);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#262733").s().p("AgDAhIAAg7IgXAAIAAgGIA1AAIAAAGIgXAAIAAA7g");
	this.shape_52.setTransform(-58.5,1.9);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#262733").s().p("AgLAhIgKgEIAAgIIAJAFQAIACAEAAQAGAAAFgEQADgCAAgGQAAgEgCgCIgFgEIgIgEIgKgDQgDgBgCgEQgEgEAAgGIACgIQADgEAEgCQAFgDAGAAIAIABIAJADIAAAIIgDgCIgHgDIgGgBQgHAAgDADQgDADAAAEQAAAFABABIAGAFIAHADIAKADQAFADACADQADAEAAAFQgBAIgFAGQgGAGgKgBQgGABgFgCg");
	this.shape_53.setTransform(-64.7,1.9);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#262733").s().p("AgZAiIAAhDIAVAAQAOAAAIAJQAIAIAAAQQAAAhgeABgAgSAbIANAAQAMgBAGgGQAGgGAAgOQAAgNgGgGQgGgGgMgBIgNAAg");
	this.shape_54.setTransform(43.4,-10.1);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#262733").s().p("AATAiIgmg4IAAA4IgIAAIAAhDIAIAAIAnA4IAAg4IAHAAIAABDg");
	this.shape_55.setTransform(35.8,-10.1);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#262733").s().p("AAWAiIgIgWIgbAAIgIAWIgIAAIAahDIAHAAIAaBDgAgLAGIAXAAIgMgeg");
	this.shape_56.setTransform(28.5,-10.1);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#262733").s().p("AgKAhIgKgFIAAgHIAJAFQAHACAEAAQAGAAAEgDQAEgDAAgFQAAgFgCgCIgFgEIgHgEQgGgBgEgCQgEgBgDgFQgCgDAAgGIABgIQACgEAGgCQAEgEAGAAIAJABIAIAFIAAAHIgDgDIgGgCIgIgBQgGABgDACQgDADAAAEQAAAEACADIAEADIAIAEIAKADQAFADABADQADAEAAAGQABAGgGAHQgFAFgLABQgHgBgDgBg");
	this.shape_57.setTransform(18.6,-10.1);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#262733").s().p("AgUAiIAAhDIApAAIAAAHIgiAAIAAAYIAeAAIAAAFIgeAAIAAAYIAiAAIAAAHg");
	this.shape_58.setTransform(12.5,-10.1);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#262733").s().p("AgDAiIAAhDIAHAAIAABDg");
	this.shape_59.setTransform(7.8,-10.1);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#262733").s().p("AgRAaQgIgJAAgRQAAgQAIgJQAIgIAPAAQAKAAAJAFIAAAHQgIgGgLAAQgLABgGAGQgGAHAAANQAAAOAGAHQAGAGALAAQAKAAAJgEIAAAGQgJAFgKAAQgPAAgIgIg");
	this.shape_60.setTransform(3,-10.1);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#262733").s().p("AgDAiIAAhDIAGAAIAABDg");
	this.shape_61.setTransform(-1.8,-10.1);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#262733").s().p("AgUAiIAAhDIAHAAIAAA8IAiAAIAAAHg");
	this.shape_62.setTransform(-5.9,-10.1);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#262733").s().p("AgVAZQgIgIAAgRQAAgQAIgJQAGgIAPAAQAPAAAIAIQAHAJAAAQQAAARgHAIQgIAJgPAAQgOAAgHgJgAgQgUQgGAHABANQgBAOAGAHQAFAGALAAQAMAAAFgGQAGgGAAgPQAAgOgGgGQgGgHgLAAQgLAAgFAHg");
	this.shape_63.setTransform(-12.9,-10.1);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#262733").s().p("AgWAiIAAhDIAWAAQALAAAGAGQAGAGAAAKQAAAJgGAEQgGAGgLAAIgPAAIAAAagAgPABIAPAAQAJAAAEgDQADgEAAgFQAAgHgDgDQgEgFgJAAIgPAAg");
	this.shape_64.setTransform(-19.9,-10.1);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#262733").s().p("AgDAiIAAg8IgXAAIAAgHIA1AAIAAAHIgXAAIAAA8g");
	this.shape_65.setTransform(-29.9,-10.1);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#262733").s().p("AgKAhIgKgFIAAgHIAJAFQAGACAFAAQAGAAAEgDQAEgDAAgFQAAgFgCgCIgFgEIgIgEIgJgDQgEgBgDgFQgDgDAAgGIACgIQADgEAFgCQAEgEAGAAIAIABIAJAFIAAAHIgDgDIgHgCIgHgBQgGABgDACQgDADAAAEQAAAEACADIAFADIAHAEIAKADQAFADABADQAEAEAAAGQAAAGgGAHQgGAFgKABQgGgBgEgBg");
	this.shape_66.setTransform(-36.1,-10.1);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#262733").s().p("AgCAiIAAhDIAGAAIAABDg");
	this.shape_67.setTransform(-40.6,-10.1);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#262733").s().p("AgUAiIAAhDIAHAAIAAA8IAiAAIAAAHg");
	this.shape_68.setTransform(-44.6,-10.1);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#2FB7AA").s().p("AgHAIQgDgDgBgFQABgEADgDQADgEAEABQAFgBADAEQAEADAAAEQAAAFgEADQgDAEgFgBQgEABgDgEg");
	this.shape_69.setTransform(-53.5,-10.1);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#262733").s().p("AgmArIAAhVIAjAAQAUAAAMALQAKAKAAAVQAAAWgKAKQgMALgUAAgAgRAbIAMAAQAKAAAGgGQAGgHAAgOQAAgMgGgIQgGgGgKAAIgMAAg");
	this.shape_70.setTransform(41.4,-33.1);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#262733").s().p("AAWArIgHgTIgfAAIgGATIgUAAIAhhVIAWAAIAeBVgAgLAJIAVAAIgKgfg");
	this.shape_71.setTransform(31.4,-33.1);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#262733").s().p("AgdArIAAhVIA7AAIAAAQIgmAAIAAATIAhAAIAAAPIghAAIAAATIAmAAIAAAQg");
	this.shape_72.setTransform(22.5,-33.1);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#262733").s().p("AgcArIAAhVIAVAAIAABFIAkAAIAAAQg");
	this.shape_73.setTransform(14.6,-33.1);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#262733").s().p("AgKArIAAhFIgYAAIAAgQIBFAAIAAAQIgZAAIAABFg");
	this.shape_74.setTransform(2,-33.1);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#262733").s().p("AgiAAQAAgsApAAQAMAAAQAGIAAATQgNgJgMAAQgLAAgGAHQgFAHAAAOQAAAQAGAGQAGAHALAAQAGAAAGgCQAFgCAHgEIAAASIgNAFIgPABQgpAAAAgtg");
	this.shape_75.setTransform(-6.6,-33.2);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#262733").s().p("AgdArIAAhVIA7AAIAAAQIglAAIAAATIAfAAIAAAPIgfAAIAAATIAlAAIAAAQg");
	this.shape_76.setTransform(-15.1,-33.1);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#262733").s().p("AgXAnIAAgTIAIAGIAHABQALAAAAgMIAAg6IAVAAIAAA7QAAAPgIAHQgIAGgLAAQgKAAgKgFg");
	this.shape_77.setTransform(-23,-33.1);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#262733").s().p("AgeAiQgLgLAAgXQgBgVALgLQAMgMATAAQAUAAALALQALALAAAWQAAAWgLALQgKAMgVAAQgTAAgLgLgAgOgVQgGAHAAAOQAAAPAGAHQAFAGAJAAQAKAAAFgGQAGgHAAgPQAAgOgGgHQgFgGgKAAQgJAAgFAGg");
	this.shape_78.setTransform(-31.3,-33.1);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#262733").s().p("AAMArIgQgeIgNAAIAAAeIgVAAIAAhVIApAAQAPAAAJAGQAHAHAAAOQABAJgFAGQgFAHgIADIAWAhgAgRgBIARAAQAMAAAAgNQAAgGgDgDQgDgDgFAAIgSAAg");
	this.shape_79.setTransform(-40.7,-33.1);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#262733").s().p("AgjArIAAhVIAmAAQAPAAAJAGQAJAIAAAOQAAAOgJAHQgIAIgQAAIgRAAIAAAcgAgOgBIAPAAQAGAAADgDQADgDAAgFQAAgOgMAAIgPAAg");
	this.shape_80.setTransform(-50.3,-33.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11}]}).wait(1));

	// Layer 5 copy
	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f().s("#3F3B4F").ss(3).p("AtRtRIAAajIajAAIAA6jg");
	this.shape_81.setTransform(-4.4,-9.6);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#FFFFFF").s().p("AtRNSIAA6jIajAAIAAajg");
	this.shape_82.setTransform(-4.4,-9.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_82},{t:this.shape_81}]}).wait(1));

	// Layer 5
	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#FFFFFF").s().p("AtRNSIAA6jIajAAIAAajg");
	this.shape_83.setTransform(-4.7,-9.9,1.412,1.412);

	this.timeline.addTween(cjs.Tween.get(this.shape_83).wait(1));

}).prototype = getMCSymbolPrototype(lib.SD23, new cjs.Rectangle(-124.7,-129.9,240,240), null);


(lib.SD222 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgQAYIAAgHQAGAFAJAAQANAAAAgJQAAgDgCgDQgDgCgDgBIgGgDIgHgBIgFgEQgCgDAAgEQgBgHAFgEQAEgEAJAAQAHAAAGADIAAAGQgGgEgGAAQgGAAgDADQgEACAAAFQAAACACACIAGADIAGACIAHACIAFAFQACADAAAFQAAAHgEAEQgFADgJAAQgIAAgHgDg");
	this.shape.setTransform(46.4,5.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgQAbIAAg1IAhAAIAAAGIgbAAIAAASIAYAAIAAAFIgYAAIAAASIAbAAIAAAGg");
	this.shape_1.setTransform(41.6,5.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAEAbQgXAAgBgbQABgaAXAAQAIAAAJADIAAAFQgIgDgIAAQgJAAgFAFQgFAGAAAKQAAALAFAGQAFAFAJAAQAIAAAIgDIAAAFQgJADgHAAg");
	this.shape_2.setTransform(36.4,5.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AANAbIgNgWIgOAAIAAAWIgFAAIAAg1IATAAQAIAAAFAEQAFAEAAAIIgCAGIgCAEIgDACIgEACIgCAAIAPAXgAgOAAIAOAAIAGAAIAEgDIACgDIAAgEIAAgDIgCgEIgEgCIgGgBIgOAAg");
	this.shape_3.setTransform(31.2,5.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgPAVQgGgFAAgMIAAgeIAGAAIAAAfQAAARAPAAQAQAAAAgRIAAgfIAGAAIAAAeQAAAMgGAFQgGAGgKAAQgKAAgFgGg");
	this.shape_4.setTransform(25.2,5.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgYAAQAAgaAYAAQAZAAAAAaQAAAbgZAAQgYAAAAgbgAgOgQQgEAGAAAKQAAALAEAGQAFAFAJAAQAKAAAEgFQAFgGAAgLQAAgKgFgGQgEgFgKAAQgJAAgFAFg");
	this.shape_5.setTransform(18.9,5.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgQAYIAAgHQAGAFAJAAQANAAAAgJQAAgDgCgDQgCgCgEgBIgGgDIgHgBIgGgEQgBgDAAgEQAAgHAEgEQAFgEAIAAQAGAAAHADIAAAGQgGgEgGAAQgGAAgDADQgEACAAAFQAAACADACIAFADIAGACIAHACIAGAFQACADAAAFQAAAHgGAEQgFADgHAAQgJAAgHgDg");
	this.shape_6.setTransform(13.4,5.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAPAbIgegsIAAAsIgGAAIAAg1IAGAAIAgAsIAAgsIAFAAIAAA1g");
	this.shape_7.setTransform(4.7,5.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgYAAQAAgaAYAAQAZAAAAAaQAAAbgZAAQgYAAAAgbgAgOgQQgEAGAAAKQAAALAEAGQAFAFAJAAQAKAAAEgFQAFgGAAgLQAAgKgFgGQgEgFgKAAQgJAAgFAFg");
	this.shape_8.setTransform(-1.6,5.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgCAbIAAg1IAFAAIAAA1g");
	this.shape_9.setTransform(-5.9,5.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgCAbIAAgvIgTAAIAAgGIArAAIAAAGIgTAAIAAAvg");
	this.shape_10.setTransform(-9.5,5.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AASAbIgGgRIgWAAIgHARIgGAAIAVg1IAFAAIAVA1gAAJAFIgJgYIgIAYIARAAg");
	this.shape_11.setTransform(-14.8,5.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AATAbIAAgrIgTAaIgSgaIAAArIgFAAIAAg1IAFAAIASAbIASgbIAGAAIAAA1g");
	this.shape_12.setTransform(-20.9,5.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AANAbIgNgWIgOAAIAAAWIgFAAIAAg1IATAAQAIAAAFAEQAEAEABAIIgBAGIgDAEIgDACIgDACIgDAAIAPAXgAgOAAIAOAAIAGAAIAEgDIABgDIABgEIgBgDIgBgEIgEgCIgGgBIgOAAg");
	this.shape_13.setTransform(-26.7,5.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgYAAQAAgaAYAAQAZAAAAAaQAAAbgZAAQgYAAAAgbgAgOgQQgEAGAAAKQAAALAEAGQAFAFAJAAQAKAAAEgFQAFgGAAgLQAAgKgFgGQgEgFgKAAQgJAAgFAFg");
	this.shape_14.setTransform(-32.8,5.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgPAbIAAg1IAfAAIAAAGIgaAAIAAASIAXAAIAAAFIgXAAIAAAYg");
	this.shape_15.setTransform(-38.1,5.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AAQAbIgggsIAAAsIgFAAIAAg1IAGAAIAgAsIAAgsIAFAAIAAA1g");
	this.shape_16.setTransform(-43.7,5.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgCAbIAAg1IAFAAIAAA1g");
	this.shape_17.setTransform(-48,5.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AAQAbIgggsIAAAsIgFAAIAAg1IAGAAIAgAsIAAgsIAFAAIAAA1g");
	this.shape_18.setTransform(31.8,-5.7);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgYAAQAAgaAYAAQAZAAAAAaQAAAbgZAAQgYAAAAgbgAgOgQQgEAGAAAKQAAALAEAGQAFAFAJAAQAKAAAEgFQAFgGAAgLQAAgKgFgGQgEgFgKAAQgJAAgFAFg");
	this.shape_19.setTransform(25.5,-5.7);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgQAbIAAg1IAhAAIAAAGIgbAAIAAASIAYAAIAAAFIgYAAIAAASIAbAAIAAAGg");
	this.shape_20.setTransform(16.9,-5.7);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgPAbIAAg1IAFAAIAAAvIAbAAIAAAGg");
	this.shape_21.setTransform(12.4,-5.7);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgSAbIAAg1IARAAQARAAAAAPIAAAEIgCADIgCACIgBABIgBAAIABABIADAAIACACIACAEIABAGQAAAPgTAAgAgNAVIANAAQAHAAADgCQAEgCAAgGIgBgEIgCgDIgDgBIgEgBIgEAAIgNAAgAgNgCIANAAQAFAAACgCQADgCAAgFQAAgFgCgCQgDgCgFAAIgNAAg");
	this.shape_22.setTransform(7.3,-5.7);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AASAbIgGgRIgWAAIgHARIgGAAIAVg1IAFAAIAVA1gAAJAFIgJgYIgIAYIARAAg");
	this.shape_23.setTransform(1.7,-5.7);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgCAbIAAgvIgTAAIAAgGIArAAIAAAGIgTAAIAAAvg");
	this.shape_24.setTransform(-3.5,-5.7);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgCAbIAAgvIgTAAIAAgGIArAAIAAAGIgTAAIAAAvg");
	this.shape_25.setTransform(-11.5,-5.7);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgPAbIAAg1IAfAAIAAAGIgaAAIAAASIAXAAIAAAFIgXAAIAAAYg");
	this.shape_26.setTransform(-16.1,-5.7);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AASAbIgGgRIgWAAIgHARIgGAAIAVg1IAFAAIAVA1gAAJAFIgJgYIgIAYIARAAg");
	this.shape_27.setTransform(-21.4,-5.7);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AANAbIgNgWIgNAAIAAAWIgGAAIAAg1IATAAQAJAAAEAEQAFAEgBAIIgBAGIgCAEIgDACIgEACIgCAAIAPAXgAgNAAIANAAIAGAAIAEgDIACgDIAAgEIAAgDIgCgEIgEgCIgGgBIgNAAg");
	this.shape_28.setTransform(-26.6,-5.7);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgUAbIAAg1IAQAAQAZAAAAAaQAAAbgZAAgAgOAVIAKAAQAKAAAEgFQAFgFAAgLQAAgKgFgFQgEgFgKAAIgKAAg");
	this.shape_29.setTransform(-32.3,-5.7);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#2FB7AA").s().p("AtVDAIAAl/IarAAIAAF/g");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.SD222, new cjs.Rectangle(-85.3,-19.1,170.7,38.3), null);


(lib.SD22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#262733").s().p("AgLAhIgKgFIAAgHIAKAFQAHACAEAAQAGAAAFgEQADgDAAgFQAAgDgBgDIgGgEIgIgEQgFgBgEgCQgEgCgDgEQgCgEAAgFQAAgEACgEQACgEAEgCQAFgDAGgBIAJACIAJAEIAAAHIgEgCIgGgDIgIgBQgGABgDACQgDADAAAEQAAAEACACIAFAEIAHAEIAKADQAFACACAEQACADABAHQAAAIgGAFQgFAFgLAAQgGABgFgCg");
	this.shape.setTransform(32,24);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#262733").s().p("AAUAhIgog3IAAA3IgGAAIAAhBIAIAAIAmA3IAAg3IAIAAIAABBg");
	this.shape_1.setTransform(25.1,24);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#262733").s().p("AgVAZQgIgIAAgRQAAgQAIgJQAGgIAPAAQAPAAAIAIQAHAJAAAQQAAARgHAIQgIAJgPAAQgOAAgHgJgAgQgUQgGAHABANQgBAOAGAHQAFAGALAAQAMAAAFgGQAGgGAAgPQAAgOgGgGQgGgHgLAAQgLAAgFAHg");
	this.shape_2.setTransform(17.4,24);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#262733").s().p("AgCAhIAAhBIAGAAIAABBg");
	this.shape_3.setTransform(12.1,24);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#262733").s().p("AgDAhIAAg7IgXAAIAAgGIA1AAIAAAGIgXAAIAAA7g");
	this.shape_4.setTransform(7.5,24);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#262733").s().p("AAWAhIgHgUIgdAAIgIAUIgHAAIAbhBIAFAAIAbBBgAgKAGIAVAAIgLgeg");
	this.shape_5.setTransform(1.5,24);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#262733").s().p("AgRAZQgIgHAAgSQAAgRAIgIQAHgIAPAAQAKAAALAEIAAAIQgKgGgKAAQgLABgGAGQgGAHAAANQAAAPAGAGQAFAHAMgBQAKAAAKgEIAAAHQgLAEgKAAQgPAAgHgJg");
	this.shape_6.setTransform(-5.4,24);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#262733").s().p("AgDAhIAAhBIAHAAIAABBg");
	this.shape_7.setTransform(-10.2,24);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#262733").s().p("AgUAhIAAhBIAIAAIAAA6IAhAAIAAAHg");
	this.shape_8.setTransform(-14.2,24);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#262733").s().p("AgWAhIAAhBIAWAAQALgBAGAGQAGAFAAALQAAAJgGAFQgGAFgLAAIgPAAIAAAZgAgPABIAPAAQAKAAADgDQADgEAAgFQAAgHgDgDQgDgFgKAAIgPAAg");
	this.shape_9.setTransform(-20.6,24);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#262733").s().p("AAXAhIAAg1IgXAhIgXghIAAA1IgHAAIAAhBIAIAAIAWAhIAXghIAIAAIAABBg");
	this.shape_10.setTransform(-28.2,24);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#262733").s().p("AgDAhIAAhBIAHAAIAABBg");
	this.shape_11.setTransform(-33.8,24);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#262733").s().p("AgZAiIAAhDIAVAAQAOAAAIAJQAIAJAAAPQAAAigeAAgAgSAbIANAAQAMgBAGgGQAGgGAAgOQAAgNgGgGQgGgGgMgBIgNAAg");
	this.shape_12.setTransform(42.5,12);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#262733").s().p("AgUAiIAAhDIApAAIAAAHIgiAAIAAAYIAeAAIAAAFIgeAAIAAAYIAiAAIAAAHg");
	this.shape_13.setTransform(35.7,12);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#262733").s().p("AgCAiIAAg8IgYAAIAAgHIA1AAIAAAHIgXAAIAAA8g");
	this.shape_14.setTransform(29.3,12);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#262733").s().p("AgKAhIgKgFIAAgHIAJAFIALACQAGAAAFgDQAEgEAAgEQAAgEgDgDIgEgEIgIgEIgKgDQgFgCgCgEQgCgDAAgGQAAgFACgDQACgEAFgDQAEgDAGAAIAJABIAJAFIAAAHIgEgDIgGgCIgIAAQgGgBgDADQgDAEAAADQAAAEACADIAEADIAIAEIAKADQAFADACADQACAEAAAGQAAAHgEAGQgGAFgLABQgGgBgEgBg");
	this.shape_15.setTransform(23.2,12);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#262733").s().p("AgCAiIAAhDIAFAAIAABDg");
	this.shape_16.setTransform(18.7,12);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#262733").s().p("AgUAiIAAhDIAIAAIAAA8IAhAAIAAAHg");
	this.shape_17.setTransform(14.6,12);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#262733").s().p("AgCAiIAAg8IgYAAIAAgHIA1AAIAAAHIgYAAIAAA8g");
	this.shape_18.setTransform(8.3,12);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#262733").s().p("AARAiIgRgbIgRAAIAAAbIgHAAIAAhDIAaAAQAJAAAGAGQAFAFAAAJQAAAHgEAGQgFAFgGABIASAcgAgRAAIARAAQAHAAAEgCQADgEABgHQAAgGgEgDQgCgDgIgBIgSAAg");
	this.shape_19.setTransform(2.1,12);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#262733").s().p("AgVAZQgIgIAAgRQAAgQAIgJQAGgIAPAAQAPAAAHAIQAIAJAAAQQAAAQgIAJQgHAJgPAAQgOAAgHgJgAgRgUQgEAGAAAOQAAAOAEAHQAHAGAKAAQAMAAAFgGQAFgHABgOQgBgNgFgHQgGgHgLAAQgKAAgHAHg");
	this.shape_20.setTransform(-5.3,12);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#262733").s().p("AASAiIAAgfIgjAAIAAAfIgHAAIAAhDIAHAAIAAAfIAjAAIAAgfIAHAAIAABDg");
	this.shape_21.setTransform(-12.8,12);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#262733").s().p("AgLAhIgJgFIAAgHIAJAFQAGACAFAAQAGAAAEgDQAEgEAAgEQAAgFgCgCIgFgEIgIgEQgFgBgFgCQgDgCgDgEQgDgDABgGIABgIQADgEAEgDQAFgDAGAAIAIABIAJAFIAAAHIgDgDIgHgCIgHAAQgGgBgDADQgDADAAAEQAAAEABADIAGADIAHAEIAKADQAFADABADQAEAEAAAGQAAAGgGAHQgGAFgKABQgGgBgFgBg");
	this.shape_22.setTransform(-19.4,12);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#262733").s().p("AARAiIgRgbIgRAAIAAAbIgHAAIAAhDIAaAAQAJAAAGAGQAFAEAAAKQAAAHgEAGQgFAFgGABIASAcgAgRAAIARAAQAHAAAEgCQAEgFAAgGQAAgGgDgDQgDgDgIgBIgSAAg");
	this.shape_23.setTransform(-29,12);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#262733").s().p("AgVAZQgIgIAAgRQAAgQAIgJQAGgIAPAAQAPAAAIAIQAHAJAAAQQAAARgHAIQgIAJgPAAQgOAAgHgJgAgQgUQgGAGABAOQgBAPAGAGQAFAGALAAQAMAAAFgGQAFgHABgOQgBgNgFgHQgGgHgLAAQgLAAgFAHg");
	this.shape_24.setTransform(-36.5,12);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#262733").s().p("AgTAiIAAhDIAnAAIAAAHIggAAIAAAYIAdAAIAAAFIgdAAIAAAfg");
	this.shape_25.setTransform(-43.1,12);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#262733").s().p("AgUAhIAAhBIApAAIAAAHIgiAAIAAAWIAeAAIAAAGIgeAAIAAAYIAiAAIAAAGg");
	this.shape_26.setTransform(59.5,0);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#262733").s().p("AgRAZQgIgIAAgRQAAgRAIgHQAHgJAPAAQAKAAALAEIAAAHQgKgEgKAAQgMgBgFAHQgGAHAAANQAAAPAGAGQAFAHAMAAQAKgBAKgFIAAAIQgLAEgKAAQgPAAgHgJg");
	this.shape_27.setTransform(52.9,0);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#262733").s().p("AAUAhIgog3IAAA3IgGAAIAAhBIAHAAIAoA3IAAg3IAHAAIAABBg");
	this.shape_28.setTransform(45.7,0);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#262733").s().p("AgUAhIAAhBIApAAIAAAHIgiAAIAAAWIAdAAIAAAGIgdAAIAAAYIAiAAIAAAGg");
	this.shape_29.setTransform(38.8,0);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#262733").s().p("AgZAhIAAhBIAVAAQAOAAAIAIQAIAJAAAPQAAAigegBgAgSAbIANAAQAMAAAGgHQAGgGAAgOQAAgNgGgGQgGgHgMABIgNAAg");
	this.shape_30.setTransform(32.1,0);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#262733").s().p("AgDAhIAAhBIAGAAIAABBg");
	this.shape_31.setTransform(26.9,0);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#262733").s().p("AgDAhIgZhBIAIAAIAUA4IAWg4IAHAAIgZBBg");
	this.shape_32.setTransform(22.1,0);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#262733").s().p("AgUAhIAAhBIApAAIAAAHIgiAAIAAAWIAeAAIAAAGIgeAAIAAAYIAiAAIAAAGg");
	this.shape_33.setTransform(15.6,0);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#262733").s().p("AAQAhIgQgbIgRAAIAAAbIgHAAIAAhBIAbAAQAIAAAGAEQAFAGAAAJQAAAIgEAFQgFAFgGAAIASAcgAgRAAIARAAQAHAAAEgDQAEgDAAgHQAAgGgDgDQgDgEgIABIgSAAg");
	this.shape_34.setTransform(5.8,0);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#262733").s().p("AgWAZQgHgIAAgRQAAgQAHgJQAHgIAPAAQAPAAAHAIQAIAJAAAQQAAARgIAIQgHAJgPAAQgOAAgIgJgAgQgUQgFAGgBAOQABAPAFAGQAFAGALAAQAMAAAFgGQAFgHAAgOQAAgNgFgHQgGgHgLAAQgKAAgGAHg");
	this.shape_35.setTransform(-1.6,0);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#262733").s().p("AgTAhIAAhBIAnAAIAAAHIggAAIAAAWIAcAAIAAAGIgcAAIAAAeg");
	this.shape_36.setTransform(-8.2,0);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#262733").s().p("AASAhIAAgeIgjAAIAAAeIgHAAIAAhBIAHAAIAAAdIAjAAIAAgdIAHAAIAABBg");
	this.shape_37.setTransform(-18.4,0);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#262733").s().p("AgRAZQgIgIAAgRQAAgQAIgIQAIgJAPAAQAKAAAJAEIAAAHQgIgEgLAAQgLgBgGAHQgGAHAAANQAAAOAGAHQAGAHALAAQAJgBAKgFIAAAIQgJAEgKAAQgPAAgIgJg");
	this.shape_38.setTransform(-25.3,0);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#262733").s().p("AAQAhIgQgbIgRAAIAAAbIgHAAIAAhBIAbAAQAIAAAGAEQAFAGAAAJQAAAIgEAFQgFAFgGAAIASAcgAgRAAIARAAQAHAAAEgDQAEgDAAgHQAAgGgDgDQgDgEgHABIgTAAg");
	this.shape_39.setTransform(-31.9,0);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#262733").s().p("AAWAhIgIgVIgbAAIgIAVIgIAAIAahBIAHAAIAaBBgAgLAFIAXAAIgMgdg");
	this.shape_40.setTransform(-39,0);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#262733").s().p("AgUAhIAAhBIApAAIAAAHIgiAAIAAAWIAeAAIAAAGIgeAAIAAAYIAiAAIAAAGg");
	this.shape_41.setTransform(-45.5,0);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#262733").s().p("AgKAhIgLgEIAAgIIAJAFQAHACAFAAQAGAAAEgEQAEgCAAgGQAAgEgCgCIgFgEIgHgEQgGgBgEgCQgEgBgCgEQgDgEAAgGIACgIQABgEAGgDQAEgCAGAAIAJABIAJADIAAAIIgEgCIgGgDIgHAAQgHAAgCACQgEADAAAFQAAADACACIAEAFIAIADIAKADQAFADACADQACAEAAAFQABAIgGAGQgFAGgLgBQgHAAgDgBg");
	this.shape_42.setTransform(-51.7,0);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#2FB7AA").s().p("AgHAIQgEgDABgFQgBgEAEgDQADgEAEAAQAFAAADAEQAEADgBAEQABAFgEADQgDADgFABQgEgBgDgDg");
	this.shape_43.setTransform(-60.5,0);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#262733").s().p("AgmAsIAAhXIAjAAQAUABALAKQALALAAAVQAAAWgLALQgLAKgUABgAgRAbIAMAAQAKAAAGgHQAGgGAAgOQAAgNgGgGQgGgHgKAAIgMAAg");
	this.shape_44.setTransform(45.8,-23);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#262733").s().p("AAWAsIgHgTIgfAAIgGATIgUAAIAhhXIAWAAIAeBXgAgLAJIAVAAIgKggg");
	this.shape_45.setTransform(35.8,-23);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#262733").s().p("AgdAsIAAhXIA7AAIAAARIgmAAIAAASIAhAAIAAAQIghAAIAAATIAmAAIAAARg");
	this.shape_46.setTransform(26.9,-23);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#262733").s().p("AgcAsIAAhXIAVAAIAABGIAkAAIAAARg");
	this.shape_47.setTransform(19,-23);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#262733").s().p("AgJAsIAAhGIgZAAIAAgRIBFAAIAAARIgZAAIAABGg");
	this.shape_48.setTransform(6.4,-23);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#262733").s().p("AgiAAQAAgsAqAAQAMAAAPAGIAAATQgNgJgMAAQgLAAgFAHQgGAGgBAPQABAQAGAGQAFAHAMAAQAGAAAFgCQAIgCAFgEIAAASQgDACgKADIgOABQgqAAAAgtg");
	this.shape_49.setTransform(-2.2,-23.1);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#262733").s().p("AgdAsIAAhXIA7AAIAAARIgmAAIAAASIAhAAIAAAQIghAAIAAATIAmAAIAAARg");
	this.shape_50.setTransform(-10.7,-23);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#262733").s().p("AgXAnIAAgTIAIAGQAEABADAAQALAAAAgMIAAg6IAVAAIAAA7QAAAPgIAHQgHAGgMAAQgLAAgJgFg");
	this.shape_51.setTransform(-18.6,-23);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#262733").s().p("AgeAiQgLgMAAgWQAAgWALgLQALgLATAAQAUAAALALQALALAAAWQAAAWgLAMQgKALgVAAQgTAAgLgLgAgOgUQgFAGAAAOQAAAPAFAGQAFAHAJAAQAKAAAGgHQAFgHAAgOQAAgOgFgGQgGgHgKAAQgJAAgFAHg");
	this.shape_52.setTransform(-26.9,-23);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#262733").s().p("AAMAsIgQgeIgNAAIAAAeIgVAAIAAhXIApAAQAPAAAIAHQAJAIAAANQAAAJgGAGQgEAHgIACIAWAjgAgRgBIARAAQALAAAAgNQABgGgDgDQgDgDgGAAIgRAAg");
	this.shape_53.setTransform(-36.3,-23);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#262733").s().p("AgjAsIAAhXIAmAAQAQAAAIAHQAJAIAAAOQAAAOgJAHQgIAIgQAAIgRAAIAAAdgAgOAAIAPAAQAGAAADgDQADgEAAgFQAAgOgMAAIgPAAg");
	this.shape_54.setTransform(-46,-23);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer 3 copy
	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f().s("#3F3B4F").ss(3).p("AtRtRIAAajIajAAIAA6jg");

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FFFFFF").s().p("AtRNSIAA6jIajAAIAAajg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_56},{t:this.shape_55}]}).wait(1));

	// Layer 3
	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FFFFFF").s().p("AtRNSIAA6jIajAAIAAajg");
	this.shape_57.setTransform(-0.3,-0.3,1.412,1.412);

	this.timeline.addTween(cjs.Tween.get(this.shape_57).wait(1));

}).prototype = getMCSymbolPrototype(lib.SD22, new cjs.Rectangle(-120.3,-120.3,240,240), null);


(lib.SD21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// DESK RESEARCH AND GATHERING INFORMATION FROM EXPERTS
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#262733").s().p("AgdAkIAAgVQAMAKAOAAIABAAQAEAAADgCQAEgCAAgDQAAgBAAAAQgBgBAAAAQAAgBAAAAQgBgBAAAAIgGgDIgHgCIgIgDQgFgBgDgDQgEgCgCgFQgCgFAAgGQAAgOAJgGQAJgHANAAQAMAAALAGIAAATQgKgGgKAAQgEAAgEACQgEABAAAEQAAABAAAAQABABAAAAQAAABABAAQAAABABAAQADACAEABIAJADQAFABAFADQAEADADAFQADAFAAAJQAAALgJAHQgJAHgNAAQgRAAgMgIg");
	this.shape.setTransform(48.5,29.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#262733").s().p("AgKArIAAhCIgZAAIAAgTIBHAAIAAATIgZAAIAABCg");
	this.shape_1.setTransform(40.2,29.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#262733").s().p("AALArIgPgdIgJAAIAAAdIgWAAIAAhVIAiAAQAPAAAJAHQAKAHAAAOQAAAKgFAGQgFAGgIADIAVAggAgNgCIANAAQAEAAADgDQADgDAAgFQAAgFgDgDQgDgDgEAAIgNAAg");
	this.shape_2.setTransform(31.7,29.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#262733").s().p("AgdArIAAhVIA7AAIAAASIglAAIAAAQIAgAAIAAARIggAAIAAAQIAlAAIAAASg");
	this.shape_3.setTransform(22.6,29.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#262733").s().p("AghArIAAhVIAiAAQAQAAAJAIQAIAIAAAOQAAANgIAIQgJAIgQAAIgMAAIAAAagAgLAAIALAAQAGAAADgDQADgEAAgFQAAgFgDgEQgDgDgGAAIgLAAg");
	this.shape_4.setTransform(13.9,29.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#262733").s().p("AASArIgSgaIgSAaIgZAAIAegrIgegqIAcAAIAPAXIARgXIAZAAIgeApIAhAsg");
	this.shape_5.setTransform(4.3,29.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#262733").s().p("AgdArIAAhVIA7AAIAAASIglAAIAAAQIAgAAIAAARIggAAIAAAQIAlAAIAAASg");
	this.shape_6.setTransform(-4.7,29.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#262733").s().p("AAUArIAAg0IgUAbIgTgbIAAA0IgWAAIAAhVIAWAAIATAdIAUgdIAWAAIAABVg");
	this.shape_7.setTransform(-19.8,29.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#262733").s().p("AgLArQgFgBgFgDQgGgDgEgFQgEgFgCgIQgDgIAAgKQAAgKADgIQACgIAEgFQAEgEAGgDQAFgDAFgBIALgBIALABQAGABAFADQAGADAEAEQAEAFACAIQADAIAAAKQAAAKgDAIQgCAIgEAFQgEAFgGADQgFADgGABQgFABgGAAQgFAAgGgBgAgMgTQgFAGAAANQAAAOAFAFQAFAGAHAAQAIAAAFgGQAFgFAAgOQAAgNgFgGQgFgFgIAAQgHAAgFAFg");
	this.shape_8.setTransform(-30.6,29.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#262733").s().p("AALArIgPgdIgJAAIAAAdIgWAAIAAhVIAiAAQAPAAAJAHQAKAHAAAOQAAAKgFAGQgFAGgIADIAVAggAgNgCIANAAQAEAAADgDQADgDAAgFQAAgFgDgDQgDgDgEAAIgNAAg");
	this.shape_9.setTransform(-40.2,29.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#262733").s().p("AgcArIAAhVIA5AAIAAASIgjAAIAAARIAfAAIAAARIgfAAIAAAhg");
	this.shape_10.setTransform(-49,29.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#262733").s().p("AASArIgjgyIAAAyIgWAAIAAhVIAWAAIAjAzIAAgzIAWAAIAABVg");
	this.shape_11.setTransform(44,11.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#262733").s().p("AgLArQgFgBgFgDQgGgDgEgFQgEgFgCgIQgDgIAAgKQAAgKADgIQACgIAEgFQAEgEAGgDQAFgDAFgBIALgBIALABQAGABAFADQAGADAEAEQAEAFACAIQADAIAAAKQAAAKgDAIQgCAIgEAFQgEAFgGADQgFADgGABQgFABgGAAQgFAAgGgBgAgMgTQgFAGAAANQAAAOAFAFQAFAGAHAAQAIAAAFgGQAFgFAAgOQAAgNgFgGQgFgFgIAAQgHAAgFAFg");
	this.shape_12.setTransform(33.4,11.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#262733").s().p("AgKArIAAhVIAVAAIAABVg");
	this.shape_13.setTransform(25.8,11.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#262733").s().p("AgKArIAAhCIgZAAIAAgTIBHAAIAAATIgZAAIAABCg");
	this.shape_14.setTransform(19.1,11.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#262733").s().p("AAVArIgHgVIgbAAIgHAVIgYAAIAihVIAVAAIAiBVgAAJAGIgJgaIgHAaIAQAAg");
	this.shape_15.setTransform(10,11.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#262733").s().p("AAUArIAAg0IgUAbIgTgbIAAA0IgWAAIAAhVIAWAAIATAdIAUgdIAWAAIAABVg");
	this.shape_16.setTransform(-0.7,11.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#262733").s().p("AALArIgPgdIgJAAIAAAdIgWAAIAAhVIAiAAQAPAAAJAHQAKAHAAAOQAAAKgFAGQgFAGgIADIAVAggAgNgCIANAAQAEAAADgDQADgDAAgFQAAgFgDgDQgDgDgEAAIgNAAg");
	this.shape_17.setTransform(-10.8,11.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#262733").s().p("AgLArQgFgBgFgDQgGgDgEgFQgEgFgCgIQgDgIAAgKQAAgKADgIQACgIAEgFQAEgEAGgDQAFgDAFgBIALgBIALABQAGABAFADQAGADAEAEQAEAFACAIQADAIAAAKQAAAKgDAIQgCAIgEAFQgEAFgGADQgFADgGABQgFABgGAAQgFAAgGgBgAgMgTQgFAGAAANQAAAOAFAFQAFAGAHAAQAIAAAFgGQAFgFAAgOQAAgNgFgGQgFgFgIAAQgHAAgFAFg");
	this.shape_18.setTransform(-21,11.6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#262733").s().p("AgcArIAAhVIA5AAIAAASIgjAAIAAARIAfAAIAAARIgfAAIAAAhg");
	this.shape_19.setTransform(-29.9,11.6);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#262733").s().p("AASArIgjgyIAAAyIgWAAIAAhVIAWAAIAjAzIAAgzIAWAAIAABVg");
	this.shape_20.setTransform(-39.7,11.6);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#262733").s().p("AgKArIAAhVIAVAAIAABVg");
	this.shape_21.setTransform(-47.6,11.6);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#262733").s().p("AgGArQgFgBgGgDQgFgDgEgFQgEgEgDgJQgCgIAAgKQgBgMAEgJQADgKAHgEQAGgFAHgCQAHgBAGAAQAQAAAOAGIAAASQgNgFgNAAQgVAAAAAYQAAAOAGAGQAFAFAJAAQAHAAAFgCIAAgOIgQAAIAAgQIAiAAIAAArQgOAIgTAAIgKgBg");
	this.shape_22.setTransform(53.3,-6.3);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#262733").s().p("AASArIgjgyIAAAyIgWAAIAAhVIAWAAIAjAzIAAgzIAWAAIAABVg");
	this.shape_23.setTransform(43.1,-6.3);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#262733").s().p("AgKArIAAhVIAVAAIAABVg");
	this.shape_24.setTransform(35.2,-6.3);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#262733").s().p("AALArIgPgdIgJAAIAAAdIgWAAIAAhVIAiAAQAPAAAJAHQAKAHAAAOQAAAKgFAGQgFAGgIADIAVAggAgNgCIANAAQAEAAADgDQADgDAAgFQAAgFgDgDQgDgDgEAAIgNAAg");
	this.shape_25.setTransform(28.3,-6.3);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#262733").s().p("AgdArIAAhVIA7AAIAAASIglAAIAAAQIAgAAIAAARIggAAIAAAQIAlAAIAAASg");
	this.shape_26.setTransform(19.2,-6.3);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#262733").s().p("AAOArIAAgiIgbAAIAAAiIgWAAIAAhVIAWAAIAAAiIAbAAIAAgiIAWAAIAABVg");
	this.shape_27.setTransform(9.7,-6.3);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#262733").s().p("AgKArIAAhCIgZAAIAAgTIBHAAIAAATIgZAAIAABCg");
	this.shape_28.setTransform(0.5,-6.3);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#262733").s().p("AAVArIgGgVIgcAAIgGAVIgZAAIAjhVIAUAAIAiBVgAAJAGIgJgaIgIAaIARAAg");
	this.shape_29.setTransform(-8.6,-6.3);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#262733").s().p("AgGArQgGgBgFgDQgGgDgEgFQgEgEgCgJQgDgIAAgKQAAgMAEgJQADgKAHgEQAGgFAHgCQAGgBAHAAQAPAAAPAGIAAASQgNgFgOAAQgUAAAAAYQAAAOAFAGQAGAFAJAAQAHAAAEgCIAAgOIgOAAIAAgQIAgAAIAAArQgNAIgTAAIgKgBg");
	this.shape_30.setTransform(-18.5,-6.3);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#262733").s().p("AgjArIAAhVIAfAAQATAAAKALQALALAAAUQAAAVgLALQgKALgTAAgAgNAZIAJAAQASAAAAgZQAAgYgSAAIgJAAg");
	this.shape_31.setTransform(-32.9,-6.3);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#262733").s().p("AASArIgjgyIAAAyIgWAAIAAhVIAWAAIAjAzIAAgzIAWAAIAABVg");
	this.shape_32.setTransform(-43.4,-6.3);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#262733").s().p("AAVArIgHgVIgbAAIgHAVIgYAAIAihVIAVAAIAiBVgAAJAGIgJgaIgHAaIAQAAg");
	this.shape_33.setTransform(-53.9,-6.3);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#262733").s().p("AAOArIAAgiIgbAAIAAAiIgWAAIAAhVIAWAAIAAAiIAbAAIAAgiIAWAAIAABVg");
	this.shape_34.setTransform(52.2,-24.2);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#262733").s().p("AgHAqQgHgCgGgEQgGgFgEgJQgDgJAAgNQAAgMADgKQAEgJAGgEQAGgFAHgCQAHgBAGAAQANAAAPAGIAAATQgNgGgNAAQgIAAgGAFQgFAGAAANQAAAOAFAGQAGAFAIAAQANAAANgGIAAATQgPAGgNAAQgGAAgHgCg");
	this.shape_35.setTransform(42.7,-24.2);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#262733").s().p("AALArIgPgdIgJAAIAAAdIgWAAIAAhVIAiAAQAPAAAJAHQAKAHAAAOQAAAKgFAGQgFAGgIADIAVAggAgNgCIANAAQAEAAADgDQADgDAAgFQAAgFgDgDQgDgDgEAAIgNAAg");
	this.shape_36.setTransform(33.8,-24.2);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#262733").s().p("AAVArIgHgVIgbAAIgGAVIgZAAIAjhVIAUAAIAiBVgAAJAGIgJgaIgHAaIAQAAg");
	this.shape_37.setTransform(23.7,-24.2);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#262733").s().p("AgdArIAAhVIA7AAIAAASIglAAIAAAQIAgAAIAAARIggAAIAAAQIAlAAIAAASg");
	this.shape_38.setTransform(14.6,-24.2);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#262733").s().p("AgdAkIAAgVQAMAKAOAAIABAAQAEAAADgCQAEgCAAgDQAAgBAAAAQgBgBAAAAQAAgBAAAAQgBgBAAAAIgGgDIgHgCIgIgDQgFgBgDgDQgEgCgCgFQgCgFAAgGQAAgOAJgGQAJgHANAAQAMAAALAGIAAATQgKgGgKAAQgEAAgEACQgEABAAAEQAAADADABQADACAEABIAJADQAFABAFADQAEADADAFQADAFAAAJQAAALgJAHQgJAHgNAAQgRAAgMgIg");
	this.shape_39.setTransform(6,-24.2);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#262733").s().p("AgdArIAAhVIA7AAIAAASIglAAIAAAQIAgAAIAAARIggAAIAAAQIAlAAIAAASg");
	this.shape_40.setTransform(-2.3,-24.2);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#262733").s().p("AALArIgPgdIgJAAIAAAdIgWAAIAAhVIAiAAQAPAAAJAHQAKAHAAAOQAAAKgFAGQgFAGgIADIAVAggAgNgCIANAAQAEAAADgDQADgDAAgFQAAgFgDgDQgDgDgEAAIgNAAg");
	this.shape_41.setTransform(-11.1,-24.2);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#262733").s().p("AALArIgVgiIgGAHIAAAbIgWAAIAAhVIAWAAIAAAeIAXgeIAeAAIgiAlIAkAwg");
	this.shape_42.setTransform(-25.9,-24.2);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#262733").s().p("AgdAkIAAgVQAMAKAOAAIABAAQAEAAADgCQAEgCAAgDQAAgBAAAAQAAgBgBAAQAAgBAAAAQgBgBAAAAIgGgDIgHgCIgIgDQgFgBgDgDQgEgCgCgFQgCgFAAgGQAAgOAJgGQAJgHANAAQAMAAALAGIAAATQgKgGgKAAQgEAAgEACQgEABAAAEQAAADADABQADACAEABIAJADQAFABAFADQAEADADAFQADAFAAAJQAAALgJAHQgJAHgNAAQgRAAgMgIg");
	this.shape_43.setTransform(-35.5,-24.2);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#262733").s().p("AgdArIAAhVIA7AAIAAASIglAAIAAAQIAgAAIAAARIggAAIAAAQIAlAAIAAASg");
	this.shape_44.setTransform(-43.7,-24.2);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#262733").s().p("AgjArIAAhVIAfAAQATAAALALQAKALAAAUQAAAVgKALQgLALgTAAgAgNAZIAJAAQASAAAAgZQAAgYgSAAIgJAAg");
	this.shape_45.setTransform(-52.9,-24.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer 3 copy
	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("#3F3B4F").ss(3).p("AtRtRIAAajIajAAIAA6jg");

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("AtRNSIAA6jIajAAIAAajg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_47},{t:this.shape_46}]}).wait(1));

	// Layer 3 copy 2
	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFFFF").s().p("AtRNSIAA6jIajAAIAAajg");
	this.shape_48.setTransform(-0.3,8.9,1.412,1.306);

	this.timeline.addTween(cjs.Tween.get(this.shape_48).wait(1));

	// Layer 3
	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("rgba(255,255,255,0.008)").s().p("AyvSwMAAAglfMAlfAAAMAAAAlfg");
	this.shape_49.setTransform(-0.2,-0.3);

	this.timeline.addTween(cjs.Tween.get(this.shape_49).wait(1));

}).prototype = getMCSymbolPrototype(lib.SD21, new cjs.Rectangle(-120.2,-120.3,240,240.2), null);


(lib.SD19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgQAYIAAgIQAHAEAIAAQALAAABgHQAAgDgDgDIgFgDIgGgCIgHgCQgDgBgCgDQgCgDAAgEQAAgGAFgFQAEgEAJAAQAHAAAHADIAAAHQgGgDgHAAQgLAAAAAIQAAAAAAABQAAAAAAABQABAAAAABQAAAAABABIAFACIAGADIAHACQADACACADQACADAAAFQAAAHgFAEQgFADgIAAQgIAAgIgDg");
	this.shape.setTransform(72.7,94.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgDAbIAAguIgSAAIAAgHIArAAIAAAHIgSAAIAAAug");
	this.shape_1.setTransform(67.8,94.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgQAbIAAg1IAIAAIAAAuIAZAAIAAAHg");
	this.shape_2.setTransform(63.3,94.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgPAWQgGgHAAgKIAAgfIAIAAIAAAfQAAAIADADQAEAFAGAAQAHAAAEgFQADgDAAgIIAAgfIAIAAIAAAfQAAAKgGAHQgGAFgKAAQgJAAgGgFg");
	this.shape_3.setTransform(57.6,95);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgQAYIAAgIQAHAEAIAAQALAAABgHQAAgDgDgDIgFgDIgGgCIgHgCQgDgBgCgDQgCgDAAgEQAAgGAFgFQAEgEAJAAQAHAAAHADIAAAHQgGgDgHAAQgLAAAAAIQAAAAAAABQAAAAAAABQABAAAAABQAAAAABABIAFACIAGADIAHACQADACACADQACADAAAFQAAAHgFAEQgFADgIAAQgIAAgIgDg");
	this.shape_4.setTransform(52.1,94.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgRAbIAAg1IAiAAIAAAHIgaAAIAAARIAXAAIAAAGIgXAAIAAAQIAaAAIAAAHg");
	this.shape_5.setTransform(47.3,94.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAMAbIgMgVIgMAAIAAAVIgHAAIAAg1IATAAQAIAAAFAFQAFAEABAIQgBAGgDADQgDAEgFABIANAWgAgMAAIAMAAQAGAAADgCQACgDAAgEQAAgKgLAAIgMAAg");
	this.shape_6.setTransform(42.2,94.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AABAbIAAgtIgIAFIAAgIIAHgFIAIAAIAAA1g");
	this.shape_7.setTransform(34,94.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgSAbIAAg1IASAAQAJAAAFAFQAFAEAAAIQAAAIgFAEQgFAEgJAAIgKAAIAAAUgAgKAAIAKAAQAHAAACgBQADgDAAgFQAAgEgDgDQgCgDgHAAIgKAAg");
	this.shape_8.setTransform(83.1,83.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgGAbIgHgDQgDgCgCgDQgDgCgBgFQgCgFAAgHQAAgGACgEQABgFADgDQACgDADgCIAHgDIAGAAIAHAAQADABADACIAGAFQADADABAFQACAEAAAGQAAAHgCAFQgBAFgDACIgGAFQgDACgDABIgHAAIgGAAgAgEgTIgFABIgEAEIgCAGIgBAIIABAJIACAGIAEAEIAFABIAEABIAFgBIAFgBIAEgEIACgGIABgJIgBgIIgCgGIgEgEIgFgBIgFgBg");
	this.shape_9.setTransform(77.1,83.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AANAbIAAgXIgZAAIAAAXIgHAAIAAg1IAHAAIAAAYIAZAAIAAgYIAHAAIAAA1g");
	this.shape_10.setTransform(71,83.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgQAYIAAgIQAHAEAIAAQALAAABgHQAAgDgDgDIgFgDIgGgCIgHgCQgDgBgCgDQgCgDAAgEQAAgGAFgFQAEgEAJAAQAHAAAHADIAAAHQgGgDgHAAQgLAAAAAIQAAAAAAABQAAAAAAABQAAAAABABQAAAAABABIAFACIAGADIAHACQADACACADQACADAAAFQAAAHgFAEQgFADgIAAQgIAAgIgDg");
	this.shape_11.setTransform(65.7,83.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AAMAbIgTgYIgGAGIAAASIgIAAIAAg1IAIAAIAAAaIAYgaIAJAAIgWAZIAXAcg");
	this.shape_12.setTransform(60.5,83.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AAMAbIgMgVIgMAAIAAAVIgHAAIAAg1IATAAQAIAAAFAFQAFAEAAAIQAAAGgDADQgEAEgEABIANAWgAgMAAIAMAAQAGAAACgCQADgDAAgEQAAgKgLAAIgMAAg");
	this.shape_13.setTransform(55,83.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgGAbIgHgDQgDgCgCgDQgDgCgBgFQgCgFAAgHQAAgGACgEQABgFADgDQACgDADgCIAHgDIAGAAIAHAAQADABADACIAGAFQADADABAFQACAEAAAGQAAAHgCAFQgBAFgDACIgGAFQgDACgDABIgHAAIgGAAgAgEgTIgFABIgEAEIgCAGIgBAIIABAJIACAGIAEAEIAFABIAEABIAFgBIAFgBIAEgEIACgGIABgJIgBgIIgCgGIgEgEIgFgBIgFgBg");
	this.shape_14.setTransform(48.8,83.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AAMAbIgMgoIgMAoIgHAAIgRg1IAHAAIAOAqIANgqIAFAAIAOAqIAMgqIAIAAIgRA1g");
	this.shape_15.setTransform(41.6,83.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AAPAbIgdgqIAAAqIgIAAIAAg1IAJAAIAdAqIAAgqIAHAAIAAA1g");
	this.shape_16.setTransform(31.4,83.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgGAbIgHgDQgDgCgCgDQgDgCgBgFQgCgFAAgHQAAgGACgEQABgFADgDQACgDADgCIAHgDIAGAAIAHAAQADABADACIAGAFQADADABAFQACAEAAAGQAAAHgCAFQgBAFgDACIgGAFQgDACgDABIgHAAIgGAAgAgEgTIgFABIgEAEIgCAGIgBAIIABAJIACAGIAEAEIAFABIAEABIAFgBIAFgBIAEgEIACgGIABgJIgBgIIgCgGIgEgEIgFgBIgFgBg");
	this.shape_17.setTransform(25,83.9);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgDAbIAAguIgSAAIAAgHIArAAIAAAHIgSAAIAAAug");
	this.shape_18.setTransform(80.9,72.9);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AAMAbIgMgVIgMAAIAAAVIgHAAIAAg1IATAAQAIAAAFAFQAFAEABAIQgBAGgDADQgDAEgFABIANAWgAgMAAIAMAAQAGAAADgCQACgDAAgEQAAgKgLAAIgMAAg");
	this.shape_19.setTransform(75.9,72.9);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgGAbIgHgDQgDgCgCgDQgDgCgBgFQgCgFAAgHQAAgGACgEQABgFADgDQACgDADgCIAHgDIAGAAIAHAAQADABADACIAGAFQADADABAFQACAEAAAGQAAAHgCAFQgBAFgDACIgGAFQgDACgDABIgHAAIgGAAgAgEgTIgFABIgEAEIgCAGIgBAIIABAJIACAGIAEAEIAFABIAEABIAFgBIAFgBIAEgEIACgGIABgJIgBgIIgCgGIgEgEIgFgBIgFgBg");
	this.shape_20.setTransform(69.8,72.9);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgSAbIAAg1IASAAQAJAAAFAFQAFAEAAAIQAAAIgFAEQgFAEgJAAIgLAAIAAAUgAgLAAIALAAQAHAAACgBQADgDAAgFQAAgEgDgDQgCgDgHAAIgLAAg");
	this.shape_21.setTransform(64.3,72.9);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgRAbIAAg1IAiAAIAAAHIgaAAIAAARIAXAAIAAAGIgXAAIAAAQIAaAAIAAAHg");
	this.shape_22.setTransform(59.1,72.9);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AAMAbIgMgVIgMAAIAAAVIgHAAIAAg1IATAAQAIAAAFAFQAFAEAAAIQAAAGgDADQgDAEgFABIANAWgAgMAAIAMAAQAGAAADgCQACgDAAgEQAAgKgLAAIgMAAg");
	this.shape_23.setTransform(54,72.9);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgQAbIAAg1IAIAAIAAAuIAZAAIAAAHg");
	this.shape_24.setTransform(45.9,72.9);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AARAbIgGgPIgVAAIgGAPIgIAAIAVg1IAHAAIAVA1gAAIAFIgIgVIgIAVIAQAAg");
	this.shape_25.setTransform(40.4,72.9);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AAPAbIgdgqIAAAqIgIAAIAAg1IAJAAIAdAqIAAgqIAHAAIAAA1g");
	this.shape_26.setTransform(34.4,72.9);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgDAbIAAg1IAHAAIAAA1g");
	this.shape_27.setTransform(30,72.9);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgQAbIAAg1IAhAAIAAAHIgZAAIAAARIAWAAIAAAGIgWAAIAAAXg");
	this.shape_28.setTransform(26.6,72.9);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#2FB7AA").s().p("AmGDAIAAl/IMNAAIAAF/g");
	this.shape_29.setTransform(53.8,85);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgQAYIAAgIQAHAEAIAAQALAAABgHQAAgDgDgDIgFgDIgGgCIgHgCQgDgBgCgDQgCgDAAgEQAAgGAFgFQAEgEAJAAQAHAAAHADIAAAHQgGgDgHAAQgLAAAAAIQAAAAAAABQAAAAAAABQABAAAAABQAAAAABABIAFACIAGADIAHACQADACACADQACADAAAFQAAAHgFAEQgFADgIAAQgIAAgIgDg");
	this.shape_30.setTransform(-35.5,94.9);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgDAbIAAguIgSAAIAAgHIArAAIAAAHIgSAAIAAAug");
	this.shape_31.setTransform(-40.4,94.9);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AgQAbIAAg1IAIAAIAAAuIAZAAIAAAHg");
	this.shape_32.setTransform(-44.9,94.9);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AgPAWQgGgHAAgKIAAgfIAIAAIAAAfQAAAIADADQAEAFAGAAQAHAAAEgFQADgDAAgIIAAgfIAIAAIAAAfQAAAKgGAHQgGAFgKAAQgJAAgGgFg");
	this.shape_33.setTransform(-50.6,95);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AgQAYIAAgIQAHAEAIAAQALAAABgHQAAgDgDgDIgFgDIgGgCIgHgCQgDgBgCgDQgCgDAAgEQAAgGAFgFQAEgEAJAAQAHAAAHADIAAAHQgGgDgHAAQgLAAAAAIQAAAAAAABQAAAAAAABQABAAAAABQAAAAABABIAFACIAGADIAHACQADACACADQACADAAAFQAAAHgFAEQgFADgIAAQgIAAgIgDg");
	this.shape_34.setTransform(-56.1,94.9);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AgQAbIAAg1IAiAAIAAAHIgbAAIAAARIAXAAIAAAGIgXAAIAAAQIAbAAIAAAHg");
	this.shape_35.setTransform(-60.9,94.9);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AAMAbIgMgVIgMAAIAAAVIgIAAIAAg1IAUAAQAIAAAFAFQAGAEAAAIQAAAGgEADQgDAEgGABIAPAWgAgMAAIAMAAQAGAAADgCQACgDAAgEQAAgKgMAAIgLAAg");
	this.shape_36.setTransform(-66,94.9);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AABAbIAAgtIgIAFIAAgIIAHgFIAIAAIAAA1g");
	this.shape_37.setTransform(-74.2,94.9);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AgSAbIAAg1IASAAQAJAAAFAFQAFAEAAAIQAAAIgFAEQgFAEgJAAIgKAAIAAAUgAgKAAIAKAAQAGAAADgBQACgDAAgFQAAgEgCgDQgDgDgGAAIgKAAg");
	this.shape_38.setTransform(-25.1,83.9);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AgGAbIgHgDQgDgCgCgDQgDgCgBgFQgCgFAAgHQAAgGACgEQABgFADgDQACgDADgCIAHgDIAGAAIAHAAQADABADACIAGAFQADADABAFQACAEAAAGQAAAHgCAFQgBAFgDACIgGAFQgDACgDABIgHAAIgGAAgAgEgTIgFABIgEAEIgCAGIgBAIIABAJIACAGIAEAEIAFABIAEABIAFgBIAFgBIAEgEIACgGIABgJIgBgIIgCgGIgEgEIgFgBIgFgBg");
	this.shape_39.setTransform(-31.1,83.9);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AANAbIAAgXIgZAAIAAAXIgHAAIAAg1IAHAAIAAAYIAZAAIAAgYIAHAAIAAA1g");
	this.shape_40.setTransform(-37.2,83.9);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AgQAYIAAgIQAHAEAIAAQALAAABgHQAAgDgDgDIgFgDIgGgCIgHgCQgDgBgCgDQgCgDAAgEQAAgGAFgFQAEgEAJAAQAHAAAHADIAAAHQgGgDgHAAQgLAAAAAIQAAAAAAABQAAAAAAABQAAAAABABQAAAAABABIAFACIAGADIAHACQADACACADQACADAAAFQAAAHgFAEQgFADgIAAQgIAAgIgDg");
	this.shape_41.setTransform(-42.5,83.9);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AANAbIgUgYIgGAGIAAASIgIAAIAAg1IAIAAIAAAaIAYgaIAJAAIgWAZIAYAcg");
	this.shape_42.setTransform(-47.7,83.9);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AAMAbIgMgVIgMAAIAAAVIgHAAIAAg1IATAAQAIAAAFAFQAFAEABAIQgBAGgDADQgDAEgFABIANAWgAgMAAIAMAAQAGAAADgCQACgDAAgEQAAgKgLAAIgMAAg");
	this.shape_43.setTransform(-53.2,83.9);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AgGAbIgHgDQgDgCgCgDQgDgCgBgFQgCgFAAgHQAAgGACgEQABgFADgDQACgDADgCIAHgDIAGAAIAHAAQADABADACIAGAFQADADABAFQACAEAAAGQAAAHgCAFQgBAFgDACIgGAFQgDACgDABIgHAAIgGAAgAgEgTIgFABIgEAEIgCAGIgBAIIABAJIACAGIAEAEIAFABIAEABIAFgBIAFgBIAEgEIACgGIABgJIgBgIIgCgGIgEgEIgFgBIgFgBg");
	this.shape_44.setTransform(-59.4,83.9);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AANAbIgNgoIgMAoIgHAAIgRg1IAHAAIAOAqIANgqIAGAAIAMAqIAOgqIAHAAIgRA1g");
	this.shape_45.setTransform(-66.6,83.9);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("AAPAbIgdgqIAAAqIgIAAIAAg1IAJAAIAdAqIAAgqIAHAAIAAA1g");
	this.shape_46.setTransform(-76.8,83.9);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("AgGAbIgHgDQgDgCgCgDQgDgCgBgFQgCgFAAgHQAAgGACgEQABgFADgDQACgDADgCIAHgDIAGAAIAHAAQADABADACIAGAFQADADABAFQACAEAAAGQAAAHgCAFQgBAFgDACIgGAFQgDACgDABIgHAAIgGAAgAgEgTIgFABIgEAEIgCAGIgBAIIABAJIACAGIAEAEIAFABIAEABIAFgBIAFgBIAEgEIACgGIABgJIgBgIIgCgGIgEgEIgFgBIgFgBg");
	this.shape_47.setTransform(-83.2,83.9);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFFFF").s().p("AgDAbIAAguIgSAAIAAgHIArAAIAAAHIgSAAIAAAug");
	this.shape_48.setTransform(-26,72.9);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFFFF").s().p("AgQAbIAAg1IAhAAIAAAHIgZAAIAAARIAWAAIAAAGIgWAAIAAAXg");
	this.shape_49.setTransform(-30.7,72.9);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFFFFF").s().p("AARAbIgGgPIgVAAIgGAPIgIAAIAVg1IAHAAIAVA1gAAIAFIgIgVIgIAVIAQAAg");
	this.shape_50.setTransform(-36.1,72.9);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFFFFF").s().p("AAMAbIgMgVIgMAAIAAAVIgHAAIAAg1IATAAQAIAAAFAFQAFAEAAAIQAAAGgDADQgDAEgFABIANAWgAgMAAIAMAAQAGAAADgCQACgDAAgEQAAgKgLAAIgMAAg");
	this.shape_51.setTransform(-41.4,72.9);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FFFFFF").s().p("AgUAbIAAg1IARAAQAMAAAFAHQAHAHAAAMQAAANgHAHQgFAHgMAAgAgNAUIAJAAQAIAAAFgFQAEgEAAgLQAAgJgEgFQgFgFgIAAIgJAAg");
	this.shape_52.setTransform(-47.1,72.9);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFFFFF").s().p("AgDAbIAAguIgSAAIAAgHIArAAIAAAHIgSAAIAAAug");
	this.shape_53.setTransform(-55.7,72.9);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FFFFFF").s().p("AAMAbIgMgVIgMAAIAAAVIgIAAIAAg1IAUAAQAIAAAFAFQAGAEAAAIQAAAGgEADQgDAEgGABIAPAWgAgMAAIAMAAQAGAAADgCQACgDAAgEQAAgKgMAAIgLAAg");
	this.shape_54.setTransform(-60.6,72.9);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FFFFFF").s().p("AgGAbIgHgDQgDgCgCgDQgDgCgBgFQgCgFAAgHQAAgGACgEQABgFADgDQACgDADgCIAHgDIAGAAIAHAAQADABADACIAGAFQADADABAFQACAEAAAGQAAAHgCAFQgBAFgDACIgGAFQgDACgDABIgHAAIgGAAgAgEgTIgFABIgEAEIgCAGIgBAIIABAJIACAGIAEAEIAFABIAEABIAFgBIAFgBIAEgEIACgGIABgJIgBgIIgCgGIgEgEIgFgBIgFgBg");
	this.shape_55.setTransform(-66.8,72.9);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FFFFFF").s().p("AgSAbIAAg1IASAAQAJAAAFAFQAFAEAAAIQAAAIgFAEQgFAEgJAAIgKAAIAAAUgAgKAAIAKAAQAGAAADgBQACgDAAgFQAAgEgCgDQgDgDgGAAIgKAAg");
	this.shape_56.setTransform(-72.3,72.9);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FFFFFF").s().p("AgRAbIAAg1IAjAAIAAAHIgbAAIAAARIAXAAIAAAGIgXAAIAAAQIAbAAIAAAHg");
	this.shape_57.setTransform(-77.4,72.9);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#FFFFFF").s().p("AAMAbIgMgVIgMAAIAAAVIgIAAIAAg1IAUAAQAIAAAFAFQAFAEABAIQgBAGgDADQgDAEgGABIAOAWgAgMAAIAMAAQAGAAADgCQACgDAAgEQAAgKgLAAIgMAAg");
	this.shape_58.setTransform(-82.6,72.9);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#2FB7AA").s().p("AmGDAIAAl/IMNAAIAAF/g");
	this.shape_59.setTransform(-54.4,85);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#262733").s().p("AAPAhIgZgeIgHAIIAAAWIgHAAIAAhBIAHAAIAAAiIAfgiIAJAAIgcAfIAeAig");
	this.shape_60.setTransform(53.6,17.3);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#262733").s().p("AgRAaQgIgJAAgRQAAgQAIgJQAIgIAOAAQAJAAAMAFIAAAHQgKgFgKAAQgLAAgGAGQgGAHAAANQAAAPAGAGQAFAGAMAAQALAAAJgEIAAAGQgKAFgLAAQgOAAgIgIg");
	this.shape_61.setTransform(46.6,17.3);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#262733").s().p("AAXAhIgJgUIgbAAIgIAUIgIAAIAahBIAHAAIAaBBgAgLAGIAXAAIgMgeg");
	this.shape_62.setTransform(40,17.3);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#262733").s().p("AgXAhIAAhBIAWAAQAVAAAAASQAAAFgCACIgDAEIgCACQAFABADAEQADAFAAAGQAAAJgGAFQgGAEgMAAgAgQAbIAQAAQAIAAAEgDQAFgDAAgHQAAgHgFgCQgFgDgHAAIgQAAgAgQgDIAQAAQAEAAAFgCQAEgCAAgHQAAgHgEgCQgEgCgFAAIgQAAg");
	this.shape_63.setTransform(33.2,17.3);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#262733").s().p("AgZAhIAAhBIAVAAQAOAAAIAIQAIAIAAAQQAAAhgeAAgAgSAbIANAAQAMAAAGgHQAGgGgBgOQABgMgGgHQgGgHgMAAIgNAAg");
	this.shape_64.setTransform(26.3,17.3);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#262733").s().p("AgUAhIAAhBIApAAIAAAHIgiAAIAAAXIAeAAIAAAGIgeAAIAAAXIAiAAIAAAGg");
	this.shape_65.setTransform(19.4,17.3);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#262733").s().p("AgUAhIAAhBIApAAIAAAHIghAAIAAAXIAdAAIAAAGIgdAAIAAAXIAhAAIAAAGg");
	this.shape_66.setTransform(13.1,17.3);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#262733").s().p("AgTAhIAAhBIAnAAIAAAHIggAAIAAAXIAdAAIAAAGIgdAAIAAAdg");
	this.shape_67.setTransform(7.2,17.3);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#262733").s().p("AAQAhIgQgaIgRAAIAAAaIgHAAIAAhBIAaAAQAKAAAFAFQAFAEAAAKQAAAJgEAEQgEAEgHACIASAbgAgRAAIARAAQAHAAAEgDQAEgCAAgHQAAgGgDgEQgDgDgIAAIgSAAg");
	this.shape_68.setTransform(-2.6,17.3);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#262733").s().p("AgVAaQgIgIAAgSQAAgQAIgIQAHgJAOAAQAPAAAHAJQAIAIAAAQQAAASgIAIQgHAIgPAAQgOAAgHgIgAgQgUQgGAHAAANQAAAOAGAHQAFAHALAAQAMAAAFgHQAGgHAAgOQAAgNgGgHQgFgGgMAAQgLAAgFAGg");
	this.shape_69.setTransform(-10,17.3);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#262733").s().p("AgTAhIAAhBIAnAAIAAAHIggAAIAAAXIAcAAIAAAGIgcAAIAAAdg");
	this.shape_70.setTransform(-16.6,17.3);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#262733").s().p("AgKAhIgKgEIAAgIQAEAEAFABQAEACAHAAQAHAAADgDQAEgDAAgGQAAgEgCgCIgFgEIgHgEIgKgDQgEgBgDgEQgCgEAAgGQAAgFACgDQACgEAEgDQAFgCAGAAIAJABIAJADIAAAIIgKgFIgIgBQgFAAgEADQgDADAAAEQAAAFACACIAEAEIASAGQADACAEAEQACAEAAAGQABAHgGAGQgFAFgLAAQgIAAgCgBg");
	this.shape_71.setTransform(-26.1,17.3);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#262733").s().p("AAPAhIgZgeIgHAIIAAAWIgHAAIAAhBIAHAAIAAAiIAfgiIAJAAIgcAfIAeAig");
	this.shape_72.setTransform(-32.2,17.3);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#262733").s().p("AgKAhIgLgEIAAgIQAFAEAEABQAFACAHAAQAIAAADgDQADgDAAgGQAAgDgCgDIgFgEIgRgHQgEgBgCgEQgDgDAAgHQAAgFACgDQABgDAGgEQAFgCAFAAIAJABIAJADIAAAIIgEgCIgGgDIgHgBQgHAAgCADQgEADAAAEQAAAFACACIAEAEIASAGQAEACADAEQADAEgBAGQAAAIgEAFQgGAFgLAAQgIAAgCgBg");
	this.shape_73.setTransform(-38.8,17.3);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#262733").s().p("AAWAhIgIgUIgbAAIgJAUIgHAAIAahBIAHAAIAaBBgAgLAGIAXAAIgMgeg");
	this.shape_74.setTransform(-45.3,17.3);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#2FB7AA").s().p("AgIAIQgDgDAAgFQAAgEADgEQAFgCADAAQAEAAAEACQAEAFAAADQAAAEgEAEQgEAEgEgBQgEABgEgEg");
	this.shape_75.setTransform(-54.5,17.3);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#262733").s().p("AgLAhIgJgEIAAgIQADADAGACQAEACAHAAQAHAAADgDQAEgDAAgGQAAgEgCgCIgFgEIgRgHQgEgBgDgEQgCgEAAgGQAAgFACgDQACgEAEgDQAFgCAGAAIAJABIAJADIAAAIIgKgFIgIgBQgFAAgEADQgDADAAAEQAAAFACACIAEAEIASAGQADACADAEQADAEAAAGQABAHgGAGQgFAFgLAAIgLgBg");
	this.shape_76.setTransform(44.5,5.3);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#262733").s().p("AgUAhIAAhBIApAAIAAAHIgiAAIAAAXIAeAAIAAAGIgeAAIAAAXIAiAAIAAAGg");
	this.shape_77.setTransform(38.3,5.3);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#262733").s().p("AgDAhIAAg6IgXAAIAAgHIA1AAIAAAHIgXAAIAAA6g");
	this.shape_78.setTransform(32,5.3);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#262733").s().p("AgSAbQgHgIAAgNIAAgnIAHAAIAAAnQAAAVASAAQATAAAAgVIAAgnIAHAAIAAAnQAAANgHAIQgGAHgNAAQgMAAgGgHg");
	this.shape_79.setTransform(25.1,5.3);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#262733").s().p("AATAhIgmg3IAAA3IgHAAIAAhBIAIAAIAmA3IAAg3IAIAAIAABBg");
	this.shape_80.setTransform(17.5,5.3);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#262733").s().p("AgCAhIAAhBIAFAAIAABBg");
	this.shape_81.setTransform(12.2,5.3);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#262733").s().p("AAXAhIAAg2IgXAiIgXghIAAA1IgHAAIAAhBIAIAAIAWAhIAXghIAIAAIAABBg");
	this.shape_82.setTransform(6.6,5.3);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#262733").s().p("AgLAhIgJgEIAAgIQADADAGACQAEACAHAAQAHAAADgDQAEgDAAgGQAAgEgCgCIgFgEIgRgHQgEgBgDgEQgDgEABgGQAAgFABgDQADgEAEgDQAFgCAGAAIAIABIAKADIAAAIIgKgFIgIgBQgFAAgEADQgDADAAAEQAAAFACACIAEAEIASAGQADACADAEQADAEAAAGQABAHgGAGQgFAFgLAAIgLgBg");
	this.shape_83.setTransform(-4,5.3);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#262733").s().p("AgUAhIAAhBIApAAIAAAHIgiAAIAAAXIAeAAIAAAGIgeAAIAAAXIAiAAIAAAGg");
	this.shape_84.setTransform(-10.1,5.3);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#262733").s().p("AgDAhIAAg6IgXAAIAAgHIA1AAIAAAHIgXAAIAAA6g");
	this.shape_85.setTransform(-16.5,5.3);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#262733").s().p("AgDAhIAAhBIAHAAIAABBg");
	this.shape_86.setTransform(-21.1,5.3);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#262733").s().p("AARAhIgRgaIgRAAIAAAaIgHAAIAAhBIAaAAQAKAAAFAFQAFAFAAAJQAAAIgEAFQgEAEgHACIASAbgAgRAAIARAAQAHAAAEgDQAEgDAAgGQAAgGgDgEQgDgDgHAAIgTAAg");
	this.shape_87.setTransform(-25.8,5.3);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#262733").s().p("AASAhIgSg2IgQA2IgIAAIgVhBIAHAAIASA4IASg4IAGAAIARA4IASg4IAHAAIgVBBg");
	this.shape_88.setTransform(-34.6,5.3);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#2FB7AA").s().p("AgHAIQgDgDgBgFQABgEADgDQADgDAEgBQAFABADADQAEAEAAADQAAAFgEADQgDADgFAAQgEAAgDgDg");
	this.shape_89.setTransform(-45.4,5.3);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#262733").s().p("AgmArIAAhVIAjAAQAVAAAKALQALAKAAAVQAAAWgLALQgKAKgVAAgAgRAbIAMAAQAKAAAGgGQAGgHAAgOQAAgNgGgGQgGgHgKAAIgMAAg");
	this.shape_90.setTransform(45.8,-17.7);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#262733").s().p("AAWArIgHgSIgfAAIgGASIgUAAIAhhVIAWAAIAeBVgAgLAJIAVAAIgKgfg");
	this.shape_91.setTransform(35.8,-17.7);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#262733").s().p("AgdArIAAhVIA7AAIAAAQIgmAAIAAATIAhAAIAAAPIghAAIAAATIAmAAIAAAQg");
	this.shape_92.setTransform(26.9,-17.7);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#262733").s().p("AgcArIAAhVIAVAAIAABFIAkAAIAAAQg");
	this.shape_93.setTransform(19,-17.7);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#262733").s().p("AgKArIAAhFIgYAAIAAgQIBFAAIAAAQIgYAAIAABFg");
	this.shape_94.setTransform(6.4,-17.7);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#262733").s().p("AgiAAQAAgsApAAQAOAAAOAGIAAATQgLgJgNAAQgMAAgFAHQgHAHAAAOQAAAQAHAGQAGAHAMAAQAFAAAGgCQAGgCAGgEIAAASQgHADgGABQgGACgJAAQgpAAAAgtg");
	this.shape_95.setTransform(-2.2,-17.7);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#262733").s().p("AgdArIAAhVIA7AAIAAAQIgmAAIAAATIAhAAIAAAPIghAAIAAATIAmAAIAAAQg");
	this.shape_96.setTransform(-10.7,-17.7);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#262733").s().p("AgXAnIAAgTIAIAGQADABAEAAQALAAAAgMIAAg6IAVAAIAAA7QAAAPgIAHQgIAGgLAAQgKAAgKgFg");
	this.shape_97.setTransform(-18.6,-17.6);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#262733").s().p("AgeAiQgLgMAAgWQAAgWALgLQALgLATAAQAUAAALALQALALAAAWQAAAWgLAMQgKALgVAAQgUAAgKgLgAgOgUQgFAGAAAOQAAAPAFAHQAFAGAJAAQAKAAAGgGQAFgHAAgPQAAgPgFgFQgFgHgLAAQgJAAgFAHg");
	this.shape_98.setTransform(-26.9,-17.7);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#262733").s().p("AAMArIgQgdIgNAAIAAAdIgVAAIAAhVIApAAQAPAAAIAHQAJAHgBANQAAAJgEAGQgEAHgKADIAXAhgAgRgBIARAAQALAAABgNQgBgFgCgEQgDgDgFAAIgSAAg");
	this.shape_99.setTransform(-36.3,-17.7);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#262733").s().p("AgjArIAAhVIAmAAQAQAAAIAHQAJAGAAAPQAAAOgJAHQgJAIgPAAIgRAAIAAAcgAgOAAIAPAAQAGAAADgEQADgDAAgGQAAgNgMAAIgPAAg");
	this.shape_100.setTransform(-46,-17.7);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f().s("#3F3B4F").ss(3).p("AtRtRIAAajIajAAIAA6jg");

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#FFFFFF").s().p("AtRNSIAA6jIajAAIAAajg");

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#FFFFFF").s().p("AtRNSIAA6jIajAAIAAajg");
	this.shape_103.setTransform(0,0,1.411,1.411);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.SD19, new cjs.Rectangle(-119.9,-119.9,239.9,239.9), null);


(lib.SD18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgQAYIAAgIQAHAEAIAAQALAAABgHQAAgDgDgDIgFgDIgGgCIgHgCQgDgBgCgDQgCgDAAgEQAAgGAFgFQAEgEAJAAQAHAAAHADIAAAHQgGgDgHAAQgLAAAAAIQAAAAAAABQAAAAAAABQAAAAABABQAAAAABABIAFACIAGADIAHACQADACACADQACADAAAFQAAAHgFAEQgFADgIAAQgIAAgIgDg");
	this.shape.setTransform(27.3,90.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAPAbIgdgqIAAAqIgIAAIAAg1IAJAAIAdAqIAAgqIAHAAIAAA1g");
	this.shape_1.setTransform(21.7,90.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgGAbIgHgDQgDgCgCgDQgDgCgBgFQgCgFAAgHQAAgGACgEQABgFADgDQACgDADgCIAHgDIAGAAIAHAAQADABADACIAGAFQADADABAFQACAEAAAGQAAAHgCAFQgBAFgDACIgGAFQgDACgDABIgHAAIgGAAgAgEgTIgFABIgEAEIgCAGIgBAIIABAJIACAGIAEAEIAFABIAEABIAFgBIAFgBIAEgEIACgGIABgJIgBgIIgCgGIgEgEIgFgBIgFgBg");
	this.shape_2.setTransform(15.4,90.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgDAbIAAg1IAHAAIAAA1g");
	this.shape_3.setTransform(11,90.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgDAbIAAguIgSAAIAAgHIArAAIAAAHIgSAAIAAAug");
	this.shape_4.setTransform(7.3,90.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AARAbIgGgPIgVAAIgGAPIgIAAIAWg1IAGAAIAVA1gAAIAFIgIgVIgIAVIAQAAg");
	this.shape_5.setTransform(2,90.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgCAbIgHgDIgGgFIgDgHQgCgFABgHQgBgGACgEIADgIIAGgFIAHgDIAGAAQAJAAAHADIAAAHQgHgEgIAAQgJAAgEAFQgEAFAAAKQAAALAEAFQAEAFAJAAQAIAAAHgEIAAAHQgHADgJAAIgGAAg");
	this.shape_6.setTransform(-3.5,90.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgDAbIAAg1IAHAAIAAA1g");
	this.shape_7.setTransform(-7.5,90.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgQAbIAAg1IAIAAIAAAuIAZAAIAAAHg");
	this.shape_8.setTransform(-10.8,90.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgSAbIAAg1IASAAQAJAAAFAFQAFAEAAAIQAAAIgFAEQgFAEgJAAIgKAAIAAAUgAgKAAIAKAAQAGAAADgBQADgDgBgFQABgEgDgDQgDgDgGAAIgKAAg");
	this.shape_9.setTransform(-15.8,90.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AASAbIAAgpIgSAXIgRgXIAAApIgHAAIAAg1IAIAAIAQAXIARgXIAIAAIAAA1g");
	this.shape_10.setTransform(-22,90.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgDAbIAAg1IAHAAIAAA1g");
	this.shape_11.setTransform(-26.7,90.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgSAbIAAg1IASAAQAJAAAFAFQAFAEAAAIQAAAIgFAEQgFAEgJAAIgKAAIAAAUgAgKAAIAKAAQAGAAADgBQACgDAAgFQAAgEgCgDQgDgDgGAAIgKAAg");
	this.shape_12.setTransform(33.5,79.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgGAbIgHgDQgDgCgCgDQgDgCgBgFQgCgFAAgHQAAgGACgEQABgFADgDQACgDADgCIAHgDIAGAAIAHAAQADABADACIAGAFQADADABAFQACAEAAAGQAAAHgCAFQgBAFgDACIgGAFQgDACgDABIgHAAIgGAAgAgEgTIgFABIgEAEIgCAGIgBAIIABAJIACAGIAEAEIAFABIAEABIAFgBIAFgBIAEgEIACgGIABgJIgBgIIgCgGIgEgEIgFgBIgFgBg");
	this.shape_13.setTransform(27.5,79.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgDAbIAAguIgSAAIAAgHIArAAIAAAHIgSAAIAAAug");
	this.shape_14.setTransform(21.9,79.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AAMAbIgMgVIgMAAIAAAVIgHAAIAAg1IATAAQAIAAAFAFQAFAEABAIQgBAGgDADQgDAEgFABIANAWgAgMAAIAMAAQAGAAADgCQACgDAAgEQAAgKgLAAIgMAAg");
	this.shape_15.setTransform(13.8,79.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgGAbIgHgDQgDgCgCgDQgDgCgBgFQgCgFAAgHQAAgGACgEQABgFADgDQACgDADgCIAHgDIAGAAIAHAAQADABADACIAGAFQADADABAFQACAEAAAGQAAAHgCAFQgBAFgDACIgGAFQgDACgDABIgHAAIgGAAgAgEgTIgFABIgEAEIgCAGIgBAIIABAJIACAGIAEAEIAFABIAEABIAFgBIAFgBIAEgEIACgGIABgJIgBgIIgCgGIgEgEIgFgBIgFgBg");
	this.shape_16.setTransform(7.7,79.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgQAbIAAg1IAhAAIAAAHIgZAAIAAARIAWAAIAAAGIgWAAIAAAXg");
	this.shape_17.setTransform(2.3,79.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AAOAbIgOgVIgNAVIgJAAIATgbIgTgaIAJAAIANAUIAOgUIAJAAIgTAaIATAbg");
	this.shape_18.setTransform(-5.9,79.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgDAbIAAg1IAHAAIAAA1g");
	this.shape_19.setTransform(-9.8,79.8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AAMAbIgMgVIgMAAIAAAVIgIAAIAAg1IAUAAQAIAAAFAFQAGAEgBAIQAAAGgDADQgEAEgFABIAPAWgAgMAAIAMAAQAGAAACgCQADgDAAgEQAAgKgMAAIgLAAg");
	this.shape_20.setTransform(-13.6,79.8);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgDAbIAAguIgSAAIAAgHIArAAIAAAHIgSAAIAAAug");
	this.shape_21.setTransform(-19,79.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AARAbIgGgPIgVAAIgGAPIgIAAIAVg1IAHAAIAVA1gAAIAFIgIgVIgHAVIAPAAg");
	this.shape_22.setTransform(-24.3,79.8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AASAbIAAgpIgSAXIgRgXIAAApIgHAAIAAg1IAIAAIAQAXIARgXIAIAAIAAA1g");
	this.shape_23.setTransform(-30.6,79.8);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#2FB7AA").s().p("AmGDAIAAl/IMNAAIAAF/g");
	this.shape_24.setTransform(1.1,84.9);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#262733").s().p("AgKAhIgKgEIAAgIQADADAGACQAFACAGAAQAHAAAEgDQADgEABgFIgCgGIgGgFIgHgDIgKgDQgEgCgDgEQgCgDAAgGQAAgEACgFQACgDAFgDQAFgCAFgBIAJABIAJAFIAAAGIgLgEIgHgBQgFAAgEADQgDAEAAADQAAAEACADIAEADIASAHQAEABADAEQADAFAAAGQgBAHgFAGQgFAGgLAAQgGAAgEgCg");
	this.shape_25.setTransform(46.2,38.2);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#262733").s().p("AARAiIgRgbIgQAAIAAAbIgIAAIAAhDIAaAAQALAAAEAGQAFAEAAAKQAAAIgEAFQgDAEgIABIASAdgAgQAAIAQAAQAIAAADgDQAEgDAAgHQAAgGgDgEQgDgCgHAAIgSAAg");
	this.shape_26.setTransform(39.9,38.2);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#262733").s().p("AgWAaQgHgIAAgSQAAgQAHgJQAJgJANAAQAPAAAHAJQAIAJAAAQQAAASgIAIQgHAIgPABQgNgBgJgIgAgQgUQgGAHAAANQAAAOAGAHQAFAGALABQALgBAHgGQAEgHAAgOQAAgOgEgGQgHgHgLABQgLgBgFAHg");
	this.shape_27.setTransform(32.5,38.2);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#262733").s().p("AgDAiIAAg7IgXAAIAAgIIA1AAIAAAIIgYAAIAAA7g");
	this.shape_28.setTransform(25.6,38.2);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#262733").s().p("AgRAaQgIgJAAgRQAAgPAIgJQAIgJAOAAQAJAAAMAFIAAAHQgKgFgKAAQgLAAgGAGQgGAHAAANQAAAPAGAGQAGAHALAAQAKAAAKgFIAAAHQgLAEgKAAQgOAAgIgIg");
	this.shape_29.setTransform(19.1,38.2);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#262733").s().p("AAXAiIgIgWIgcAAIgIAWIgIAAIAbhDIAGAAIAaBDgAgKAFIAWAAIgMgdg");
	this.shape_30.setTransform(12.4,38.2);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#262733").s().p("AgTAiIAAhDIAnAAIAAAIIghAAIAAAWIAeAAIAAAGIgeAAIAAAfg");
	this.shape_31.setTransform(6.8,38.2);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#262733").s().p("AgUAiIAAhDIApAAIAAAIIgiAAIAAAWIAeAAIAAAGIgeAAIAAAYIAiAAIAAAHg");
	this.shape_32.setTransform(-2.8,38.2);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#262733").s().p("AgKAhIgLgEIAAgIQAFADAEACQAFACAHAAQAHAAADgDQAEgEAAgFQAAgEgCgCIgFgFIgRgGQgEgBgDgFQgCgEAAgFIACgJQACgDAEgDQAGgCAFgBIAJABIAJAFIAAAGIgKgEIgHgBQgGAAgEADQgDADAAAEQAAAEACADIAEADIASAHQADABAEAEQACAFAAAGQABAGgGAHQgFAGgLAAQgHAAgDgCg");
	this.shape_33.setTransform(-9,38.2);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#262733").s().p("AgVAaQgIgIAAgSQAAgQAIgJQAHgJAOAAQAPAAAIAJQAHAJAAAQQAAASgHAIQgIAIgPABQgOgBgHgIgAgQgUQgGAGABAOQgBAPAGAGQAFAGALABQAMgBAFgGQAGgHAAgOQAAgNgGgHQgFgHgMABQgLgBgFAHg");
	this.shape_34.setTransform(-15.9,38.2);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#262733").s().p("AgWAaQgHgIAAgSQAAgQAHgJQAIgJAOAAQAPAAAHAJQAIAJAAAQQAAASgIAIQgHAIgPABQgOgBgIgIgAgQgUQgFAHgBANQABAOAFAHQAFAGALABQAMgBAFgGQAFgGAAgPQAAgOgFgGQgFgHgMABQgLgBgFAHg");
	this.shape_35.setTransform(-23.6,38.2);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#262733").s().p("AASAiIAAgfIgiAAIAAAfIgIAAIAAhDIAIAAIAAAeIAiAAIAAgeIAHAAIAABDg");
	this.shape_36.setTransform(-31.1,38.2);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#262733").s().p("AgQAaQgJgIABgSQgBgQAJgIQAHgJAOAAQAKAAAKAFIAAAHQgIgFgLAAQgMAAgFAGQgGAHAAANQAAAPAGAGQAFAHAMAAQALAAAIgFIAAAHQgJAEgLAAQgOAAgHgIg");
	this.shape_37.setTransform(-38,38.2);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#2FB7AA").s().p("AgHAIQgEgDAAgFQAAgEAEgDQADgDAEAAQAFAAADADQADADABAEQgBAFgDADQgDADgFAAQgEAAgDgDg");
	this.shape_38.setTransform(-47.1,38.2);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#262733").s().p("AgKArIAAhFIgYAAIAAgRIBFAAIAAARIgZAAIAABFg");
	this.shape_39.setTransform(43.6,15.2);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#262733").s().p("AgQAsQgIgBgFgEIAAgUQAGAFAHADQAJACAGAAQALAAAAgJQAAgEgEgCIgMgGIgFgBQgJgDgFgFQgGgFAAgLQAAgGAEgHQAEgGAHgEQAIgEAKAAQAIAAAFABIAMAFIAAAUIgMgHQgHgDgGAAQgEAAgEACQgDACAAAFQAAAEACABIAFAEIAJADQAJADAEACQAFACADAFQAEAGAAAGQAAAIgEAHQgEAGgHAEQgHADgKAAIgQgBg");
	this.shape_40.setTransform(35.4,15.2);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#262733").s().p("AgJArIAAhWIATAAIAABWg");
	this.shape_41.setTransform(29,15.2);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#262733").s().p("AgcArIAAhWIAVAAIAABGIAkAAIAAAQg");
	this.shape_42.setTransform(23,15.2);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#262733").s().p("AgTAHIAAgNIAnAAIAAANg");
	this.shape_43.setTransform(15.5,15.5);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#262733").s().p("AgJArIAAhFIgZAAIAAgRIBFAAIAAARIgYAAIAABFg");
	this.shape_44.setTransform(8,15.2);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#262733").s().p("AAMArIgQgdIgNAAIAAAdIgVAAIAAhWIApAAQAPABAJAGQAHAHAAAOQABAJgFAGQgEAHgJACIAWAigAgRgBIARAAQAMAAAAgNQAAgGgDgDQgDgDgFAAIgSAAg");
	this.shape_45.setTransform(-0.7,15.2);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#262733").s().p("AgeAiQgLgMAAgWQAAgVALgLQALgMATAAQAUAAALALQALALAAAWQAAAWgKAMQgLALgVAAQgTAAgLgLgAgOgUQgFAGAAAOQAAAPAFAHQAFAGAJAAQAKAAAGgGQAFgHAAgPQAAgOgFgGQgFgHgLAAQgJAAgFAHg");
	this.shape_46.setTransform(-11,15.2);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#262733").s().p("AAQArIAAgiIgfAAIAAAiIgVAAIAAhWIAVAAIAAAjIAfAAIAAgjIAVAAIAABWg");
	this.shape_47.setTransform(-21,15.2);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#262733").s().p("AgQAsQgHgBgGgEIAAgUQAHAFAGADQAIACAHAAQALAAAAgJQAAgEgEgCIgMgGIgEgBQgKgDgFgFQgGgFABgLQAAgIADgFQAEgHAHgDQAJgEAJAAQAIAAAFABIAMAFIAAAUIgMgHQgGgDgHAAQgFAAgDACQgDACAAAFQAAAEACABIAFAEIAJADQAIACAFADQAFACADAFQADAFABAHQAAAIgEAHQgEAGgGAEQgIADgKAAIgQgBg");
	this.shape_48.setTransform(-30,15.2);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#262733").s().p("AAWArIgHgTIgfAAIgGATIgUAAIAhhWIAWAAIAeBWgAgLAJIAVAAIgKgfg");
	this.shape_49.setTransform(-43.2,15.2);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#262733").s().p("AgKAsIAAhGIgYAAIAAgRIBFAAIAAARIgYAAIAABGg");
	this.shape_50.setTransform(37.6,-0.4);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#262733").s().p("AgiAAQAAgsApAAQANAAAPAGIAAATQgMgJgMAAQgMAAgFAHQgHAHAAAOQAAAQAHAGQAGAHAMAAQAFAAAFgCQAHgCAGgEIAAASIgNAFIgPABQgpAAAAgtg");
	this.shape_51.setTransform(28.9,-0.4);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#262733").s().p("AgdAsIAAhXIA7AAIAAARIgmAAIAAASIAhAAIAAAQIghAAIAAATIAmAAIAAARg");
	this.shape_52.setTransform(20.4,-0.4);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#262733").s().p("AgcAsIAAhXIAVAAIAABGIAkAAIAAARg");
	this.shape_53.setTransform(12.6,-0.4);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#262733").s().p("AgdAsIAAhXIA7AAIAAARIgmAAIAAASIAhAAIAAAQIghAAIAAATIAmAAIAAARg");
	this.shape_54.setTransform(4.2,-0.4);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#262733").s().p("AgPAsQgJgBgFgEIAAgUQAGAFAHADQAIACAHAAQALAAAAgJQAAgEgEgCIgLgGIgGgBQgJgDgFgFQgFgFAAgLQAAgIADgFQAEgHAIgDQAHgEAKAAQAIAAAFABIAMAFIAAAUIgMgHQgHgDgFAAQgGAAgCACQgEACAAAFQAAAEACABIAFAEIAJADQAIACAFADQAFACAEAFQADAFAAAHQgBAIgDAHQgEAGgHAEQgGADgLAAIgPgBg");
	this.shape_55.setTransform(-4,-0.4);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#262733").s().p("AgmAsIAAhXIAjAAQAVAAALALQAKALAAAVQAAAWgKALQgMAKgUABgAgRAbIALAAQAMAAAFgHQAHgGAAgOQAAgNgHgGQgFgHgMAAIgLAAg");
	this.shape_56.setTransform(-17.1,-0.4);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#262733").s().p("AAWAsIgng0IAAA0IgUAAIAAhXIASAAIAmAzIAAgzIATAAIAABXg");
	this.shape_57.setTransform(-27.3,-0.4);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#262733").s().p("AAWAsIgHgTIgfAAIgGATIgUAAIAhhXIAWAAIAeBXgAgLAJIAVAAIgKggg");
	this.shape_58.setTransform(-37.2,-0.4);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#262733").s().p("AAWArIgngzIAAAzIgUAAIAAhVIASAAIAmAyIAAgyIATAAIAABVg");
	this.shape_59.setTransform(68.8,-16);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#262733").s().p("AgeAiQgMgLAAgXQAAgUAMgMQAKgMAUAAQAUAAALALQAMALAAAWQgBAWgKALQgMAMgUAAQgTAAgLgLgAgPgVQgEAHAAAOQAAAPAEAGQAGAHAJAAQAKAAAGgHQAEgGAAgPQAAgOgEgHQgGgGgKAAQgJAAgGAGg");
	this.shape_60.setTransform(58.7,-16);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#262733").s().p("AgJArIAAhVIATAAIAABVg");
	this.shape_61.setTransform(51.3,-16);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#262733").s().p("AgKArIAAhFIgYAAIAAgQIBFAAIAAAQIgZAAIAABFg");
	this.shape_62.setTransform(44.8,-16);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#262733").s().p("AAWArIgHgTIgfAAIgGATIgUAAIAghVIAWAAIAfBVgAgLAJIAVAAIgKggg");
	this.shape_63.setTransform(36.6,-16);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#262733").s().p("AgiAAQAAgsAqAAQALAAAQAGIAAATQgNgJgLAAQgLAAgGAHQgHAHAAAOQAAAQAHAGQAFAHAMAAQAGAAAFgCQAGgCAHgEIAAASIgNAFIgOABQgqAAAAgtg");
	this.shape_64.setTransform(27.3,-16);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#262733").s().p("AgJArIAAhVIAUAAIAABVg");
	this.shape_65.setTransform(20.7,-16);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#262733").s().p("AgcArIAAhVIAVAAIAABFIAkAAIAAAQg");
	this.shape_66.setTransform(14.7,-16);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#262733").s().p("AgjArIAAhVIAmAAQAQgBAIAIQAJAGAAAPQAAAOgJAHQgJAIgPAAIgRAAIAAAcgAgOgBIAPAAQAGAAADgDQADgDAAgGQAAgNgMAAIgPAAg");
	this.shape_67.setTransform(6,-16);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#262733").s().p("AAZArIAAg5IgZAhIgYghIAAA5IgVAAIAAhVIAWAAIAXAiIAZgiIAVAAIAABVg");
	this.shape_68.setTransform(-4.6,-16);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#262733").s().p("AgJArIAAhVIAUAAIAABVg");
	this.shape_69.setTransform(-12.7,-16);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#262733").s().p("AARArIgRg3IgQA3IgVAAIgYhVIAXAAIANA7IASg7IAPAAIASA8IANg8IAXAAIgYBVg");
	this.shape_70.setTransform(-26.2,-16);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#262733").s().p("AgcArIAAhVIA5AAIAAAQIglAAIAAATIAhAAIAAAPIghAAIAAATIAlAAIAAAQg");
	this.shape_71.setTransform(-37.2,-16);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#262733").s().p("AgJArIAAhVIATAAIAABVg");
	this.shape_72.setTransform(-43.7,-16);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#262733").s().p("AgLArIghhVIAZAAIAUA+IAVg+IAWAAIgiBVg");
	this.shape_73.setTransform(-50.9,-16);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#262733").s().p("AgdArIAAhVIA7AAIAAAQIgmAAIAAATIAhAAIAAAPIghAAIAAATIAmAAIAAAQg");
	this.shape_74.setTransform(-60,-16);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#262733").s().p("AAMArIgQgeIgNAAIAAAeIgVAAIAAhVIApAAQAPgBAIAIQAJAGgBAOQAAAJgEAGQgFAGgIAEIAWAhgAgRgBIARAAQAMAAAAgNQAAgFgDgEQgDgDgGAAIgRAAg");
	this.shape_75.setTransform(-68.9,-16);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#262733").s().p("AgVAdIAAgOIAJAFQAEACAFAAQAFAAADgCQADgCAAgEQAAgJgLAAIgKAAIAAgLIAKAAQAEAAACgCQACgCAAgDQAAgEgCgCQgEgCgDAAIgIABIgJAEIAAgNIAJgDIAJgBQAKAAAGAFQAHAEAAAJQAAAEgCADIgEAEIgEACIAGADIAFAFQABAEABAFQAAAKgIAEQgHAFgKAAQgKAAgJgFg");
	this.shape_76.setTransform(33.8,-40.6);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#262733").s().p("AARAhIgegoIAAAoIgPAAIAAhBIAOAAIAcAnIAAgnIAPAAIAABBg");
	this.shape_77.setTransform(23.4,-40.6);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#262733").s().p("AgXAaQgJgJAAgRQAAgRAJgIQAIgJAPAAQAPAAAJAJQAIAIAAARQAAAQgIAKQgJAIgPAAQgPAAgIgIgAgLgQQgEAGAAAKQAAALAEAFQAEAFAHABQAIgBADgFQAEgEAAgMQAAgLgDgFQgFgEgHAAQgHAAgEAEg");
	this.shape_78.setTransform(15.6,-40.6);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#262733").s().p("AgHAhIAAhBIAPAAIAABBg");
	this.shape_79.setTransform(9.9,-40.6);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#262733").s().p("AgMAiQgGgBgEgDIAAgPQAFAEAFABQAFACAHAAQAHAAABgHQAAgCgEgDIgMgFQgGgCgFgDQgEgEgBgIQAAgGAEgFQADgFAFgDQAGgDAHAAIAKABIAJAEIAAAPIgJgFIgJgCQgEAAgCACQgDABAAAEQAAAAAAABQAAABABAAQAAABAAAAQABAAAAABIAEACIAHADIAKAEQAEABACAEQADAEAAAFQAAAHgEAEQgCAFgGADQgGADgHAAIgMgBg");
	this.shape_80.setTransform(5,-40.6);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#262733").s().p("AgMAiQgGgBgEgDIAAgPQAFAEAFABQAFACAGAAQAJAAAAgHQAAgCgDgDIgNgFQgGgBgFgEQgEgEAAgIQAAgGADgFQACgFAGgDQAGgDAHAAIALABIAJAEIAAAPIgJgFIgKgCQgEAAgCACQgDABAAAEQAAAAAAABQAAABABAAQAAABAAAAQAAAAABABIAEACIAGADIALAEQAEABACAEQACADAAAGQAAAGgCAFQgDAFgGADQgGADgHAAIgMgBg");
	this.shape_81.setTransform(-1.3,-40.6);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#262733").s().p("AgWAhIAAhBIAtAAIAAAMIgdAAIAAAPIAZAAIAAALIgZAAIAAAPIAdAAIAAAMg");
	this.shape_82.setTransform(-7.6,-40.6);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#262733").s().p("AgMAiQgGgBgEgDIAAgPQAFAEAFABQAFACAGAAQAJAAAAgHQAAgCgDgDIgNgFQgGgBgFgEQgEgEAAgIQAAgGADgFQACgFAGgDQAGgDAHAAIALABIAJAEIAAAPIgJgFIgKgCQgEAAgCACQgDABAAAEQAAAAAAABQAAABABAAQAAABAAAAQAAAAABABIAEACIAGADIALAEQAEABACAEQACADAAAGQAAAGgCAFQgDAFgGADQgGADgHAAIgMgBg");
	this.shape_83.setTransform(-14,-40.6);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#262733").s().p("AgMAiQgGgBgEgDIAAgPQAFAEAFABQAGACAFAAQAJAAgBgHQAAgCgCgDIgNgFQgHgCgEgDQgFgEABgIQAAgGADgFQACgFAGgDQAGgDAHAAIALABIAJAEIAAAPIgJgFIgKgCQgEAAgCACQgDABAAAEQAAAAAAABQAAAAABABQAAAAAAABQAAAAABABIAEACIAHADIAJAEQAFABACAEQACAEABAFQAAAHgDAEQgEAFgEADQgHADgHAAIgMgBg");
	this.shape_84.setTransform(-23.5,-40.6);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#262733").s().p("AANAhIgNgqIgMAqIgRAAIgShBIASAAIAKAtIAOgtIALAAIAOAuIAKguIASAAIgTBBg");
	this.shape_85.setTransform(-31.9,-40.6);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f().s("#3F3B4F").ss(3).p("AtRtRIAAajIajAAIAA6jg");
	this.shape_86.setTransform(0,-0.1);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#FFFFFF").s().p("AtRNSIAA6jIajAAIAAajg");
	this.shape_87.setTransform(0,-0.1);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#FFFFFF").s().p("AtRNSIAA6jIajAAIAAajg");
	this.shape_88.setTransform(0,0,1.412,1.412);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.SD18, new cjs.Rectangle(-120,-120,240,240), null);


(lib.SD17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// MATRIX WITH RELEVANCE AND CERTAINTY CRITERIA ADDED
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgUAbIAAg1IARAAQALAAAHAHQAGAHAAAMQAAANgGAHQgHAHgLAAgAgMAUIAIAAQAIAAAFgFQAFgEAAgLQAAgJgFgFQgFgFgIAAIgIAAg");
	this.shape.setTransform(11.8,95);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgQAbIAAg1IAiAAIAAAHIgbAAIAAARIAXAAIAAAGIgXAAIAAAQIAbAAIAAAHg");
	this.shape_1.setTransform(6.4,95);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgUAbIAAg1IARAAQAMAAAFAHQAHAHAAAMQAAANgHAHQgFAHgMAAgAgNAUIAJAAQAIAAAFgFQAEgEAAgLQAAgJgEgFQgFgFgIAAIgJAAg");
	this.shape_2.setTransform(1,95);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgUAbIAAg1IARAAQAMAAAFAHQAHAHAAAMQAAANgHAHQgFAHgMAAgAgNAUIAJAAQAIAAAFgFQAFgEgBgLQABgJgFgFQgFgFgIAAIgJAAg");
	this.shape_3.setTransform(-4.7,95);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AARAbIgGgPIgVAAIgGAPIgIAAIAVg1IAGAAIAWA1gAAJAFIgJgVIgHAVIAQAAg");
	this.shape_4.setTransform(-10.6,95);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AARAbIgGgPIgVAAIgGAPIgIAAIAVg1IAHAAIAVA1gAAIAFIgIgVIgHAVIAPAAg");
	this.shape_5.setTransform(50.9,84);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgDAbIAAg1IAHAAIAAA1g");
	this.shape_6.setTransform(46.8,84);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAMAbIgMgVIgMAAIAAAVIgHAAIAAg1IATAAQAIAAAFAFQAGAEgBAIQABAGgEADQgEAEgFABIAPAWgAgMAAIAMAAQAGAAACgCQADgDAAgEQAAgKgMAAIgLAAg");
	this.shape_7.setTransform(43,84);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgRAbIAAg1IAiAAIAAAHIgaAAIAAARIAXAAIAAAGIgXAAIAAAQIAaAAIAAAHg");
	this.shape_8.setTransform(37.7,84);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgDAbIAAguIgSAAIAAgHIArAAIAAAHIgSAAIAAAug");
	this.shape_9.setTransform(32.6,84);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgDAbIAAg1IAHAAIAAA1g");
	this.shape_10.setTransform(28.9,84);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AAMAbIgMgVIgMAAIAAAVIgHAAIAAg1IATAAQAIAAAFAFQAFAEABAIQgBAGgDADQgDAEgFABIANAWgAgMAAIAMAAQAGAAADgCQACgDAAgEQAAgKgLAAIgMAAg");
	this.shape_11.setTransform(25.2,84);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgCAbIgGgDIgHgFQgCgCgBgFQgCgFAAgHQAAgGACgEIADgIIAHgFIAGgDIAGAAQAIAAAJADIAAAHQgJgEgHAAQgIAAgFAFQgEAFAAAKQAAALAEAFQAFAFAIAAQAHAAAJgEIAAAHQgJADgIAAIgGAAg");
	this.shape_12.setTransform(19.6,84);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgDAbIAAgYIgUgdIAJAAIAOAWIAPgWIAJAAIgUAdIAAAYg");
	this.shape_13.setTransform(11.1,84);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgDAbIAAguIgSAAIAAgHIArAAIAAAHIgSAAIAAAug");
	this.shape_14.setTransform(5.9,84);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AAPAbIgdgqIAAAqIgIAAIAAg1IAJAAIAdAqIAAgqIAHAAIAAA1g");
	this.shape_15.setTransform(0.3,84);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgDAbIAAg1IAHAAIAAA1g");
	this.shape_16.setTransform(-4.1,84);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AARAbIgGgPIgVAAIgGAPIgIAAIAVg1IAHAAIAVA1gAAIAFIgIgVIgIAVIAQAAg");
	this.shape_17.setTransform(-8.2,84);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgDAbIAAguIgSAAIAAgHIArAAIAAAHIgSAAIAAAug");
	this.shape_18.setTransform(-13.5,84);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AAMAbIgMgVIgMAAIAAAVIgIAAIAAg1IAUAAQAIAAAFAFQAGAEAAAIQAAAGgEADQgEAEgFABIAPAWgAgMAAIAMAAQAGAAACgCQADgDAAgEQAAgKgMAAIgLAAg");
	this.shape_19.setTransform(-18.4,84);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgQAbIAAg1IAiAAIAAAHIgbAAIAAARIAXAAIAAAGIgXAAIAAAQIAbAAIAAAHg");
	this.shape_20.setTransform(-23.7,84);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgCAbIgGgDIgHgFQgCgCgBgFQgCgFAAgHQAAgGACgEIADgIIAHgFIAGgDIAGAAQAIAAAIADIAAAHQgIgEgHAAQgIAAgFAFQgEAFAAAKQAAALAEAFQAFAFAIAAQAHAAAIgEIAAAHQgIADgIAAIgGAAg");
	this.shape_21.setTransform(-29,84);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgUAbIAAg1IARAAQALAAAHAHQAGAHAAAMQAAANgGAHQgHAHgLAAgAgMAUIAIAAQAIAAAFgFQAFgEAAgLQAAgJgFgFQgFgFgIAAIgIAAg");
	this.shape_22.setTransform(-37.6,84);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AAPAbIgdgqIAAAqIgIAAIAAg1IAJAAIAdAqIAAgqIAHAAIAAA1g");
	this.shape_23.setTransform(-43.8,84);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AARAbIgGgPIgVAAIgGAPIgIAAIAWg1IAGAAIAVA1gAAIAFIgIgVIgIAVIAQAAg");
	this.shape_24.setTransform(-49.8,84);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgRAbIAAg1IAiAAIAAAHIgaAAIAAARIAXAAIAAAGIgXAAIAAAQIAaAAIAAAHg");
	this.shape_25.setTransform(51.2,73);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgCAbIgHgDIgFgFQgCgCgCgFQgBgFgBgHQABgGABgEIAEgIIAFgFIAHgDIAGAAQAIAAAJADIAAAHQgJgEgHAAQgJAAgEAFQgEAFAAAKQAAALAEAFQAEAFAJAAQAHAAAJgEIAAAHQgJADgIAAIgGAAg");
	this.shape_26.setTransform(45.9,73);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AAPAbIgdgqIAAAqIgIAAIAAg1IAJAAIAdAqIAAgqIAHAAIAAA1g");
	this.shape_27.setTransform(40,73);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AARAbIgGgPIgVAAIgGAPIgIAAIAWg1IAGAAIAVA1gAAIAFIgIgVIgIAVIAQAAg");
	this.shape_28.setTransform(34,73);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgDAbIgUg1IAIAAIAPArIAQgrIAIAAIgUA1g");
	this.shape_29.setTransform(28.5,73);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgQAbIAAg1IAhAAIAAAHIgaAAIAAARIAXAAIAAAGIgXAAIAAAQIAaAAIAAAHg");
	this.shape_30.setTransform(23.4,73);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgQAbIAAg1IAHAAIAAAuIAaAAIAAAHg");
	this.shape_31.setTransform(18.7,73);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AgRAbIAAg1IAiAAIAAAHIgaAAIAAARIAXAAIAAAGIgXAAIAAAQIAaAAIAAAHg");
	this.shape_32.setTransform(13.8,73);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AAMAbIgMgVIgMAAIAAAVIgHAAIAAg1IATAAQAIAAAFAFQAFAEAAAIQAAAGgDADQgEAEgEABIANAWgAgMAAIAMAAQAGAAACgCQADgDAAgEQAAgKgLAAIgMAAg");
	this.shape_33.setTransform(8.6,73);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AANAbIAAgXIgZAAIAAAXIgHAAIAAg1IAHAAIAAAYIAZAAIAAgYIAHAAIAAA1g");
	this.shape_34.setTransform(-0.3,73);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AgDAbIAAguIgSAAIAAgHIArAAIAAAHIgSAAIAAAug");
	this.shape_35.setTransform(-5.7,73);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AgDAbIAAg1IAHAAIAAA1g");
	this.shape_36.setTransform(-9.4,73);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AANAbIgNgoIgLAoIgIAAIgRg1IAIAAIANAqIANgqIAGAAIAMAqIANgqIAIAAIgRA1g");
	this.shape_37.setTransform(-14.7,73);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AAOAbIgOgVIgNAVIgJAAIATgbIgTgaIAJAAIANAUIAOgUIAJAAIgTAaIATAbg");
	this.shape_38.setTransform(-24.4,73);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AgDAbIAAg1IAHAAIAAA1g");
	this.shape_39.setTransform(-28.3,73);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AAMAbIgMgVIgMAAIAAAVIgIAAIAAg1IAUAAQAIAAAFAFQAGAEgBAIQAAAGgDADQgEAEgFABIAPAWgAgMAAIAMAAQAGAAACgCQADgDAAgEQAAgKgMAAIgLAAg");
	this.shape_40.setTransform(-32,73);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AgDAbIAAguIgSAAIAAgHIArAAIAAAHIgSAAIAAAug");
	this.shape_41.setTransform(-37.4,73);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AARAbIgGgPIgVAAIgGAPIgIAAIAVg1IAHAAIAVA1gAAIAFIgIgVIgHAVIAPAAg");
	this.shape_42.setTransform(-42.7,73);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AASAbIAAgpIgSAXIgRgXIAAApIgHAAIAAg1IAIAAIAQAXIARgXIAIAAIAAA1g");
	this.shape_43.setTransform(-49,73);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer 3
	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#2FB7AA").s().p("AmGDAIAAl/IMNAAIAAF/g");
	this.shape_44.setTransform(0.7,85,1.549,1);

	this.timeline.addTween(cjs.Tween.get(this.shape_44).wait(1));

	// Layer 4
	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#262733").s().p("AAXAiIgIgWIgcAAIgIAWIgIAAIAbhDIAGAAIAaBDgAgKAFIAWAAIgMgdg");
	this.shape_45.setTransform(70.4,34.7);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#262733").s().p("AgDAiIAAhDIAHAAIAABDg");
	this.shape_46.setTransform(65.5,34.7);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#262733").s().p("AAQAiIgQgbIgRAAIAAAbIgHAAIAAhDIAbAAQAJAAAFAGQAFAEAAAKQAAAHgEAGQgFAEgGABIASAdgAgRAAIARAAQAIAAADgDQAEgDAAgHQAAgFgDgFQgDgCgHAAIgTAAg");
	this.shape_47.setTransform(60.8,34.7);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#262733").s().p("AgUAiIAAhDIApAAIAAAIIgiAAIAAAWIAeAAIAAAGIgeAAIAAAYIAiAAIAAAHg");
	this.shape_48.setTransform(54.1,34.7);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#262733").s().p("AgDAiIAAg7IgXAAIAAgIIA1AAIAAAIIgXAAIAAA7g");
	this.shape_49.setTransform(47.7,34.7);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#262733").s().p("AgCAiIAAhDIAFAAIAABDg");
	this.shape_50.setTransform(43.1,34.7);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#262733").s().p("AAQAiIgQgbIgRAAIAAAbIgHAAIAAhDIAaAAQAKAAAFAGQAFAFAAAJQAAAHgEAGQgFAEgGABIASAdgAgRAAIARAAQAHAAAEgDQADgDABgHQAAgFgDgFQgEgCgHAAIgSAAg");
	this.shape_51.setTransform(38.5,34.7);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#262733").s().p("AgRAaQgIgIAAgSQAAgQAIgIQAIgJAOAAQAJAAAMAFIAAAHQgKgFgKAAQgMAAgFAGQgGAHAAANQAAAPAGAGQAFAHAMAAQAKAAAKgFIAAAHQgLAEgKAAQgOAAgIgIg");
	this.shape_52.setTransform(31.5,34.6);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#262733").s().p("AgCAiIAAggIgagjIAJAAIATAeIAUgeIAJAAIgZAjIAAAgg");
	this.shape_53.setTransform(21.5,34.7);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#262733").s().p("AgDAiIAAg7IgXAAIAAgIIA1AAIAAAIIgXAAIAAA7g");
	this.shape_54.setTransform(15.1,34.7);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#262733").s().p("AAUAiIgog4IAAA4IgHAAIAAhDIAIAAIAoA4IAAg4IAHAAIAABDg");
	this.shape_55.setTransform(8.1,34.7);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#262733").s().p("AgDAiIAAhDIAHAAIAABDg");
	this.shape_56.setTransform(2.7,34.7);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#262733").s().p("AAWAiIgIgWIgbAAIgJAWIgHAAIAahDIAGAAIAbBDgAgLAFIAXAAIgMgdg");
	this.shape_57.setTransform(-2.2,34.7);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#262733").s().p("AgDAiIAAg7IgXAAIAAgIIA1AAIAAAIIgXAAIAAA7g");
	this.shape_58.setTransform(-8.2,34.7);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#262733").s().p("AAQAiIgQgbIgRAAIAAAbIgHAAIAAhDIAbAAQAJAAAFAGQAFAEAAAKQAAAHgEAGQgEAEgHABIASAdgAgRAAIARAAQAIAAADgDQAEgDAAgHQAAgFgDgFQgDgCgHAAIgTAAg");
	this.shape_59.setTransform(-14.4,34.7);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#262733").s().p("AgUAiIAAhDIApAAIAAAIIgiAAIAAAWIAeAAIAAAGIgeAAIAAAYIAiAAIAAAHg");
	this.shape_60.setTransform(-21.1,34.7);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#262733").s().p("AgRAaQgIgIAAgSQAAgQAIgIQAIgJAOAAQAJAAAMAFIAAAHQgKgFgKAAQgLAAgGAGQgGAHAAANQAAAPAGAGQAFAHAMAAQAKAAAKgFIAAAHQgLAEgKAAQgOAAgIgIg");
	this.shape_61.setTransform(-27.7,34.6);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#262733").s().p("AgDAiIAAggIgZgjIAJAAIATAeIAUgeIAJAAIgZAjIAAAgg");
	this.shape_62.setTransform(-37.7,34.7);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#262733").s().p("AgUAiIAAhDIAHAAIAAA8IAiAAIAAAHg");
	this.shape_63.setTransform(-42.7,34.7);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#262733").s().p("AgWAiIAAhDIAXAAQAKABAGAFQAHAGgBAJQABALgHADQgGAGgKAAIgQAAIAAAagAgPABIAPAAQAJAAAEgDQAEgFgBgFQABgFgEgFQgEgDgJAAIgPAAg");
	this.shape_64.setTransform(-49.1,34.7);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#262733").s().p("AgWAiIAAhDIAWAAQAMABAFAFQAGAGAAAJQAAALgGADQgFAGgMAAIgPAAIAAAagAgPABIAPAAQAKAAADgDQADgEAAgGQAAgGgDgEQgDgDgKAAIgPAAg");
	this.shape_65.setTransform(-55.7,34.7);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#262733").s().p("AAWAiIgIgWIgbAAIgIAWIgIAAIAahDIAHAAIAaBDgAgLAFIAXAAIgMgdg");
	this.shape_66.setTransform(-62.6,34.7);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#2FB7AA").s().p("AgHAIQgEgDAAgFQAAgEAEgDQAEgDADAAQAFAAAEADQADADAAAEQAAAFgDADQgEADgFAAQgDAAgEgDg");
	this.shape_67.setTransform(-71.8,34.7);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#262733").s().p("AAWAhIgIgUIgbAAIgIAUIgIAAIAahBIAHAAIAaBBgAgLAFIAXAAIgMgdg");
	this.shape_68.setTransform(72,22.7);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#262733").s().p("AgDAhIAAhBIAGAAIAABBg");
	this.shape_69.setTransform(67.1,22.7);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#262733").s().p("AARAhIgRgbIgRAAIAAAbIgHAAIAAhBIAaAAQAKAAAFAEQAFAHAAAIQAAAHgEAGQgEAEgHABIASAcgAgRAAIARAAQAHAAAEgDQAEgDAAgHQgBgFgDgEQgCgDgIAAIgSAAg");
	this.shape_70.setTransform(62.5,22.7);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#262733").s().p("AgUAhIAAhBIApAAIAAAHIgiAAIAAAWIAeAAIAAAHIgeAAIAAAWIAiAAIAAAHg");
	this.shape_71.setTransform(55.7,22.7);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#262733").s().p("AgDAhIAAg6IgXAAIAAgHIA1AAIAAAHIgXAAIAAA6g");
	this.shape_72.setTransform(49.4,22.7);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#262733").s().p("AgDAhIAAhBIAHAAIAABBg");
	this.shape_73.setTransform(44.7,22.7);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#262733").s().p("AARAhIgRgbIgRAAIAAAbIgHAAIAAhBIAaAAQALAAAEAEQAFAGAAAJQAAAJgEAEQgEAEgHABIASAcgAgRAAIARAAQAHAAAEgDQAEgEAAgGQAAgFgDgEQgDgDgIAAIgSAAg");
	this.shape_74.setTransform(40.1,22.7);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#262733").s().p("AgRAaQgHgIgBgSQABgQAHgIQAIgJAOAAQAKAAALAFIAAAHQgJgFgLAAQgLAAgHAGQgFAHAAANQAAAOAFAHQAHAHALAAQAKAAAKgFIAAAHQgKAEgLAAQgOAAgIgIg");
	this.shape_75.setTransform(33.1,22.6);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#262733").s().p("AgUAhIAAhBIApAAIAAAHIgiAAIAAAWIAdAAIAAAHIgdAAIAAAWIAiAAIAAAHg");
	this.shape_76.setTransform(23.3,22.7);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#262733").s().p("AgRAaQgIgIAAgSQAAgQAIgIQAIgJAOAAQAJAAAMAFIAAAHQgKgFgKAAQgLAAgGAGQgGAHAAANQAAAPAGAGQAFAHAMAAQAKAAAKgFIAAAHQgLAEgKAAQgOAAgIgIg");
	this.shape_77.setTransform(16.7,22.6);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#262733").s().p("AATAhIgmg3IAAA3IgIAAIAAhBIAJAAIAmA3IAAg3IAHAAIAABBg");
	this.shape_78.setTransform(9.5,22.7);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#262733").s().p("AAWAhIgIgUIgbAAIgIAUIgIAAIAahBIAHAAIAaBBgAgLAFIAXAAIgMgdg");
	this.shape_79.setTransform(2.1,22.7);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#262733").s().p("AgDAhIgZhBIAHAAIAVA4IAWg4IAHAAIgZBBg");
	this.shape_80.setTransform(-4.2,22.7);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#262733").s().p("AgUAhIAAhBIApAAIAAAHIgiAAIAAAWIAeAAIAAAHIgeAAIAAAWIAiAAIAAAHg");
	this.shape_81.setTransform(-10.7,22.7);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#262733").s().p("AgUAhIAAhBIAIAAIAAA6IAhAAIAAAHg");
	this.shape_82.setTransform(-16.4,22.7);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#262733").s().p("AgUAhIAAhBIApAAIAAAHIgiAAIAAAWIAeAAIAAAHIgeAAIAAAWIAiAAIAAAHg");
	this.shape_83.setTransform(-22.7,22.7);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#262733").s().p("AARAhIgRgbIgRAAIAAAbIgHAAIAAhBIAaAAQAKAAAFAEQAFAHAAAIQAAAIgEAFQgEAEgHABIASAcgAgRAAIARAAQAIAAADgDQAEgDAAgHQAAgFgDgEQgDgDgHAAIgTAAg");
	this.shape_84.setTransform(-29.1,22.7);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#262733").s().p("AgCAhIAAgeIgagjIAJAAIATAdIAUgdIAIAAIgYAjIAAAeg");
	this.shape_85.setTransform(-39.4,22.7);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#262733").s().p("AgUAhIAAhBIAIAAIAAA6IAhAAIAAAHg");
	this.shape_86.setTransform(-44.4,22.7);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#262733").s().p("AgWAhIAAhBIAWAAQALgBAGAGQAGAFAAAKQAAAKgGAFQgGAFgLAAIgPAAIAAAZgAgPABIAPAAQAKAAADgDQADgEAAgGQAAgGgDgEQgDgDgKAAIgPAAg");
	this.shape_87.setTransform(-50.7,22.7);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#262733").s().p("AgXAhIAAhBIAXAAQALgBAHAGQAFAFAAAKQAAAKgFAFQgHAFgLAAIgQAAIAAAZgAgQABIAQAAQAKAAACgDQAEgEAAgGQAAgGgEgEQgCgDgKAAIgQAAg");
	this.shape_88.setTransform(-57.3,22.7);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#262733").s().p("AAXAhIgIgUIgcAAIgIAUIgIAAIAbhBIAGAAIAaBBgAgLAFIAWAAIgLgdg");
	this.shape_89.setTransform(-64.2,22.7);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#2FB7AA").s().p("AgHAIQgEgEAAgEQAAgDAEgEQAEgEADAAQAFAAADAEQAEAEAAADQAAAEgEAEQgDADgFABQgEgBgDgDg");
	this.shape_90.setTransform(-73.5,22.7);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#262733").s().p("AgQAsQgHgBgGgEIAAgUQAGAFAHADQAJACAGAAQALAAAAgJQAAgEgEgCIgLgGIgFgBQgKgDgFgFQgGgFAAgLQAAgHAEgGQADgGAIgEQAIgEAKAAQAHAAAGABIAMAFIAAAUIgMgHQgHgDgGAAQgEAAgEACQgDADAAAEQAAADACACQADADACABIAJADQAJADAEACQAFACADAFQAEAFAAAHQAAAIgEAHQgDAGgIAEQgGADgKAAIgRgBg");
	this.shape_91.setTransform(44.3,-0.4);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#262733").s().p("AAWAsIgng0IAAA0IgUAAIAAhXIASAAIAmAzIAAgzIATAAIAABXg");
	this.shape_92.setTransform(35.2,-0.3);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#262733").s().p("AgeAiQgLgMAAgWQAAgVALgMQALgLATAAQAUAAALALQALALAAAWQAAAXgLALQgKALgVAAQgTAAgLgLgAgOgUQgFAGAAAOQAAAPAFAGQAFAHAJAAQAKAAAGgHQAFgGAAgPQAAgOgFgGQgFgHgLAAQgJAAgFAHg");
	this.shape_93.setTransform(25,-0.3);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#262733").s().p("AgKAsIAAhXIAVAAIAABXg");
	this.shape_94.setTransform(17.6,-0.3);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#262733").s().p("AgKAsIAAhGIgYAAIAAgRIBFAAIAAARIgZAAIAABGg");
	this.shape_95.setTransform(11.2,-0.3);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#262733").s().p("AAVAsIgGgTIgfAAIgHATIgTAAIAghXIAWAAIAfBXgAgLAJIAVAAIgKggg");
	this.shape_96.setTransform(3,-0.3);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#262733").s().p("AgiAAQAAgsAqAAQAMAAAPAGIAAATQgNgJgMAAQgLAAgFAHQgGAHAAAOQAAAQAGAGQAGAHALAAQAGAAAGgCQAFgCAHgEIAAASIgNAFIgOABQgqAAAAgtg");
	this.shape_97.setTransform(-6.3,-0.4);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#262733").s().p("AgKAsIAAhXIAUAAIAABXg");
	this.shape_98.setTransform(-12.9,-0.3);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#262733").s().p("AgcAsIAAhXIAVAAIAABGIAkAAIAAARg");
	this.shape_99.setTransform(-18.9,-0.3);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#262733").s().p("AgjAsIAAhXIAmAAQAQAAAIAIQAJAGAAAPQAAAOgJAHQgJAIgPAAIgRAAIAAAdgAgOAAIAPAAQAGAAADgEQADgDAAgGQAAgNgMAAIgPAAg");
	this.shape_100.setTransform(-27.6,-0.3);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#262733").s().p("AAZAsIAAg7IgZAhIgZggIAAA6IgUAAIAAhXIAWAAIAXAjIAZgjIAVAAIAABXg");
	this.shape_101.setTransform(-38.2,-0.3);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#262733").s().p("AgJAsIAAhXIATAAIAABXg");
	this.shape_102.setTransform(-46.3,-0.3);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#262733").s().p("AgcArIAAhVIA5AAIAAAQIgkAAIAAAVIAgAAIAAAPIggAAIAAAhg");
	this.shape_103.setTransform(64.7,-15.9);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#262733").s().p("AgeAiQgLgMAAgWQAAgWALgKQALgMATAAQAUAAALALQALALAAAWQAAAWgLALQgKAMgVAAQgTAAgLgLgAgOgVQgFAHAAAOQAAAPAFAGQAFAHAJAAQAKAAAGgHQAFgGAAgPQAAgOgFgHQgFgGgLAAQgJAAgFAGg");
	this.shape_104.setTransform(55.4,-15.9);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#262733").s().p("AgbAiQgLgKABgYQgBgWALgLQAMgLASAAQAQAAAQAGIAAATIgQgHIgMgCQgMAAgFAHQgGAHAAAOQAAAPAGAHQAFAHALAAQAHAAAEgCIAAgPIgOAAIAAgQIAjAAIAAAoQgQAJgTAAQgSAAgMgLg");
	this.shape_105.setTransform(41,-16);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#262733").s().p("AAWArIgngzIAAAzIgUAAIAAhVIASAAIAlAyIAAgyIAUAAIAABVg");
	this.shape_106.setTransform(31.2,-15.9);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#262733").s().p("AgJArIAAhVIATAAIAABVg");
	this.shape_107.setTransform(23.9,-15.9);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#262733").s().p("AgjArIAAhVIAmAAQAQgBAIAIQAJAGAAAPQAAAOgJAHQgJAIgPAAIgRAAIAAAcgAgOgBIAPAAQAGAAADgDQADgDAAgGQAAgNgMAAIgPAAg");
	this.shape_108.setTransform(17.1,-15.9);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#262733").s().p("AgeAiQgLgLAAgXQgBgUAMgMQAKgMAUAAQAUAAALALQALALAAAWQABAWgMALQgKAMgVAAQgTAAgLgLgAgOgVQgGAHAAAOQAAAPAGAGQAFAHAJAAQAKAAAFgHQAGgGAAgPQAAgOgGgHQgEgGgLAAQgKAAgEAGg");
	this.shape_109.setTransform(7.2,-15.9);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#262733").s().p("AgiAAQAAgsApAAQAMAAAQAGIAAATQgNgJgMAAQgKAAgHAHQgFAHAAAOQAAAQAGAGQAGAHALAAQAGAAAGgCQAFgCAHgEIAAASIgNAFIgPABQgpAAAAgtg");
	this.shape_110.setTransform(-2.5,-16);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#262733").s().p("AgPAsQgJgBgFgEIAAgUQAFAFAIADQAIACAHAAQALAAAAgJQAAgEgEgCIgLgGIgGgBQgIgDgGgFQgFgFAAgLQAAgIADgFQAEgHAHgDQAIgEAKAAQAIAAAFABIAMAFIAAAUIgMgHQgHgDgFAAQgGAAgCACQgEACAAAFQAAAEACACIAFADIAJADQAJADAEACQAFACAEAFQACAFAAAHQAAAIgDAHQgEAGgHAEQgHADgJAAIgQgBg");
	this.shape_111.setTransform(-10.8,-16);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#262733").s().p("AgcArIAAhVIAVAAIAABFIAkAAIAAAQg");
	this.shape_112.setTransform(-22.9,-15.9);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#262733").s().p("AAWArIgHgTIgfAAIgGATIgUAAIAghVIAWAAIAfBVgAgLAJIAVAAIgKggg");
	this.shape_113.setTransform(-31.9,-15.9);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#262733").s().p("AgJArIAAhVIAUAAIAABVg");
	this.shape_114.setTransform(-39,-15.9);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#262733").s().p("AgJArIAAhFIgZAAIAAgQIBFAAIAAAQIgZAAIAABFg");
	this.shape_115.setTransform(-45.4,-15.9);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#262733").s().p("AgKArIAAhVIAVAAIAABVg");
	this.shape_116.setTransform(-51.9,-15.9);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#262733").s().p("AAWArIgngzIAAAzIgUAAIAAhVIASAAIAmAyIAAgyIATAAIAABVg");
	this.shape_117.setTransform(-59.2,-15.9);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#262733").s().p("AgKArIAAhVIAVAAIAABVg");
	this.shape_118.setTransform(-66.5,-15.9);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#262733").s().p("AgXAiIAAgMIAOgJQAGgGAEgGQAFgHAAgFQAAgFgEgCQgCgDgFAAQgFAAgDADIgJAFIAAgOQALgGALAAQALAAAFAFQAGAFAAAKQAAAGgEAHQgEAFgFAEIgLAKIAaAAIAAAPg");
	this.shape_119.setTransform(33.8,-40.6);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#262733").s().p("AARAhIgegoIAAAoIgPAAIAAhBIAOAAIAcAnIAAgnIAPAAIAABBg");
	this.shape_120.setTransform(23.3,-40.5);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#262733").s().p("AgXAaQgJgJAAgRQAAgPAJgKQAIgJAPAAQAQAAAIAJQAJAIAAARQAAAQgJAKQgJAIgPAAQgPAAgIgIgAgLgQQgEAFAAALQAAAMAEAEQAEAFAHABQAIgBAEgFQAEgFAAgLQAAgLgEgFQgEgEgIAAQgHAAgEAEg");
	this.shape_121.setTransform(15.5,-40.5);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#262733").s().p("AgHAhIAAhBIAPAAIAABBg");
	this.shape_122.setTransform(9.8,-40.5);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#262733").s().p("AgMAiQgGgBgEgDIAAgPQAFAEAFABQAFACAGAAQAJAAAAgHQAAgCgDgDIgNgFQgGgCgFgDQgEgEAAgIQAAgGADgFQACgFAGgDQAGgDAIAAIAKABIAJAEIAAAPIgJgFIgKgCQgEAAgCACQgDABAAAEQAAAAAAABQAAABABAAQAAABAAAAQAAAAABABIAEACIAGADIALAEQADABADAEQACADAAAGQAAAGgCAFQgDAGgGACQgGADgGAAIgNgBg");
	this.shape_123.setTransform(4.9,-40.6);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#262733").s().p("AgMAiQgGgBgEgDIAAgPQAFAEAFABQAFACAGAAQAJAAAAgHQAAgCgDgDIgNgFQgGgBgFgEQgEgEAAgIQAAgFACgGQADgFAGgDQAGgDAHAAIAKABIAKAEIAAAPIgJgFIgKgCQgEAAgCACQgDABAAAEQAAAAAAABQAAABABAAQAAABAAAAQAAAAABABIAEACIAGADIAKAEQAEABADAEQACAEAAAFQAAAHgDAEQgCAFgGADQgGADgHAAIgMgBg");
	this.shape_124.setTransform(-1.3,-40.6);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#262733").s().p("AgWAhIAAhBIAtAAIAAAMIgdAAIAAAPIAZAAIAAALIgZAAIAAAPIAdAAIAAAMg");
	this.shape_125.setTransform(-7.7,-40.5);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#262733").s().p("AgMAiQgGgBgEgDIAAgPQAFAEAFABQAFACAGAAQAJAAAAgHQAAgCgDgDIgNgFQgGgBgFgEQgEgEAAgIQAAgFACgGQADgFAGgDQAGgDAHAAIAKABIAKAEIAAAPIgJgFIgKgCQgEAAgCACQgDABAAAEQAAAAAAABQAAABABAAQAAABAAAAQAAAAABABIAEACIAGADIAKAEQAEABADAEQACAEAAAFQAAAHgDAEQgCAFgGADQgGADgHAAIgMgBg");
	this.shape_126.setTransform(-14,-40.6);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#262733").s().p("AgMAiQgGgBgEgDIAAgPQAFAEAFABQAGACAFAAQAJAAAAgHQAAgCgDgDIgNgFQgGgCgFgDQgEgEAAgIQAAgGADgFQADgFAFgDQAGgDAIAAIAKABIAJAEIAAAPIgJgFIgKgCQgEAAgCACQgDABAAAEQAAAAAAABQAAABABAAQAAABAAAAQAAAAABABIAEACIAGADIALAEQADABADAEQACADAAAGQAAAGgCAFQgDAGgGACQgGADgGAAIgNgBg");
	this.shape_127.setTransform(-23.6,-40.6);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#262733").s().p("AANAhIgNgqIgNAqIgQAAIgShBIARAAIALAtIAOgtIALAAIAOAuIAKguIASAAIgTBBg");
	this.shape_128.setTransform(-32,-40.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45}]}).wait(1));

	// Layer 5
	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f().s("#3F3B4F").ss(3).p("AtRtRIAAajIajAAIAA6jg");

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#FFFFFF").s().p("AtRNSIAA6jIajAAIAAajg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_130},{t:this.shape_129}]}).wait(1));

	// Layer 6
	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#FFFFFF").s().p("AtRNSIAA6jIajAAIAAajg");
	this.shape_131.setTransform(0,0,1.411,1.411);

	this.timeline.addTween(cjs.Tween.get(this.shape_131).wait(1));

}).prototype = getMCSymbolPrototype(lib.SD17, new cjs.Rectangle(-119.9,-119.9,239.9,239.9), null);


(lib.SD16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgQAYIAAgIQAHAEAIAAQALAAABgHQAAgDgDgDIgFgDIgGgCIgHgCQgDgBgCgDQgCgDAAgEQAAgGAFgFQAEgEAJAAQAHAAAHADIAAAHQgGgDgHAAQgLAAAAAIQAAAAAAABQAAAAAAABQAAAAABABQAAAAABABIAFACIAGADIAHACQADACACADQACADAAAFQAAAHgFAEQgFADgIAAQgIAAgIgDg");
	this.shape.setTransform(70.2,94.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAMAbIgMgVIgMAAIAAAVIgHAAIAAg1IATAAQAIAAAFAFQAFAEAAAIQAAAGgDADQgDAEgFABIANAWgAgMAAIAMAAQAGAAADgCQACgDAAgEQAAgKgLAAIgMAAg");
	this.shape_1.setTransform(65.2,94.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgGAbIgHgDQgDgCgCgDQgDgCgBgFQgCgFAAgHQAAgGACgEQABgFADgDQACgDADgCIAHgDIAGAAIAHAAQADABADACIAGAFQADADABAFQACAEAAAGQAAAHgCAFQgBAFgDACIgGAFQgDACgDABIgHAAIgGAAgAgEgTIgFABIgEAEIgCAGIgBAIIABAJIACAGIAEAEIAFABIAEABIAFgBIAFgBIAEgEIACgGIABgJIgBgIIgCgGIgEgEIgFgBIgFgBg");
	this.shape_2.setTransform(59.1,94.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgDAbIAAguIgSAAIAAgHIArAAIAAAHIgSAAIAAAug");
	this.shape_3.setTransform(53.5,94.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgCAbIgGgDIgHgFQgCgCgBgFQgCgFAAgHQAAgGACgEIADgIIAHgFIAGgDIAGAAQAIAAAIADIAAAHQgIgEgHAAQgIAAgFAFQgEAFAAAKQAAALAEAFQAFAFAIAAQAHAAAIgEIAAAHQgIADgIAAIgGAAg");
	this.shape_4.setTransform(48.4,94.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AARAbIgGgPIgVAAIgGAPIgIAAIAVg1IAHAAIAVA1gAAIAFIgIgVIgHAVIAPAAg");
	this.shape_5.setTransform(42.8,94.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgQAbIAAg1IAhAAIAAAHIgZAAIAAARIAWAAIAAAGIgWAAIAAAXg");
	this.shape_6.setTransform(37.7,94.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgDAbIAAguIgSAAIAAgHIArAAIAAAHIgSAAIAAAug");
	this.shape_7.setTransform(83.4,83.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAPAbIgdgqIAAAqIgIAAIAAg1IAJAAIAdAqIAAgqIAHAAIAAA1g");
	this.shape_8.setTransform(77.8,83.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AARAbIgGgPIgVAAIgGAPIgIAAIAWg1IAGAAIAVA1gAAIAFIgIgVIgIAVIAQAAg");
	this.shape_9.setTransform(71.8,83.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgDAbIAAguIgSAAIAAgHIArAAIAAAHIgSAAIAAAug");
	this.shape_10.setTransform(66.5,83.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AAMAbIgMgVIgMAAIAAAVIgIAAIAAg1IAUAAQAIAAAFAFQAGAEgBAIQAAAGgDADQgEAEgFABIAPAWgAgMAAIAMAAQAGAAACgCQADgDAAgEQAAgKgMAAIgLAAg");
	this.shape_11.setTransform(61.6,83.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgGAbIgHgDQgDgCgCgDQgDgCgBgFQgCgFAAgHQAAgGACgEQABgFADgDQACgDADgCIAHgDIAGAAIAHAAQADABADACIAGAFQADADABAFQACAEAAAGQAAAHgCAFQgBAFgDACIgGAFQgDACgDABIgHAAIgGAAgAgEgTIgFABIgEAEIgCAGIgBAIIABAJIACAGIAEAEIAFABIAEABIAFgBIAFgBIAEgEIACgGIABgJIgBgIIgCgGIgEgEIgFgBIgFgBg");
	this.shape_12.setTransform(55.4,83.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgSAbIAAg1IASAAQAJAAAFAFQAFAEAAAIQAAAIgFAEQgFAEgJAAIgKAAIAAAUgAgKAAIAKAAQAGAAADgBQADgDgBgFQABgEgDgDQgDgDgGAAIgKAAg");
	this.shape_13.setTransform(49.9,83.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AASAbIAAgpIgSAXIgRgXIAAApIgHAAIAAg1IAIAAIAQAXIARgXIAIAAIAAA1g");
	this.shape_14.setTransform(43.7,83.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgDAbIAAg1IAHAAIAAA1g");
	this.shape_15.setTransform(39,83.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AAPAbIgdgqIAAAqIgIAAIAAg1IAJAAIAdAqIAAgqIAHAAIAAA1g");
	this.shape_16.setTransform(31.5,83.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgGAbIgHgDQgDgCgCgDQgDgCgBgFQgCgFAAgHQAAgGACgEQABgFADgDQACgDADgCIAHgDIAGAAIAHAAQADABADACIAGAFQADADABAFQACAEAAAGQAAAHgCAFQgBAFgDACIgGAFQgDACgDABIgHAAIgGAAgAgEgTIgFABIgEAEIgCAGIgBAIIABAJIACAGIAEAEIAFABIAEABIAFgBIAFgBIAEgEIACgGIABgJIgBgIIgCgGIgEgEIgFgBIgFgBg");
	this.shape_17.setTransform(25.1,83.9);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AAPAbIgPgVIgOAVIgJAAIATgbIgSgaIAJAAIANAUIAOgUIAJAAIgTAaIAUAbg");
	this.shape_18.setTransform(84.6,72.9);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgDAbIAAg1IAHAAIAAA1g");
	this.shape_19.setTransform(80.7,72.9);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AAMAbIgMgVIgMAAIAAAVIgHAAIAAg1IATAAQAIAAAFAFQAFAEAAAIQAAAGgDADQgDAEgFABIANAWgAgMAAIAMAAQAGAAADgCQACgDAAgEQAAgKgLAAIgMAAg");
	this.shape_20.setTransform(76.9,72.9);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgDAbIAAguIgSAAIAAgHIArAAIAAAHIgSAAIAAAug");
	this.shape_21.setTransform(71.5,72.9);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AARAbIgGgPIgVAAIgGAPIgIAAIAWg1IAFAAIAWA1gAAIAFIgIgVIgIAVIAQAAg");
	this.shape_22.setTransform(66.2,72.9);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AASAbIAAgpIgSAXIgRgXIAAApIgIAAIAAg1IAIAAIARAXIARgXIAJAAIAAA1g");
	this.shape_23.setTransform(59.9,72.9);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgUAbIAAg1IARAAQAMAAAFAHQAHAHAAAMQAAANgHAHQgFAHgMAAgAgNAUIAJAAQAIAAAFgFQAFgEgBgLQABgJgFgFQgFgFgIAAIgJAAg");
	this.shape_24.setTransform(50.6,72.9);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgRAbIAAg1IAiAAIAAAHIgaAAIAAARIAXAAIAAAGIgXAAIAAAQIAaAAIAAAHg");
	this.shape_25.setTransform(45.3,72.9);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgQAbIAAg1IAiAAIAAAHIgbAAIAAARIAXAAIAAAGIgXAAIAAAQIAbAAIAAAHg");
	this.shape_26.setTransform(40.3,72.9);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AAMAbIgMgVIgMAAIAAAVIgIAAIAAg1IAUAAQAIAAAFAFQAGAEAAAIQAAAGgEADQgEAEgFABIAPAWgAgMAAIAMAAQAGAAACgCQADgDAAgEQAAgKgMAAIgLAAg");
	this.shape_27.setTransform(35.1,72.9);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgDAbIgHgDIgFgFQgDgCgBgFQgCgFAAgHQAAgFACgFQABgFADgDQACgDADgCIAHgDIAGAAQAJAAAIADIAAAHQgIgEgIAAIgEABIgFABIgEAEIgDAGIgBAIIABAJQABAEACACIAEAEIAFABIAEABIALgCIAAgPIgLAAIAAgGIASAAIAAAZQgJAEgKAAIgGAAg");
	this.shape_28.setTransform(29.2,72.9);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AARAbIgGgPIgVAAIgGAPIgIAAIAVg1IAHAAIAVA1gAAJAFIgJgVIgHAVIAQAAg");
	this.shape_29.setTransform(23.5,72.9);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#2FB7AA").s().p("AmGC/IAAl9IMNAAIAAF9g");
	this.shape_30.setTransform(54.1,85);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgQAYIAAgIQAHAEAIAAQALAAABgHQAAgDgDgDIgFgDIgGgCIgHgCQgDgBgCgDQgCgDAAgEQAAgGAFgFQAEgEAJAAQAHAAAHADIAAAHQgGgDgHAAQgLAAAAAIQAAAAAAABQAAAAAAABQABAAAAABQAAAAABABIAFACIAGADIAHACQADACACADQACADAAAFQAAAHgFAEQgFADgIAAQgIAAgIgDg");
	this.shape_31.setTransform(-30.5,94.9);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AgQAbIAAg1IAHAAIAAAuIAaAAIAAAHg");
	this.shape_32.setTransform(-35,94.9);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AgRAbIAAg1IAiAAIAAAHIgaAAIAAARIAXAAIAAAGIgXAAIAAAQIAaAAIAAAHg");
	this.shape_33.setTransform(-40,94.9);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AgUAbIAAg1IARAAQALAAAHAHQAGAHAAAMQAAANgGAHQgHAHgLAAgAgMAUIAIAAQAIAAAFgFQAFgEAAgLQAAgJgFgFQgFgFgIAAIgIAAg");
	this.shape_34.setTransform(-45.4,94.9);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AgGAbIgHgDQgDgCgCgDQgDgCgBgFQgCgFAAgHQAAgGACgEQABgFADgDQACgDADgCIAHgDIAGAAIAHAAQADABADACIAGAFQADADABAFQACAEAAAGQAAAHgCAFQgBAFgDACIgGAFQgDACgDABIgHAAIgGAAgAgEgTIgFABIgEAEIgCAGIgBAIIABAJIACAGIAEAEIAFABIAEABIAFgBIAFgBIAEgEIACgGIABgJIgBgIIgCgGIgEgEIgFgBIgFgBg");
	this.shape_35.setTransform(-51.6,94.9);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AASAbIAAgpIgSAXIgRgXIAAApIgIAAIAAg1IAJAAIAQAXIASgXIAIAAIAAA1g");
	this.shape_36.setTransform(-58.2,94.9);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AgUAbIAAg1IARAAQALAAAGAHQAHAHAAAMQAAANgHAHQgGAHgLAAgAgNAUIAJAAQAJAAAEgFQAEgEAAgLQAAgJgEgFQgEgFgJAAIgJAAg");
	this.shape_37.setTransform(-67.5,94.9);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AgQAbIAAg1IAHAAIAAAuIAaAAIAAAHg");
	this.shape_38.setTransform(-72.5,94.9);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AgCAbIgHgDIgGgFIgDgHQgCgFABgHQgBgGACgEIADgIIAGgFIAHgDIAGAAQAJAAAHADIAAAHQgHgEgIAAQgJAAgEAFQgEAFAAAKQAAALAEAFQAEAFAJAAQAIAAAHgEIAAAHQgHADgJAAIgGAAg");
	this.shape_39.setTransform(-77.8,94.9);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AgQAbIAAg1IAIAAIAAAuIAZAAIAAAHg");
	this.shape_40.setTransform(-17.8,83.9);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AgQAbIAAg1IAHAAIAAAuIAaAAIAAAHg");
	this.shape_41.setTransform(-22.4,83.9);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AARAbIgGgPIgVAAIgGAPIgIAAIAVg1IAHAAIAVA1gAAIAFIgIgVIgHAVIAPAAg");
	this.shape_42.setTransform(-27.9,83.9);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AASAbIAAgpIgSAXIgRgXIAAApIgHAAIAAg1IAIAAIAQAXIARgXIAIAAIAAA1g");
	this.shape_43.setTransform(-34.2,83.9);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AgQAYIAAgIQAHAEAIAAQALAAABgHQAAgDgDgDIgFgDIgGgCIgHgCQgDgBgCgDQgCgDAAgEQAAgGAFgFQAEgEAJAAQAHAAAHADIAAAHQgGgDgHAAQgLAAAAAIQAAAAAAABQAAAAAAABQAAAAABABQAAAAABABIAFACIAGADIAHACQADACACADQACADAAAFQAAAHgFAEQgFADgIAAQgIAAgIgDg");
	this.shape_44.setTransform(-40.1,83.9);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AgQAYIAAgIQAHAEAIAAQALAAABgHQAAgDgDgDIgFgDIgGgCIgHgCQgDgBgCgDQgCgDAAgEQAAgGAFgFQAEgEAJAAQAHAAAHADIAAAHQgGgDgHAAQgLAAAAAIQAAAAAAABQAAAAAAABQABAAAAABQAAAAABABIAFACIAGADIAHACQADACACADQACADAAAFQAAAHgFAEQgFADgIAAQgIAAgIgDg");
	this.shape_45.setTransform(-48.1,83.9);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("AgSAbIAAg1IASAAQAJAAAFAFQAFAEAAAIQAAAIgFAEQgFAEgJAAIgLAAIAAAUgAgLAAIALAAQAGAAADgBQACgDAAgFQAAgEgCgDQgDgDgGAAIgLAAg");
	this.shape_46.setTransform(-52.9,83.9);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("AARAbIgGgPIgVAAIgGAPIgIAAIAWg1IAFAAIAWA1gAAJAFIgJgVIgIAVIARAAg");
	this.shape_47.setTransform(-58.5,83.9);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFFFF").s().p("AASAbIAAgpIgSAXIgRgXIAAApIgIAAIAAg1IAIAAIARAXIASgXIAIAAIAAA1g");
	this.shape_48.setTransform(-64.8,83.9);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFFFF").s().p("AgUAbIAAg1IARAAQAMAAAFAHQAHAHAAAMQAAANgHAHQgFAHgMAAgAgNAUIAJAAQAIAAAFgFQAEgEAAgLQAAgJgEgFQgFgFgIAAIgJAAg");
	this.shape_49.setTransform(-74.1,83.9);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFFFFF").s().p("AAPAbIgdgqIAAAqIgIAAIAAg1IAJAAIAdAqIAAgqIAHAAIAAA1g");
	this.shape_50.setTransform(-80.3,83.9);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFFFFF").s().p("AgDAbIAAg1IAHAAIAAA1g");
	this.shape_51.setTransform(-84.7,83.9);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FFFFFF").s().p("AASAbIAAgpIgSAXIgRgXIAAApIgIAAIAAg1IAIAAIARAXIARgXIAIAAIAAA1g");
	this.shape_52.setTransform(-89.4,83.9);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFFFFF").s().p("AgDAbIAAguIgSAAIAAgHIArAAIAAAHIgSAAIAAAug");
	this.shape_53.setTransform(-21.7,72.9);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FFFFFF").s().p("AAOAbIgOgVIgOAVIgJAAIATgbIgSgaIAJAAIANAUIAOgUIAJAAIgTAaIATAbg");
	this.shape_54.setTransform(-26.8,72.9);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FFFFFF").s().p("AgRAbIAAg1IAiAAIAAAHIgaAAIAAARIAXAAIAAAGIgXAAIAAAQIAaAAIAAAHg");
	this.shape_55.setTransform(-31.8,72.9);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FFFFFF").s().p("AgDAbIAAguIgSAAIAAgHIArAAIAAAHIgSAAIAAAug");
	this.shape_56.setTransform(-36.9,72.9);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FFFFFF").s().p("AAPAbIgdgqIAAAqIgIAAIAAg1IAJAAIAdAqIAAgqIAHAAIAAA1g");
	this.shape_57.setTransform(-45.6,72.9);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#FFFFFF").s().p("AgGAbIgHgDQgDgCgCgDQgDgCgBgFQgCgFAAgHQAAgGACgEQABgFADgDQACgDADgCIAHgDIAGAAIAHAAQADABADACIAGAFQADADABAFQACAEAAAGQAAAHgCAFQgBAFgDACIgGAFQgDACgDABIgHAAIgGAAgAgEgTIgFABIgEAEIgCAGIgBAIIABAJIACAGIAEAEIAFABIAEABIAFgBIAFgBIAEgEIACgGIABgJIgBgIIgCgGIgEgEIgFgBIgFgBg");
	this.shape_58.setTransform(-51.9,72.9);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#FFFFFF").s().p("AgDAbIAAg1IAHAAIAAA1g");
	this.shape_59.setTransform(-56.3,72.9);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#FFFFFF").s().p("AgDAbIAAguIgSAAIAAgHIArAAIAAAHIgSAAIAAAug");
	this.shape_60.setTransform(-60,72.9);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#FFFFFF").s().p("AgDAbIAAg1IAHAAIAAA1g");
	this.shape_61.setTransform(-63.7,72.9);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#FFFFFF").s().p("AAPAbIgdgqIAAAqIgIAAIAAg1IAJAAIAdAqIAAgqIAHAAIAAA1g");
	this.shape_62.setTransform(-68.1,72.9);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#FFFFFF").s().p("AgDAbIAAg1IAHAAIAAA1g");
	this.shape_63.setTransform(-72.5,72.9);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#FFFFFF").s().p("AgQAbIAAg1IAhAAIAAAHIgZAAIAAARIAWAAIAAAGIgWAAIAAAXg");
	this.shape_64.setTransform(-76,72.9);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#FFFFFF").s().p("AgQAbIAAg1IAiAAIAAAHIgbAAIAAARIAXAAIAAAGIgXAAIAAAQIAbAAIAAAHg");
	this.shape_65.setTransform(-80.9,72.9);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#FFFFFF").s().p("AgUAbIAAg1IARAAQAMAAAFAHQAHAHAAAMQAAANgHAHQgFAHgMAAgAgNAUIAJAAQAIAAAFgFQAEgEAAgLQAAgJgEgFQgFgFgIAAIgJAAg");
	this.shape_66.setTransform(-86.3,72.9);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#2FB7AA").s().p("AmGDAIAAl/IMNAAIAAF/g");
	this.shape_67.setTransform(-54.1,85);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#262733").s().p("AgDAhIAAg7IgXAAIAAgGIA1AAIAAAGIgXAAIAAA7g");
	this.shape_68.setTransform(47.8,43.3);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#262733").s().p("AAUAhIgUgbIgTAbIgIAAIAXghIgWggIAIAAIASAbIATgbIAJAAIgYAgIAYAhg");
	this.shape_69.setTransform(41.5,43.3);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#262733").s().p("AgUAhIAAhBIApAAIAAAGIgiAAIAAAYIAeAAIAAAGIgeAAIAAAWIAiAAIAAAHg");
	this.shape_70.setTransform(35.2,43.3);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#262733").s().p("AgCAhIAAg7IgYAAIAAgGIA1AAIAAAGIgYAAIAAA7g");
	this.shape_71.setTransform(28.8,43.3);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#262733").s().p("AATAhIgmg3IAAA3IgIAAIAAhBIAJAAIAmA3IAAg3IAIAAIAABBg");
	this.shape_72.setTransform(21.8,43.3);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#262733").s().p("AgVAZQgIgIAAgRQAAgQAIgJQAIgIANgBQAPABAIAIQAHAJAAAQQAAARgHAIQgIAKgPgBQgNABgIgKgAgQgUQgGAHABANQgBAOAGAHQAFAHALgBQALABAGgHQAFgGABgPQgBgNgFgHQgFgGgMgBQgLABgFAGg");
	this.shape_73.setTransform(14.1,43.3);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#262733").s().p("AgRAaQgIgJAAgRQAAgQAIgIQAIgJAPAAQAIAAALAFIAAAHQgIgFgLAAQgMAAgFAGQgGAHAAANQAAAOAGAHQAFAHAMAAQAJAAAKgFIAAAHQgJAEgKAAQgPAAgIgIg");
	this.shape_74.setTransform(6.9,43.3);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#262733").s().p("AgUAhIAAhBIAIAAIAAA6IAhAAIAAAHg");
	this.shape_75.setTransform(-2.5,43.3);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#262733").s().p("AAWAhIgHgUIgdAAIgIAUIgHAAIAbhBIAFAAIAbBBgAgKAGIAWAAIgMgeg");
	this.shape_76.setTransform(-9.1,43.3);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#262733").s().p("AAUAhIgng3IAAA3IgIAAIAAhBIAJAAIAmA3IAAg3IAIAAIAABBg");
	this.shape_77.setTransform(-16.4,43.3);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#262733").s().p("AgVAZQgIgIAAgRQAAgQAIgJQAHgIAOgBQAPABAHAIQAIAJAAAQQAAARgIAIQgHAKgPgBQgOABgHgKgAgQgUQgGAHAAANQAAAOAGAHQAFAHALgBQAMABAFgHQAGgHAAgOQAAgNgGgHQgFgGgMgBQgLABgFAGg");
	this.shape_78.setTransform(-24.1,43.3);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#262733").s().p("AgDAhIAAhBIAHAAIAABBg");
	this.shape_79.setTransform(-29.4,43.3);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#262733").s().p("AgDAhIAAg7IgXAAIAAgGIA1AAIAAAGIgYAAIAAA7g");
	this.shape_80.setTransform(-34,43.3);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#262733").s().p("AAWAhIgIgUIgbAAIgIAUIgIAAIAahBIAHAAIAaBBgAgLAGIAXAAIgMgeg");
	this.shape_81.setTransform(-40.1,43.3);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#262733").s().p("AAUAhIgog3IAAA3IgHAAIAAhBIAIAAIAoA3IAAg3IAGAAIAABBg");
	this.shape_82.setTransform(-47.4,43.3);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#262733").s().p("AgUAiIAAhDIApAAIAAAHIgiAAIAAAYIAeAAIAAAFIgeAAIAAAYIAiAAIAAAHg");
	this.shape_83.setTransform(71.4,31.3);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#262733").s().p("AASAiIAAgfIgiAAIAAAfIgIAAIAAhDIAIAAIAAAfIAiAAIAAgfIAHAAIAABDg");
	this.shape_84.setTransform(64.6,31.3);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#262733").s().p("AgDAiIAAg8IgXAAIAAgHIA1AAIAAAHIgYAAIAAA8g");
	this.shape_85.setTransform(57.9,31.3);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#262733").s().p("AATAiIgmg4IAAA4IgIAAIAAhDIAJAAIAmA4IAAg4IAIAAIAABDg");
	this.shape_86.setTransform(47.4,31.3);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#262733").s().p("AgDAiIAAhDIAGAAIAABDg");
	this.shape_87.setTransform(42.1,31.3);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#262733").s().p("AAUAiIgng4IAAA4IgIAAIAAhDIAJAAIAmA4IAAg4IAIAAIAABDg");
	this.shape_88.setTransform(33.4,31.3);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#262733").s().p("AgVAaQgIgIAAgSQAAgQAIgJQAHgJAOAAQAPAAAHAJQAIAJAAAQQAAASgIAIQgHAIgPABQgOgBgHgIgAgQgUQgGAHAAANQAAAOAGAHQAFAGALAAQAMAAAFgGQAGgHAAgOQAAgNgGgHQgFgGgMAAQgLAAgFAGg");
	this.shape_89.setTransform(25.7,31.3);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#262733").s().p("AgDAiIAAhDIAHAAIAABDg");
	this.shape_90.setTransform(20.4,31.3);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#262733").s().p("AgCAiIAAg8IgYAAIAAgHIA1AAIAAAHIgYAAIAAA8g");
	this.shape_91.setTransform(15.8,31.3);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#262733").s().p("AAWAiIgIgWIgbAAIgIAWIgIAAIAahDIAHAAIAaBDgAgLAGIAXAAIgMgeg");
	this.shape_92.setTransform(9.7,31.3);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#262733").s().p("AgRAaQgIgJAAgRQAAgQAIgIQAHgJAPAAQAJAAALAFIAAAHQgJgFgKAAQgMAAgFAGQgGAGAAAOQAAAPAGAGQAFAHAMAAQAJAAAKgFIAAAHQgKAEgKAAQgPAAgHgIg");
	this.shape_93.setTransform(2.9,31.3);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#262733").s().p("AgDAiIAAhDIAHAAIAABDg");
	this.shape_94.setTransform(-1.9,31.3);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#262733").s().p("AgTAiIAAhDIAGAAIAAA8IAhAAIAAAHg");
	this.shape_95.setTransform(-5.9,31.3);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#262733").s().p("AgWAiIAAhDIAWAAQALAAAGAGQAHAGgBAJQABALgHADQgGAGgLAAIgPAAIAAAagAgPABIAPAAQAKAAADgDQADgEAAgGQAAgGgDgEQgDgEgKAAIgPAAg");
	this.shape_96.setTransform(-12.3,31.3);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#262733").s().p("AAYAiIAAg2IgYAgIgXggIAAA2IgHAAIAAhDIAIAAIAWAiIAXgiIAIAAIAABDg");
	this.shape_97.setTransform(-19.9,31.3);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#262733").s().p("AgCAiIAAhDIAGAAIAABDg");
	this.shape_98.setTransform(-25.5,31.3);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#262733").s().p("AgUAiIAAhDIApAAIAAAHIgiAAIAAAYIAeAAIAAAFIgeAAIAAAYIAiAAIAAAHg");
	this.shape_99.setTransform(-33.5,31.3);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#262733").s().p("AATAiIgmg4IAAA4IgHAAIAAhDIAIAAIAmA4IAAg4IAHAAIAABDg");
	this.shape_100.setTransform(-40.6,31.3);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#262733").s().p("AgCAiIAAhDIAFAAIAABDg");
	this.shape_101.setTransform(-45.9,31.3);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#262733").s().p("AgUAiIAAhDIApAAIAAAHIghAAIAAAYIAcAAIAAAFIgcAAIAAAfg");
	this.shape_102.setTransform(-50.1,31.3);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#262733").s().p("AgUAiIAAhDIApAAIAAAHIgiAAIAAAYIAeAAIAAAFIgeAAIAAAYIAiAAIAAAHg");
	this.shape_103.setTransform(-56.3,31.3);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#262733").s().p("AgZAiIAAhDIAVAAQAOAAAIAJQAIAJAAAPQAAAigeAAgAgSAbIANAAQAMgBAGgGQAGgGAAgOQAAgNgGgGQgGgHgMAAIgNAAg");
	this.shape_104.setTransform(-63,31.3);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#2FB7AA").s().p("AgHAIQgDgDgBgFQABgEADgDQAEgDADAAQAFAAADADQAEADAAAEQAAAFgEADQgDAEgFgBQgDABgEgEg");
	this.shape_105.setTransform(-72.5,31.3);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#262733").s().p("AgCAhIAAg6IgYAAIAAgHIA1AAIAAAHIgXAAIAAA6g");
	this.shape_106.setTransform(32.3,19.3);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#262733").s().p("AgLAhIgKgEIAAgIQAFADAFABQAFADAGAAQAIAAADgEQAEgDgBgFIgCgGIgFgFIgIgDIgJgDQgDgBgDgEQgDgFAAgFQAAgFACgDQACgEAEgDQAGgDAGABIAIABIAJADIAAAHIgKgEIgHgBQgHAAgCADQgEAEAAADQAAADACADIAFAFIARAGQAEABADAEQACADAAAHQABAJgGAFQgFAGgLgBQgGAAgFgBg");
	this.shape_107.setTransform(26.2,19.3);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#262733").s().p("AgDAhIAAhBIAHAAIAABBg");
	this.shape_108.setTransform(21.7,19.3);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#262733").s().p("AgUAhIAAhBIAIAAIAAA7IAhAAIAAAGg");
	this.shape_109.setTransform(17.6,19.3);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#262733").s().p("AgUAhIAAhBIApAAIAAAHIghAAIAAAWIAdAAIAAAGIgdAAIAAAYIAhAAIAAAGg");
	this.shape_110.setTransform(8,19.3);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#262733").s().p("AgDAhIAAg6IgXAAIAAgHIA1AAIAAAHIgYAAIAAA6g");
	this.shape_111.setTransform(1.6,19.3);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#262733").s().p("AAWAhIgIgVIgbAAIgIAVIgIAAIAahBIAHAAIAaBBgAgLAFIAXAAIgMgdg");
	this.shape_112.setTransform(-4.4,19.3);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#262733").s().p("AgUAhIAAhBIApAAIAAAHIgiAAIAAAWIAeAAIAAAGIgeAAIAAAYIAiAAIAAAGg");
	this.shape_113.setTransform(-11,19.3);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#262733").s().p("AARAhIgRgbIgRAAIAAAbIgHAAIAAhBIAaAAQAKAAAFAEQAFAFAAAKQAAAIgEAFQgFAEgGABIASAcgAgRAAIARAAQAIAAADgDQAEgDgBgHQAAgFgDgEQgDgDgGAAIgTAAg");
	this.shape_114.setTransform(-17.4,19.3);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#262733").s().p("AgRAaQgIgJAAgRQAAgQAIgIQAIgJAOAAQAJAAAMAFIAAAHQgKgFgKAAQgLAAgGAGQgGAHAAANQAAAPAGAGQAFAHAMAAQAKAAAKgFIAAAHQgLAEgKAAQgOAAgIgIg");
	this.shape_115.setTransform(-24.4,19.3);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#2FB7AA").s().p("AgHAIQgDgEAAgEQAAgDADgEQAEgEADAAQAFAAAEAEQACAEAAADQAAAFgCADQgEADgFABQgDgBgEgDg");
	this.shape_116.setTransform(-33.5,19.3);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#262733").s().p("AgQAsQgGgBgHgEIAAgUQAGAFAHADQAJACAGAAQALAAAAgJQAAgEgEgCIgLgGIgFgBQgKgDgFgFQgGgFAAgLQAAgHAEgGQADgGAIgEQAIgEAKAAQAHAAAGABIAMAFIAAAUQgEgDgIgEQgHgDgGAAQgEAAgEACQgDADAAAEQAAADACACQADADACABIAJADQAJADAEACQAFACADAFQAEAFAAAHQAAAIgEAHQgDAGgIAEQgGADgKAAQgJAAgIgBg");
	this.shape_117.setTransform(44.3,-3.7);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#262733").s().p("AAWAsIgng1IAAA1IgUAAIAAhXIASAAIAmAzIAAgzIATAAIAABXg");
	this.shape_118.setTransform(35.2,-3.7);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#262733").s().p("AgeAiQgLgMAAgWQAAgWALgLQALgLATAAQAUAAALALQALALAAAWQAAAWgLAMQgKALgVAAQgTAAgLgLgAgOgUQgFAGAAAOQAAAPAFAGQAFAHAJAAQAKAAAGgHQAFgGAAgPQAAgOgFgGQgFgHgLAAQgJAAgFAHg");
	this.shape_119.setTransform(25,-3.7);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#262733").s().p("AgKAsIAAhXIAVAAIAABXg");
	this.shape_120.setTransform(17.6,-3.7);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#262733").s().p("AgKAsIAAhGIgYAAIAAgRIBFAAIAAARIgZAAIAABGg");
	this.shape_121.setTransform(11.2,-3.7);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#262733").s().p("AAVAsIgGgTIgfAAIgHATIgTAAIAghXIAWAAIAfBXgAgLAJIAVAAIgKggg");
	this.shape_122.setTransform(3,-3.7);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#262733").s().p("AgiAAQAAgsAqAAQAMAAAPAGIAAATQgNgJgMAAQgLAAgFAHQgGAHAAAOQAAAQAGAGQAGAHALAAQAGAAAGgCQAFgCAHgEIAAASIgNAFIgOABQgqAAAAgtg");
	this.shape_123.setTransform(-6.3,-3.7);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#262733").s().p("AgKAsIAAhXIAUAAIAABXg");
	this.shape_124.setTransform(-12.9,-3.7);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#262733").s().p("AgcAsIAAhXIAVAAIAABGIAkAAIAAARg");
	this.shape_125.setTransform(-18.9,-3.7);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#262733").s().p("AgjAsIAAhXIAmAAQAQAAAIAHQAJAIAAAOQAAAOgJAHQgJAIgPAAIgRAAIAAAdgAgOAAIAPAAQAGgBADgDQADgDAAgGQAAgNgMAAIgPAAg");
	this.shape_126.setTransform(-27.6,-3.7);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#262733").s().p("AAZAsIAAg7IgZAhIgZggIAAA6IgUAAIAAhXIAWAAIAXAiIAZgiIAVAAIAABXg");
	this.shape_127.setTransform(-38.2,-3.7);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#262733").s().p("AgJAsIAAhXIATAAIAABXg");
	this.shape_128.setTransform(-46.3,-3.7);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#262733").s().p("AgcAsIAAhWIAVAAIAABFIAkAAIAAARg");
	this.shape_129.setTransform(68.3,-19.3);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#262733").s().p("AAWAsIgHgUIgfAAIgGAUIgUAAIAghWIAWAAIAfBWgAgLAJIAVAAIgKggg");
	this.shape_130.setTransform(59.3,-19.3);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#262733").s().p("AgJAsIAAhWIATAAIAABWg");
	this.shape_131.setTransform(52.2,-19.3);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#262733").s().p("AgKAsIAAhGIgYAAIAAgQIBFAAIAAAQIgYAAIAABGg");
	this.shape_132.setTransform(45.8,-19.3);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#262733").s().p("AAWAsIgng0IAAA0IgUAAIAAhWIASAAIAmAyIAAgyIATAAIAABWg");
	this.shape_133.setTransform(36.6,-19.3);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#262733").s().p("AgdAsIAAhWIA7AAIAAAQIgmAAIAAATIAhAAIAAAPIghAAIAAATIAmAAIAAARg");
	this.shape_134.setTransform(27.4,-19.3);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#262733").s().p("AgJAsIAAhGIgZAAIAAgQIBFAAIAAAQIgYAAIAABGg");
	this.shape_135.setTransform(19.1,-19.3);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#262733").s().p("AgeAiQgLgLAAgXQAAgVALgMQAKgLAUAAQAUAAALALQALAMAAAVQAAAXgLAKQgLAMgUAAQgTAAgLgLgAgPgVQgFAHAAAOQAAAPAFAGQAGAHAJAAQAKAAAFgHQAFgGAAgPQAAgOgFgHQgFgGgKAAQgKAAgFAGg");
	this.shape_136.setTransform(9.9,-19.3);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#262733").s().p("AgjAsIAAhWIAmAAQAPgBAJAIQAJAHAAAOQAAAOgJAHQgJAIgPAAIgRAAIAAAdgAgOAAIAOAAQAHgBADgDQADgDAAgGQAAgNgNAAIgOAAg");
	this.shape_137.setTransform(0.3,-19.3);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#262733").s().p("AgIAsIAAgnIghgvIAZAAIATAhIASghIAVAAIgfAwIAAAmg");
	this.shape_138.setTransform(-13.6,-19.3);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#262733").s().p("AgcAsIAAhWIA6AAIAAAQIglAAIAAAUIAfAAIAAAQIgfAAIAAAig");
	this.shape_139.setTransform(-22.3,-19.3);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#262733").s().p("AgJAsIAAhWIATAAIAABWg");
	this.shape_140.setTransform(-28.8,-19.3);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#262733").s().p("AgKAsIAAhGIgYAAIAAgQIBFAAIAAAQIgZAAIAABGg");
	this.shape_141.setTransform(-35.2,-19.3);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#262733").s().p("AAWAsIgng0IAAA0IgUAAIAAhWIASAAIAmAyIAAgyIATAAIAABWg");
	this.shape_142.setTransform(-44.4,-19.3);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#262733").s().p("AgdAsIAAhWIA7AAIAAAQIgmAAIAAATIAhAAIAAAPIghAAIAAATIAmAAIAAARg");
	this.shape_143.setTransform(-53.6,-19.3);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#262733").s().p("AgmAsIAAhWIAjAAQAVgBAKALQALALAAAVQAAAWgLAKQgLAMgUAAgAgRAbIALAAQAMAAAFgHQAHgGgBgOQABgMgHgIQgFgGgMAAIgLAAg");
	this.shape_144.setTransform(-62.5,-19.3);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#262733").s().p("AgKAsIAAhWIAVAAIAABWg");
	this.shape_145.setTransform(-70,-19.3);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#262733").s().p("AAAAhIAAgyIgOAHIAAgOIAOgIIAOAAIAABBg");
	this.shape_146.setTransform(33.5,-43.9);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#262733").s().p("AARAhIgegnIAAAnIgPAAIAAhBIAOAAIAcAmIAAgmIAPAAIAABBg");
	this.shape_147.setTransform(24,-43.9);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#262733").s().p("AgXAaQgJgKAAgQQAAgPAJgKQAIgJAPABQAQgBAIAJQAJAIAAARQAAARgJAJQgIAIgQAAQgPAAgIgIgAgLgPQgEAEAAALQAAAMAEAEQAFAGAGAAQAIAAAEgGQAEgFAAgLQAAgLgEgEQgEgGgIABQgGgBgFAGg");
	this.shape_148.setTransform(16.2,-43.9);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#262733").s().p("AgHAhIAAhBIAPAAIAABBg");
	this.shape_149.setTransform(10.5,-43.9);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#262733").s().p("AgMAiIgKgEIAAgPQAFAEAFABQAFACAGAAQAJAAAAgHQAAgCgDgDIgNgFQgGgBgFgEQgEgEAAgIQAAgGADgFQACgFAGgDQAGgDAHAAIALABIAJAEIAAAPIgJgFIgKgCQgEAAgCACQgDABAAAEQAAAAAAABQAAABABAAQAAABAAAAQAAAAABABIAEACIAGADIALAEQAEABACAEQACADAAAGQAAAGgCAFQgDAFgGADQgGADgHAAIgMgBg");
	this.shape_150.setTransform(5.6,-43.9);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#262733").s().p("AgMAiQgEgBgGgDIAAgPQAFAEAFABQAFACAGAAQAJAAAAgHQAAgCgDgDQgFgCgEgBIgEgCQgHgCgEgDQgEgEAAgIQAAgHACgEQADgFAGgDQAGgDAHAAIAKABIAJAEIAAAPIgJgFIgJgCQgEAAgCACQgDABAAAEQAAAAAAABQAAABABAAQAAABAAAAQAAAAABABIAEACIAGADIAKAEQAFABACAEQACAEAAAFQAAAHgDAEQgDAFgFADQgGADgHAAIgMgBg");
	this.shape_151.setTransform(-0.6,-43.9);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#262733").s().p("AgWAhIAAhBIAtAAIAAAMIgdAAIAAAPIAZAAIAAALIgZAAIAAAPIAdAAIAAAMg");
	this.shape_152.setTransform(-7,-43.9);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#262733").s().p("AgMAiQgEgBgGgDIAAgPQAFAEAFABQAFACAGAAQAJAAAAgHQAAgCgDgDQgFgCgEgBIgEgCQgHgCgEgDQgEgEAAgIQAAgHACgEQADgFAGgDQAGgDAHAAIAKABIAJAEIAAAPIgJgFIgJgCQgEAAgCACQgDABAAAEQAAAAAAABQAAABABAAQAAABAAAAQAAAAABABIAEACIAGADIAKAEQAFABACAEQACAEAAAFQAAAHgDAEQgDAFgFADQgGADgHAAIgMgBg");
	this.shape_153.setTransform(-13.3,-43.9);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#262733").s().p("AgMAiIgKgEIAAgPQAFAEAFABQAFACAGAAQAJAAAAgHQAAgCgDgDIgNgFQgGgBgFgEQgEgEAAgIQAAgGADgFQACgFAGgDQAGgDAHAAIALABIAJAEIAAAPIgJgFIgKgCQgEAAgCACQgDABAAAEQAAAAAAABQAAABABAAQAAABAAAAQAAAAABABIAEACIAGADIALAEQAEABACAEQACADAAAGQAAAGgCAFQgDAFgGADQgGADgHAAIgMgBg");
	this.shape_154.setTransform(-22.9,-43.9);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#262733").s().p("AANAhIgNgqIgMAqIgQAAIgThBIASAAIALAtIANgtIALAAIAOAuIAKguIASAAIgSBBg");
	this.shape_155.setTransform(-31.3,-43.9);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f().s("#3F3B4F").ss(3).p("AtRtRIAAajIajAAIAA6jg");

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#FFFFFF").s().p("AtRNSIAA6jIajAAIAAajg");

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#FFFFFF").s().p("AtRNSIAA6jIajAAIAAajg");
	this.shape_158.setTransform(0,0,1.412,1.412);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.SD16, new cjs.Rectangle(-120,-120,240,240), null);


(lib.SD15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#262733").s().p("AgBArIAAhBIgRAJIAAgSIASgLIATAAIAABVg");
	this.shape.setTransform(41.7,-0.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#262733").s().p("AgjArIAAhVIAmAAQAQAAAJAHQAIAHAAAOQAAAOgJAHQgIAIgQAAIgRAAIAAAcgAgOAAIAPAAQAFAAAEgEQADgDAAgGQAAgNgMAAIgPAAg");
	this.shape_1.setTransform(30,-0.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#262733").s().p("AgeAiQgLgLAAgXQAAgVAKgMQAMgLATAAQATAAAMALQALAMAAAVQAAAVgLANQgLALgUAAQgTAAgLgLgAgPgUQgFAFAAAPQAAAQAFAFQAFAHAKAAQAKAAAFgHQAFgFAAgQQAAgPgFgFQgFgHgKAAQgKAAgFAHg");
	this.shape_2.setTransform(20.1,-0.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#262733").s().p("AAQArIAAgiIgfAAIAAAiIgVAAIAAhVIAVAAIAAAjIAfAAIAAgjIAVAAIAABVg");
	this.shape_3.setTransform(10,-0.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#262733").s().p("AgQAsQgHgCgGgDIAAgUQAGAFAHACQAHADAIAAQALAAAAgJQAAgFgEgCIgQgGQgLgEgEgEQgGgFAAgLQAAgGAEgIQAEgGAHgEQAHgDALAAQAIAAAFABQAFABAHADIAAAVQgGgFgGgCQgGgDgHAAQgEAAgEACQgDACAAAFQAAADACACIAFAEIAJADQAHACAGADQAFACADAFQAEAFAAAHQAAAIgEAGQgEAGgHAEQgIAEgJAAQgIAAgIgBg");
	this.shape_4.setTransform(1,-0.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#262733").s().p("AAMArIgWgiIgGAHIAAAbIgVAAIAAhVIAVAAIAAAkIAZgkIAbAAIggAkIAiAxg");
	this.shape_5.setTransform(-7.5,-0.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#262733").s().p("AAMArIgQgeIgNAAIAAAeIgVAAIAAhVIAqAAQAPAAAHAGQAJAIgBANQAAAIgEAHQgFAHgIACIAWAigAgRgBIARAAQAMAAAAgNQAAgFgDgEQgDgDgGAAIgRAAg");
	this.shape_6.setTransform(-17.3,-0.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#262733").s().p("AgeAiQgLgMAAgWQAAgVALgMQALgLATAAQAUAAALALQALALAAAWQAAAWgLAMQgKALgVAAQgTAAgLgLgAgOgUQgFAFAAAPQAAAQAFAFQAFAHAJAAQALAAAFgHQAFgFAAgQQAAgPgFgFQgFgHgLAAQgJAAgFAHg");
	this.shape_7.setTransform(-27.6,-0.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#262733").s().p("AASArIgSg3IgQA3IgVAAIgYhVIAWAAIAPA7IARg7IAPAAIASA7IAOg7IAXAAIgZBVg");
	this.shape_8.setTransform(-39,-0.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#3F3B4F").ss(3).p("AtRtRIAAajIajAAIAA6jg");
	this.shape_9.setTransform(-0.1,-0.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AtRNSIAA6jIajAAIAAajg");
	this.shape_10.setTransform(-0.1,-0.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AtRNSIAA6jIajAAIAAajg");
	this.shape_11.setTransform(0,0,1.412,1.412);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.SD15, new cjs.Rectangle(-120,-120,240,240.1), null);


(lib.SD14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgDAbIAAguIgSAAIAAgHIArAAIAAAHIgSAAIAAAug");
	this.shape.setTransform(26.2,88.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAMAbIgMgVIgMAAIAAAVIgIAAIAAg1IAUAAQAIAAAFAFQAGAEAAAIQAAAGgEADQgDAEgGABIAPAWgAgMAAIAMAAQAGAAADgCQACgDAAgEQAAgKgMAAIgLAAg");
	this.shape_1.setTransform(21.3,88.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgQAbIAAg1IAiAAIAAAHIgbAAIAAARIAXAAIAAAGIgXAAIAAAQIAbAAIAAAHg");
	this.shape_2.setTransform(16,88.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgSAbIAAg1IASAAQAJAAAFAFQAFAEAAAIQAAAIgFAEQgFAEgJAAIgKAAIAAAUgAgKAAIAKAAQAGAAADgBQACgDAAgFQAAgEgCgDQgDgDgGAAIgKAAg");
	this.shape_3.setTransform(11,88.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAPAbIgPgVIgNAVIgJAAIATgbIgTgaIAJAAIANAUIAOgUIAJAAIgTAaIAUAbg");
	this.shape_4.setTransform(5.6,88.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgQAbIAAg1IAiAAIAAAHIgbAAIAAARIAXAAIAAAGIgXAAIAAAQIAbAAIAAAHg");
	this.shape_5.setTransform(0.6,88.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AANAbIAAgXIgZAAIAAAXIgHAAIAAg1IAHAAIAAAYIAZAAIAAgYIAHAAIAAA1g");
	this.shape_6.setTransform(-8.1,88.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgCAbIgGgDIgHgFQgCgCgBgFQgBgFAAgHQAAgGABgEIADgIIAHgFIAGgDIAGAAQAJAAAHADIAAAHQgHgEgIAAQgIAAgFAFQgEAFAAAKQAAALAEAFQAFAFAIAAQAIAAAHgEIAAAHQgHADgJAAIgGAAg");
	this.shape_7.setTransform(-13.6,88.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AARAbIgGgPIgVAAIgGAPIgIAAIAVg1IAGAAIAWA1gAAJAFIgJgVIgHAVIAQAAg");
	this.shape_8.setTransform(-19.2,88.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgQAbIAAg1IAiAAIAAAHIgbAAIAAARIAXAAIAAAGIgXAAIAAAQIAbAAIAAAHg");
	this.shape_9.setTransform(-24.4,88.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AASAbIAAgpIgSAXIgRgXIAAApIgIAAIAAg1IAJAAIAQAXIASgXIAIAAIAAA1g");
	this.shape_10.setTransform(26,77.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgGAbIgHgDQgDgCgCgDQgDgCgBgFQgCgFAAgHQAAgGACgEQABgFADgDQACgDADgCIAHgDIAGAAIAHAAQADABADACIAGAFQADADABAFQACAEAAAGQAAAHgCAFQgBAFgDACIgGAFQgDACgDABIgHAAIgGAAgAgEgTIgFABIgEAEIgCAGIgBAIIABAJIACAGIAEAEIAFABIAEABIAFgBIAFgBIAEgEIACgGIABgJIgBgIIgCgGIgEgEIgFgBIgFgBg");
	this.shape_11.setTransform(19.3,77.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AAMAbIgMgVIgMAAIAAAVIgHAAIAAg1IATAAQAIAAAFAFQAGAEgBAIQABAGgEADQgEAEgEABIANAWgAgMAAIAMAAQAGAAACgCQADgDAAgEQAAgKgLAAIgMAAg");
	this.shape_12.setTransform(13.7,77.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgQAbIAAg1IAhAAIAAAHIgZAAIAAARIAWAAIAAAGIgWAAIAAAXg");
	this.shape_13.setTransform(8.5,77.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AAPAbIgPgVIgNAVIgJAAIATgbIgTgaIAJAAIANAUIAOgUIAJAAIgTAaIAUAbg");
	this.shape_14.setTransform(0.3,77.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgDAbIAAg1IAHAAIAAA1g");
	this.shape_15.setTransform(-3.6,77.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AAMAbIgMgVIgMAAIAAAVIgIAAIAAg1IAUAAQAIAAAFAFQAGAEgBAIQABAGgEADQgEAEgFABIAPAWgAgMAAIAMAAQAGAAACgCQADgDAAgEQAAgKgMAAIgLAAg");
	this.shape_16.setTransform(-7.4,77.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgDAbIAAguIgSAAIAAgHIArAAIAAAHIgSAAIAAAug");
	this.shape_17.setTransform(-12.8,77.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AARAbIgGgPIgVAAIgGAPIgIAAIAVg1IAHAAIAVA1gAAIAFIgIgVIgIAVIAQAAg");
	this.shape_18.setTransform(-18.1,77.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AASAbIAAgpIgSAXIgRgXIAAApIgHAAIAAg1IAHAAIARAXIARgXIAIAAIAAA1g");
	this.shape_19.setTransform(-24.4,77.8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#2FB7AA").s().p("AmGC/IAAl9IMNAAIAAF9g");
	this.shape_20.setTransform(1,84.9);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#262733").s().p("AATAhIgTgbIgSAbIgJAAIAYghIgXggIAIAAIASAaIATgaIAJAAIgYAgIAYAhg");
	this.shape_21.setTransform(53.5,27.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#262733").s().p("AgDAhIAAhBIAHAAIAABBg");
	this.shape_22.setTransform(49,27.8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#262733").s().p("AARAhIgRgbIgRAAIAAAbIgHAAIAAhBIAYAAQAKAAAGAFQAGAEAAAKQAAAEgBAEIgDAFIgFADIgDACIgDAAIASAcgAgRAAIARAAQAEAAADgBQAEgBABgCIACgEIABgFIgBgEIgCgEQgBgCgEgBQgDgCgEAAIgRAAg");
	this.shape_23.setTransform(44.5,27.8);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#262733").s().p("AgCAhIAAg6IgYAAIAAgHIA1AAIAAAHIgXAAIAAA6g");
	this.shape_24.setTransform(38,27.8);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#262733").s().p("AAWAhIgIgVIgbAAIgIAVIgIAAIAahBIAHAAIAaBBgAAMAGIgMgeIgLAeIAXAAg");
	this.shape_25.setTransform(31.5,27.8);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#262733").s().p("AAYAhIAAg2IgYAhIgWghIAAA2IgIAAIAAhBIAIAAIAWAgIAXggIAIAAIAABBg");
	this.shape_26.setTransform(23.9,27.8);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#262733").s().p("AgCAhIAAg6IgYAAIAAgHIA1AAIAAAHIgYAAIAAA6g");
	this.shape_27.setTransform(13,27.8);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#262733").s().p("AAUAhIgng3IAAA3IgIAAIAAhBIAJAAIAmA3IAAg3IAIAAIAABBg");
	this.shape_28.setTransform(6.1,27.8);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#262733").s().p("AgUAhIAAhBIApAAIAAAGIgiAAIAAAXIAeAAIAAAGIgeAAIAAAXIAiAAIAAAHg");
	this.shape_29.setTransform(-0.6,27.8);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#262733").s().p("AAYAhIAAg2IgYAhIgWghIAAA2IgIAAIAAhBIAIAAIAWAgIAXggIAIAAIAABBg");
	this.shape_30.setTransform(-7.9,27.8);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#262733").s().p("AAUAhIgng3IAAA3IgIAAIAAhBIAJAAIAmA3IAAg3IAIAAIAABBg");
	this.shape_31.setTransform(-15.9,27.8);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#262733").s().p("AgeAAQAAghAeAAQAfAAAAAhQAAAigfAAQgeAAAAgigAgRgUQgFAHgBANQABAOAFAHQAGAGALAAQANAAAFgGQAGgHAAgOQAAgNgGgHQgFgHgNAAQgLAAgGAHg");
	this.shape_32.setTransform(-23.6,27.8);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#262733").s().p("AARAhIgRgbIgRAAIAAAbIgHAAIAAhBIAYAAQAKAAAGAFQAGAEAAAKQAAAEgBAEIgDAFIgFADIgDACIgDAAIASAcgAgRAAIARAAQAEAAADgBQAEgBABgCIACgEIABgFIgBgEIgCgEQgBgCgEgBQgDgCgEAAIgRAAg");
	this.shape_33.setTransform(-30.6,27.8);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#262733").s().p("AgDAhIAAhBIAHAAIAABBg");
	this.shape_34.setTransform(-35.5,27.8);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#262733").s().p("AgCAhIgahBIAIAAIAUA3IAWg3IAHAAIgZBBg");
	this.shape_35.setTransform(-40.2,27.8);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#262733").s().p("AAUAhIgng3IAAA3IgIAAIAAhBIAJAAIAmA3IAAg3IAIAAIAABBg");
	this.shape_36.setTransform(-47.3,27.8);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#262733").s().p("AgUAhIAAhBIApAAIAAAGIgiAAIAAAXIAeAAIAAAGIgeAAIAAAXIAiAAIAAAHg");
	this.shape_37.setTransform(-54,27.8);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#262733").s().p("AgUAhIAAhBIAIAAIAAA6IAhAAIAAAHg");
	this.shape_38.setTransform(34.9,14.4);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#262733").s().p("AAWAhIgIgVIgbAAIgIAVIgIAAIAahBIAHAAIAaBBgAAMAGIgMgeIgLAeIAXAAg");
	this.shape_39.setTransform(28.3,14.4);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#262733").s().p("AAUAhIgng3IAAA3IgIAAIAAhBIAJAAIAmA3IAAg3IAIAAIAABBg");
	this.shape_40.setTransform(21.1,14.4);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#262733").s().p("AgeAAQAAghAeAAQAfAAAAAhQAAAigfAAQgeAAAAgigAgRgUQgGAHABANQgBAOAGAHQAGAGALAAQAMAAAGgGQAGgHAAgOQAAgNgGgHQgGgHgMAAQgLAAgGAHg");
	this.shape_41.setTransform(13.3,14.4);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#262733").s().p("AgDAhIAAhBIAHAAIAABBg");
	this.shape_42.setTransform(8,14.4);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#262733").s().p("AgDAhIAAg6IgXAAIAAgHIA1AAIAAAHIgXAAIAAA6g");
	this.shape_43.setTransform(3.6,14.4);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#262733").s().p("AAWAhIgIgVIgbAAIgIAVIgIAAIAahBIAHAAIAaBBgAAMAGIgMgeIgLAeIAXAAg");
	this.shape_44.setTransform(-2.9,14.4);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#262733").s().p("AAUAhIgng3IAAA3IgIAAIAAhBIAJAAIAmA3IAAg3IAIAAIAABBg");
	this.shape_45.setTransform(-10.1,14.4);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#262733").s().p("AARAhIgRgbIgRAAIAAAbIgHAAIAAhBIAYAAQAKAAAGAFQAGAEAAAKQAAAEgBAEIgDAFIgFADIgDACIgDAAIASAcgAgRAAIARAAQAEAAADgBQAEgBABgCIACgEIABgFIgBgEIgCgEQgBgCgEgBQgDgCgEAAIgRAAg");
	this.shape_46.setTransform(-20.7,14.4);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#262733").s().p("AgeAAQAAghAeAAQAfAAAAAhQAAAigfAAQgeAAAAgigAgRgUQgFAHgBANQABAOAFAHQAGAGALAAQANAAAFgGQAGgHAAgOQAAgNgGgHQgFgHgNAAQgLAAgGAHg");
	this.shape_47.setTransform(-28.2,14.4);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#262733").s().p("AgTAhIAAhBIAnAAIAAAGIggAAIAAAXIAdAAIAAAGIgdAAIAAAeg");
	this.shape_48.setTransform(-34.8,14.4);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#262733").s().p("AAUAhIgng3IAAA3IgIAAIAAhBIAJAAIAmA3IAAg3IAIAAIAABBg");
	this.shape_49.setTransform(50.7,1.1);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#262733").s().p("AgeAAQAAghAeAAQAfAAAAAhQAAAigfAAQgeAAAAgigAgRgUQgFAHgBANQABAOAFAHQAGAGALAAQANAAAFgGQAGgHAAgOQAAgNgGgHQgFgHgNAAQgLAAgGAHg");
	this.shape_50.setTransform(43,1.1);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#262733").s().p("AgDAhIAAhBIAHAAIAABBg");
	this.shape_51.setTransform(37.7,1.1);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#262733").s().p("AgCAhIAAg6IgYAAIAAgHIA1AAIAAAHIgYAAIAAA6g");
	this.shape_52.setTransform(33.3,1.1);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#262733").s().p("AAWAhIgIgVIgbAAIgIAVIgIAAIAahBIAHAAIAaBBgAAMAGIgMgeIgLAeIAXAAg");
	this.shape_53.setTransform(26.8,1.1);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#262733").s().p("AAFAiQgeAAAAgiQAAghAeAAQALAAAKAEIAAAGQgKgEgKAAQgMAAgGAHQgFAHAAANQAAAOAFAHQAGAGAMAAQAKAAAKgEIAAAHQgKAEgKAAg");
	this.shape_54.setTransform(20.1,1.1);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#262733").s().p("AgDAhIAAhBIAHAAIAABBg");
	this.shape_55.setTransform(15.3,1.1);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#262733").s().p("AgUAhIAAhBIAIAAIAAA6IAhAAIAAAHg");
	this.shape_56.setTransform(11.4,1.1);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#262733").s().p("AgXAhIAAhBIAYAAQAKAAAHAFQAFAFABAKQgBAKgFAEQgHAGgKAAIgQAAIAAAZgAgPABIAPAAIAJgBQADAAABgDIADgEIAAgFIAAgFIgDgEQgBgCgDgBQgEgCgFAAIgPAAg");
	this.shape_57.setTransform(5.4,1.1);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#262733").s().p("AAYAhIAAg2IgYAhIgWghIAAA2IgIAAIAAhBIAIAAIAWAgIAXggIAIAAIAABBg");
	this.shape_58.setTransform(-2.2,1.1);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#262733").s().p("AgDAhIAAhBIAHAAIAABBg");
	this.shape_59.setTransform(-7.7,1.1);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#262733").s().p("AAUAhIgng3IAAA3IgIAAIAAhBIAJAAIAmA3IAAg3IAIAAIAABBg");
	this.shape_60.setTransform(-16.7,1.1);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#262733").s().p("AgDAhIAAhBIAHAAIAABBg");
	this.shape_61.setTransform(-21.9,1.1);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#262733").s().p("AgUAhIAAhBIAIAAIAAA6IAhAAIAAAHg");
	this.shape_62.setTransform(-29.6,1.1);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#262733").s().p("AgUAhIAAhBIAIAAIAAA6IAhAAIAAAHg");
	this.shape_63.setTransform(-35.2,1.1);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#262733").s().p("AgDAhIAAhBIAHAAIAABBg");
	this.shape_64.setTransform(-39.7,1.1);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#262733").s().p("AgUAhIAAhBIApAAIAAAGIghAAIAAAXIAcAAIAAAGIgcAAIAAAeg");
	this.shape_65.setTransform(-43.7,1.1);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#2FB7AA").s().p("AgHAIQgDgDgBgFQABgEADgDQADgDAEAAQAFAAADADQAEADAAAEQAAAFgEADQgDADgFAAQgEAAgDgDg");
	this.shape_66.setTransform(-52.8,1.1);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#262733").s().p("AAWArIgogzIAAAzIgTAAIAAhVIASAAIAlAyIAAgyIAUAAIAABVg");
	this.shape_67.setTransform(43.4,-21);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#262733").s().p("AgeAiQgLgLAAgXQAAgVALgMQAKgLAUAAQATAAAMALQALAMAAAVQAAAWgLAMQgLALgUAAQgTAAgLgLgAgPgUQgFAGAAAOQAAAPAFAGQAFAHAKAAQAKAAAFgHQAGgGAAgPQAAgOgGgGQgFgHgKAAQgKAAgFAHg");
	this.shape_68.setTransform(33.3,-21);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#262733").s().p("AgJArIAAhVIATAAIAABVg");
	this.shape_69.setTransform(25.9,-21);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#262733").s().p("AgJArIAAhFIgZAAIAAgQIBFAAIAAAQIgZAAIAABFg");
	this.shape_70.setTransform(19.4,-21);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#262733").s().p("AAWArIgHgSIgfAAIgGASIgUAAIAhhVIAWAAIAeBVgAgLAJIAVAAIgKggg");
	this.shape_71.setTransform(11.2,-21);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#262733").s().p("AAMArIgQgeIgNAAIAAAeIgVAAIAAhVIApAAQAPAAAIAGQAIAIAAANQABAIgFAHQgFAHgIACIAWAigAgRgBIARAAQAMAAAAgNQAAgFgDgEQgDgDgFAAIgSAAg");
	this.shape_72.setTransform(1.7,-21);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#262733").s().p("AAWArIgHgSIgfAAIgGASIgUAAIAhhVIAWAAIAeBVgAgLAJIAVAAIgKggg");
	this.shape_73.setTransform(-8.3,-21);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#262733").s().p("AgjArIAAhVIAmAAQARAAAHAHQAJAGAAAPQAAAOgJAHQgIAIgQAAIgRAAIAAAcgAgOAAIAPAAQAGAAADgEQADgDAAgGQAAgNgMAAIgPAAg");
	this.shape_74.setTransform(-16.6,-21);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#262733").s().p("AgdArIAAhVIA7AAIAAAQIgmAAIAAATIAhAAIAAAPIghAAIAAATIAmAAIAAAQg");
	this.shape_75.setTransform(-25.5,-21);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#262733").s().p("AAMArIgQgeIgNAAIAAAeIgVAAIAAhVIApAAQAPAAAIAGQAJAIAAANQgBAJgFAGQgEAHgIACIAWAigAgRgBIARAAQAMAAgBgNQABgFgDgEQgDgDgFAAIgSAAg");
	this.shape_76.setTransform(-34.4,-21);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#262733").s().p("AgjArIAAhVIAmAAQARAAAHAHQAJAGAAAPQAAAOgJAHQgJAIgPAAIgRAAIAAAcgAgOAAIAPAAQAGAAADgEQADgDAAgGQAAgNgMAAIgPAAg");
	this.shape_77.setTransform(-44.1,-21);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#262733").s().p("AgjArIAAhVIAmAAQARAAAHAHQAJAHAAAOQAAAOgJAHQgJAIgPAAIgRAAIAAAcgAgOAAIAOAAQAHAAADgEQADgDAAgGQAAgNgNAAIgOAAg");
	this.shape_78.setTransform(35.5,-36.6);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#262733").s().p("AgeAiQgLgLAAgXQAAgVALgMQAKgLAUAAQAUAAALALQALALAAAWQAAAWgLAMQgLALgUAAQgTAAgLgLgAgPgUQgFAGAAAOQAAAPAFAGQAFAHAKAAQAKAAAFgHQAGgGAAgPQAAgOgGgGQgFgHgKAAQgKAAgFAHg");
	this.shape_79.setTransform(25.6,-36.6);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#262733").s().p("AAQArIAAgiIgfAAIAAAiIgVAAIAAhVIAVAAIAAAjIAfAAIAAgjIAVAAIAABVg");
	this.shape_80.setTransform(15.5,-36.6);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#262733").s().p("AgQAsIgNgFIAAgUQAGAFAHACQAHADAIAAQALAAAAgJQAAgEgEgDIgLgFIgFgBQgLgEgEgEQgGgFAAgLQAAgHAEgGQAEgHAHgEQAHgDALAAQAHAAAGABQAFABAHADIAAAVQgGgFgGgCQgGgDgGAAQgFAAgEACQgDADAAAEQAAACACADIAFAEIAJADQAHACAGADQAEACAFAFQADAEAAAIQAAAHgEAHQgDAGgIAEQgHAEgJAAQgJAAgIgBg");
	this.shape_81.setTransform(6.5,-36.6);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#262733").s().p("AAMArIgWgiIgGAHIAAAbIgVAAIAAhVIAVAAIAAAkIAZgkIAbAAIghAkIAjAxg");
	this.shape_82.setTransform(-2,-36.6);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#262733").s().p("AANArIgRgeIgNAAIAAAeIgVAAIAAhVIAqAAQAPAAAHAGQAIAIAAANQABAIgFAHQgFAHgIACIAWAigAgRgBIARAAQAMAAAAgNQAAgFgDgEQgDgDgFAAIgSAAg");
	this.shape_83.setTransform(-11.8,-36.6);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#262733").s().p("AgeAiQgLgMAAgWQgBgUALgNQAMgLATAAQAUAAALALQALAMAAAVQAAAVgLANQgLALgUAAQgSAAgMgLgAgOgUQgFAFgBAPQABAQAFAFQAEAHAKAAQALAAAEgHQAGgFAAgQQAAgPgGgFQgEgHgLAAQgKAAgEAHg");
	this.shape_84.setTransform(-22,-36.6);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#262733").s().p("AASArIgSg3IgQA3IgVAAIgYhVIAXAAIAOA7IARg7IAPAAIASA7IANg7IAYAAIgZBVg");
	this.shape_85.setTransform(-33.5,-36.6);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f().s("#3F3B4F").ss(3).p("AtRtRIAAajIajAAIAA6jg");
	this.shape_86.setTransform(-0.1,-0.1);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#FFFFFF").s().p("AtRNSIAA6jIajAAIAAajg");
	this.shape_87.setTransform(-0.1,-0.1);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#FFFFFF").s().p("AtRNSIAA6jIajAAIAAajg");
	this.shape_88.setTransform(0,0,1.412,1.412);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.SD14, new cjs.Rectangle(-120,-120,240,240.1), null);


(lib.SD13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAPAbIgdgqIAAAqIgIAAIAAg1IAJAAIAdAqIAAgqIAHAAIAAA1g");
	this.shape.setTransform(75,84.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgGAbIgHgDQgDgCgCgDQgDgCgBgFQgCgFAAgHQAAgGACgEQABgFADgDQACgDADgCIAHgDIAGAAIAHAAQADABADACIAGAFQADADABAFQACAEAAAGQAAAHgCAFQgBAFgDACIgGAFQgDACgDABIgHAAIgGAAgAgEgTIgFABIgEAEIgCAGIgBAIIABAJIACAGIAEAEIAFABIAEABIAFgBIAFgBIAEgEIACgGIABgJIgBgIIgCgGIgEgEIgFgBIgFgBg");
	this.shape_1.setTransform(68.6,84.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgDAbIAAg1IAHAAIAAA1g");
	this.shape_2.setTransform(64.2,84.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgDAbIAAguIgSAAIAAgHIArAAIAAAHIgSAAIAAAug");
	this.shape_3.setTransform(60.5,84.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AARAbIgGgPIgVAAIgGAPIgIAAIAVg1IAGAAIAWA1gAAJAFIgJgVIgHAVIAQAAg");
	this.shape_4.setTransform(55.2,84.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgDAbIAAguIgSAAIAAgHIArAAIAAAHIgSAAIAAAug");
	this.shape_5.setTransform(49.9,84.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgDAbIAAg1IAHAAIAAA1g");
	this.shape_6.setTransform(46.2,84.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgDAbIgUg1IAIAAIAPArIAQgrIAIAAIgUA1g");
	this.shape_7.setTransform(42.3,84.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAPAbIgdgqIAAAqIgIAAIAAg1IAJAAIAdAqIAAgqIAHAAIAAA1g");
	this.shape_8.setTransform(36.4,84.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgDAbIAAg1IAHAAIAAA1g");
	this.shape_9.setTransform(32,84.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#2FB7AA").s().p("AmGDAIAAl/IMNAAIAAF/g");
	this.shape_10.setTransform(54.7,85);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgQAYIAAgIQAHAEAIAAQALAAABgHQAAgDgDgDIgFgDIgGgCIgHgCQgDgBgCgDQgCgDAAgEQAAgGAFgFQAEgEAJAAQAHAAAHADIAAAHQgGgDgHAAQgLAAAAAIQAAAAAAABQAAAAAAABQAAAAABABQAAAAABABIAFACIAGADIAHACQADACACADQACADAAAFQAAAHgFAEQgFADgIAAQgIAAgIgDg");
	this.shape_11.setTransform(-38.4,90.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgDAbIAAguIgSAAIAAgHIArAAIAAAHIgSAAIAAAug");
	this.shape_12.setTransform(-43.3,90.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AAMAbIgMgVIgMAAIAAAVIgIAAIAAg1IAUAAQAIAAAFAFQAGAEgBAIQAAAGgDADQgEAEgFABIAPAWgAgMAAIAMAAQAGAAACgCQADgDAAgEQAAgKgMAAIgLAAg");
	this.shape_13.setTransform(-48.2,90.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgQAbIAAg1IAhAAIAAAHIgaAAIAAARIAXAAIAAAGIgXAAIAAAQIAaAAIAAAHg");
	this.shape_14.setTransform(-53.5,90.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgSAbIAAg1IASAAQAJAAAFAFQAFAEAAAIQAAAIgFAEQgFAEgJAAIgKAAIAAAUgAgKAAIAKAAQAGAAADgBQADgDgBgFQABgEgDgDQgDgDgGAAIgKAAg");
	this.shape_15.setTransform(-58.5,90.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AAPAbIgPgVIgOAVIgJAAIATgbIgSgaIAJAAIANAUIAOgUIAJAAIgTAaIAUAbg");
	this.shape_16.setTransform(-63.9,90.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgRAbIAAg1IAiAAIAAAHIgaAAIAAARIAXAAIAAAGIgXAAIAAAQIAaAAIAAAHg");
	this.shape_17.setTransform(-68.9,90.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgQAbIAAg1IAhAAIAAAHIgZAAIAAARIAWAAIAAAGIgWAAIAAAXg");
	this.shape_18.setTransform(-40.4,79.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgGAbIgHgDQgDgCgCgDQgDgCgBgFQgCgFAAgHQAAgGACgEQABgFADgDQACgDADgCIAHgDIAGAAIAHAAQADABADACIAGAFQADADABAFQACAEAAAGQAAAHgCAFQgBAFgDACIgGAFQgDACgDABIgHAAIgGAAgAgEgTIgFABIgEAEIgCAGIgBAIIABAJIACAGIAEAEIAFABIAEABIAFgBIAFgBIAEgEIACgGIABgJIgBgIIgCgGIgEgEIgFgBIgFgBg");
	this.shape_19.setTransform(-46.1,79.3);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgDAbIAAguIgSAAIAAgHIArAAIAAAHIgSAAIAAAug");
	this.shape_20.setTransform(-54.8,79.3);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgQAYIAAgIQAHAEAIAAQALAAABgHQAAgDgDgDIgFgDIgGgCIgHgCQgDgBgCgDQgCgDAAgEQAAgGAFgFQAEgEAJAAQAHAAAHADIAAAHQgGgDgHAAQgLAAAAAIQAAAAAAABQAAAAAAABQAAAAABABQAAAAABABIAFACIAGADIAHACQADACACADQACADAAAFQAAAHgFAEQgFADgIAAQgIAAgIgDg");
	this.shape_21.setTransform(-59.7,79.3);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgDAbIAAg1IAHAAIAAA1g");
	this.shape_22.setTransform(-63.4,79.3);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgQAbIAAg1IAIAAIAAAuIAZAAIAAAHg");
	this.shape_23.setTransform(-66.7,79.3);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#2FB7AA").s().p("AmGDAIAAl/IMNAAIAAF/g");
	this.shape_24.setTransform(-53.6,85);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#262733").s().p("AgQAsIgNgFIAAgUQAGAFAHACQAHADAIAAQALAAAAgJQAAgEgEgDIgLgFIgFgBQgKgDgFgFQgGgFAAgLQAAgHAEgGQAEgGAHgFQAHgDALAAQAHAAAGABIAMAEIAAAVIgMgHQgGgDgGAAQgFAAgEACQgDADAAAEQAAACACADIAFAEIAJADQAHACAGADQAFACAEAFQADAEAAAIQAAAHgEAHQgEAHgHAEQgIADgIAAQgJAAgIgBg");
	this.shape_25.setTransform(26.6,7.5);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#262733").s().p("AgKArIAAhFIgYAAIAAgQIBFAAIAAAQIgZAAIAABFg");
	this.shape_26.setTransform(18.4,7.5);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#262733").s().p("AANArIgRgeIgNAAIAAAeIgVAAIAAhVIAqAAQAPAAAHAHQAJAHAAANQAAAHgFAIQgFAHgIACIAWAigAgRgBIARAAQAMAAAAgNQAAgGgDgDQgDgDgFAAIgSAAg");
	this.shape_27.setTransform(9.7,7.5);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#262733").s().p("AgdArIAAhVIA7AAIAAAQIgmAAIAAATIAhAAIAAAPIghAAIAAATIAmAAIAAAQg");
	this.shape_28.setTransform(0.4,7.5);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#262733").s().p("AgjArIAAhVIAmAAQAPAAAJAHQAJAHAAAOQAAAOgJAHQgJAIgPAAIgRAAIAAAcgAgOAAIAOAAQAHAAADgEQADgDAAgGQAAgNgNAAIgOAAg");
	this.shape_29.setTransform(-8.3,7.5);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#262733").s().p("AARArIgSgbIgRAbIgXAAIAdgrIgegqIAbAAIARAbIARgbIAWAAIgcAqIAdArg");
	this.shape_30.setTransform(-17.8,7.5);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#262733").s().p("AgdArIAAhVIA7AAIAAAQIgmAAIAAATIAhAAIAAAPIghAAIAAATIAmAAIAAAQg");
	this.shape_31.setTransform(-26.7,7.5);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#262733").s().p("AgdArIAAhVIA7AAIAAAQIgmAAIAAATIAhAAIAAAPIghAAIAAATIAmAAIAAAQg");
	this.shape_32.setTransform(23.5,-8.1);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#262733").s().p("AgQAsIgNgFIAAgUQAGAFAHACQAHADAIAAQALAAAAgJQAAgEgEgDIgLgFIgFgBQgKgDgFgFQgGgFAAgLQAAgHAEgGQADgGAIgFQAHgDALAAQAHAAAGABIAMAEIAAAVQgEgDgIgEQgGgDgHAAQgEAAgEACQgDADAAAEQAAACACADIAFAEIAJADQAHACAGADQAFACADAFQAEAEAAAIQAAAIgEAGQgDAGgIAFQgIADgIAAQgJAAgIgBg");
	this.shape_33.setTransform(15.3,-8.1);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#262733").s().p("AgeAiQgMgMABgWQAAgUALgNQALgLATAAQATAAAMALQALAMABAVQAAAVgLANQgMALgUAAQgTAAgLgLgAgOgUQgGAFAAAPQAAAQAGAFQAEAHAKAAQALAAAEgHQAFgFABgQQgBgPgFgFQgEgHgLAAQgKAAgEAHg");
	this.shape_34.setTransform(6.1,-8.1);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#262733").s().p("AgeAiQgLgLAAgXQAAgVALgMQAKgLAUAAQAUAAALALQALALAAAWQAAAWgLAMQgLALgUAAQgTAAgLgLgAgPgUQgFAGAAAOQAAAPAFAGQAFAHAKAAQAKAAAFgHQAGgGAAgPQAAgOgGgGQgEgHgLAAQgKAAgFAHg");
	this.shape_35.setTransform(-4.2,-8.1);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#262733").s().p("AAQArIAAgiIgfAAIAAAiIgVAAIAAhVIAVAAIAAAjIAfAAIAAgjIAVAAIAABVg");
	this.shape_36.setTransform(-14.2,-8.1);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#262733").s().p("AgiAAQAAgsApAAQAOAAAOAGIAAASQgMgIgNAAQgLAAgGAHQgFAGAAAPQAAAQAGAGQAGAHALAAQAGAAAGgCIAMgGIAAASIgNAEQgHACgIAAQgpAAAAgtg");
	this.shape_37.setTransform(-23.7,-8.1);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#3F3B4F").ss(3).p("AtRtRIAAajIajAAIAA6jg");

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AtRNSIAA6jIajAAIAAajg");

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AtRNSIAA6jIajAAIAAajg");
	this.shape_40.setTransform(0,0,1.412,1.412);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.SD13, new cjs.Rectangle(-120,-120,240,240), null);


(lib.SD12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#262733").s().p("AgLAhIgJgEIAAgIQADADAGACQAEACAHAAQAHAAADgDQAEgDAAgGQAAgEgCgCIgFgEIgRgHIgHgFQgDgEABgGQAAgFABgDQACgEAFgDQAFgCAGAAIAIABIAJADIAAAIIgDgCIgHgDIgHgBQgFAAgEADQgDADAAAEQAAAEACADIAEADIASAHQADACADAEQADAEABAFQAAAIgGAGQgFAFgLAAg");
	this.shape.setTransform(19.7,29.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#262733").s().p("AgDAhIAAg7IgXAAIAAgGIA1AAIAAAGIgXAAIAAA7g");
	this.shape_1.setTransform(13.4,29.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#262733").s().p("AgUAhIAAhBIApAAIAAAGIgiAAIAAAXIAeAAIAAAGIgeAAIAAAYIAiAAIAAAGg");
	this.shape_2.setTransform(7.2,29.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#262733").s().p("AgSAaQgIgKAAgQQAAgPAIgKQAHgIAPAAQALAAAKAEIAAAIIgLgEIgJgBQgMAAgGAGQgGAHAAANQAAAOAGAHQAGAGAMAAQAJAAAGgCIAAgTIgQAAIAAgGIAXAAIAAAdQgKAFgNAAQgPAAgHgIg");
	this.shape_3.setTransform(0.1,29.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#262733").s().p("AARAhIgRgbIgRAAIAAAbIgHAAIAAhBIAaAAQALAAAEAFQAFAEAAAKQAAAJgEAEQgDAEgIACIASAbgAgRAAIARAAQAHAAAEgDQAEgCAAgHQAAgGgDgEQgEgEgHAAIgSAAg");
	this.shape_4.setTransform(-6.6,29.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#262733").s().p("AAWAhIgIgUIgcAAIgIAUIgHAAIAahBIAGAAIAbBBgAgLAGIAXAAIgMgeg");
	this.shape_5.setTransform(-13.7,29.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#262733").s().p("AgDAhIAAg7IgXAAIAAgGIA1AAIAAAGIgXAAIAAA7g");
	this.shape_6.setTransform(-19.7,29.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#262733").s().p("AgXAhIAAhBIAYAAQALAAAGAFQAFAGAAAJQAAALgFAEQgGAFgLAAIgQAAIAAAZgAgPABIAPAAQAJAAAEgDQAEgEAAgGQAAgFgEgFQgEgDgJAAIgPAAg");
	this.shape_7.setTransform(62.5,17.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#262733").s().p("AAXAhIgIgUIgdAAIgHAUIgIAAIAbhBIAFAAIAbBBgAgKAGIAWAAIgMgeg");
	this.shape_8.setTransform(55.6,17.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#262733").s().p("AgUAhIAAhBIApAAIAAAGIgiAAIAAAXIAdAAIAAAGIgdAAIAAAYIAiAAIAAAGg");
	this.shape_9.setTransform(49,17.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#262733").s().p("AASAhIAAgeIgjAAIAAAeIgHAAIAAhBIAHAAIAAAeIAjAAIAAgeIAHAAIAABBg");
	this.shape_10.setTransform(38.8,17.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#262733").s().p("AgDAhIAAg7IgXAAIAAgGIA1AAIAAAGIgXAAIAAA7g");
	this.shape_11.setTransform(32,17.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#262733").s().p("AgNAhIAcg6IglAAIAAgHIAtAAIAAAGIgcA7g");
	this.shape_12.setTransform(25.8,17.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#262733").s().p("AAUAhIgog3IAAA3IgHAAIAAhBIAIAAIAoA3IAAg3IAGAAIAABBg");
	this.shape_13.setTransform(15.4,17.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#262733").s().p("AgWAaQgHgJAAgRQAAgQAHgJQAIgIAOAAQAPAAAHAIQAIAJAAAQQAAARgIAJQgHAIgPAAQgOAAgIgIgAgQgUQgGAHAAANQAAAOAGAHQAFAHALAAQAMAAAFgHQAGgGgBgPQABgOgGgGQgFgGgMAAQgLAAgFAGg");
	this.shape_14.setTransform(7.7,17.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#262733").s().p("AgTAhIAAhBIAGAAIAAA6IAhAAIAAAHg");
	this.shape_15.setTransform(-2.1,17.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#262733").s().p("AgUAhIAAhBIApAAIAAAGIgiAAIAAAXIAeAAIAAAGIgeAAIAAAYIAiAAIAAAGg");
	this.shape_16.setTransform(-8.4,17.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#262733").s().p("AgZAhIAAhBIAVAAQAPAAAHAIQAIAJAAAPQAAAhgeAAgAgSAbIANAAQAMAAAGgHQAGgGAAgOQAAgMgGgHQgGgHgMAAIgNAAg");
	this.shape_17.setTransform(-15.1,17.9);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#262733").s().p("AgVAaQgIgJAAgRQAAgQAIgJQAHgIAOAAQAPAAAIAIQAHAJAAAQQAAARgHAJQgIAIgPAAQgPAAgGgIgAgQgUQgGAHABANQgBAOAGAHQAFAHALAAQALAAAGgHQAGgGAAgPQAAgOgGgGQgFgGgMAAQgLAAgFAGg");
	this.shape_18.setTransform(-22.6,17.9);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#262733").s().p("AAYAhIAAg2IgYAhIgWggIAAA1IgIAAIAAhBIAIAAIAWAhIAXghIAIAAIAABBg");
	this.shape_19.setTransform(-30.7,17.9);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#262733").s().p("AgZAhIAAhBIAVAAQAPAAAHAIQAIAIAAAQQAAAhgeAAgAgSAbIAOAAQALAAAGgHQAGgHAAgNQAAgMgGgHQgGgHgLAAIgOAAg");
	this.shape_20.setTransform(-41.7,17.9);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#262733").s().p("AgUAhIAAhBIAIAAIAAA6IAhAAIAAAHg");
	this.shape_21.setTransform(-48,17.9);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#262733").s().p("AgRAaQgIgJAAgRQAAgQAIgJQAIgIAPAAQAKAAAJAFIAAAHQgIgFgLAAQgLAAgGAGQgGAHAAANQAAAOAGAHQAGAGALAAQALAAAIgFIAAAHQgJAFgKAAQgPAAgIgIg");
	this.shape_22.setTransform(-54.5,17.9);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#2FB7AA").s().p("AgHAIQgEgDABgFQgBgEAEgDQADgEAEAAQAEAAAEAEQADADAAAEQAAAFgDADQgEAEgEAAQgEAAgDgEg");
	this.shape_23.setTransform(-63.6,17.9);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#262733").s().p("AgKAhIgKgEIAAgIQAEAEAFABQAEACAHAAQAHAAADgDQAEgDABgGQAAgDgDgDIgFgEIgRgHQgFgCgCgDQgCgDAAgHQAAgFACgDQABgDAGgEQAEgCAGAAIAJABIAIADIAAAIIgDgCIgGgDIgIgBQgFAAgEADQgDADAAAEQAAAEACADIAEADIASAHIAHAGQACAEAAAFQAAAJgEAFQgFAFgMAAg");
	this.shape_24.setTransform(52.9,5.9);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#262733").s().p("AAYAhIAAg2IgYAhIgWggIAAA1IgIAAIAAhBIAIAAIAWAhIAXghIAIAAIAABBg");
	this.shape_25.setTransform(45.6,5.9);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#262733").s().p("AAXAhIgIgUIgdAAIgHAUIgIAAIAbhBIAFAAIAbBBgAgKAGIAVAAIgLgeg");
	this.shape_26.setTransform(38,5.9);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#262733").s().p("AARAhIgRgbIgRAAIAAAbIgHAAIAAhBIAaAAQAKAAAFAFQAFAFAAAJQAAAIgEAFQgEAEgHACIASAbgAgRAAIARAAQAHAAAEgDQAEgDAAgGQAAgGgDgEQgEgEgGAAIgTAAg");
	this.shape_27.setTransform(31.3,5.9);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#262733").s().p("AgTAaQgHgJAAgRQAAgQAHgJQAJgIAOAAQALAAAKAEIAAAIIgLgEIgJgBQgMAAgGAGQgGAHAAANQAAAOAGAHQAGAGAMAAQAJAAAGgCIAAgTIgQAAIAAgGIAXAAIAAAdQgKAFgNAAQgOAAgJgIg");
	this.shape_28.setTransform(23.9,5.9);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#262733").s().p("AAXAhIgIgUIgcAAIgIAUIgIAAIAbhBIAGAAIAaBBgAgLAGIAXAAIgMgeg");
	this.shape_29.setTransform(17,5.9);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#262733").s().p("AgCAhIAAhBIAGAAIAABBg");
	this.shape_30.setTransform(12.1,5.9);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#262733").s().p("AgZAhIAAhBIAUAAQAQAAAHAIQAIAIAAAQQAAAhgfAAgAgSAbIANAAQAMAAAFgHQAHgGAAgOQAAgMgHgHQgFgHgMAAIgNAAg");
	this.shape_31.setTransform(7.2,5.9);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#262733").s().p("AgCAhIAAgeIgagjIAJAAIATAdIAUgdIAIAAIgYAjIAAAeg");
	this.shape_32.setTransform(-3.2,5.9);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#262733").s().p("AAXAhIgIgUIgcAAIgIAUIgIAAIAbhBIAGAAIAaBBgAgLAGIAXAAIgMgeg");
	this.shape_33.setTransform(-9.1,5.9);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#262733").s().p("AASAhIgSg2IgQA2IgIAAIgVhBIAHAAIASA4IASg4IAGAAIARA4IASg4IAHAAIgVBBg");
	this.shape_34.setTransform(-17.2,5.9);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#262733").s().p("AASAhIAAgeIgiAAIAAAeIgIAAIAAhBIAIAAIAAAeIAiAAIAAgeIAHAAIAABBg");
	this.shape_35.setTransform(-25.9,5.9);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#262733").s().p("AgDAhIAAg7IgXAAIAAgGIA1AAIAAAGIgXAAIAAA7g");
	this.shape_36.setTransform(-32.7,5.9);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#262733").s().p("AAWAhIgIgUIgbAAIgIAUIgIAAIAahBIAHAAIAaBBgAgLAGIAXAAIgMgeg");
	this.shape_37.setTransform(-38.7,5.9);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#262733").s().p("AgWAhIAAhBIAWAAQAMAAAFAFQAGAGAAAJQAAALgGAEQgFAFgMAAIgPAAIAAAZgAgPABIAPAAQAJAAAEgDQADgEAAgGQAAgFgDgFQgEgDgJAAIgPAAg");
	this.shape_38.setTransform(-44.6,5.9);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#2FB7AA").s().p("AgIAIQgCgDAAgFQAAgDACgEQAFgEADAAQAEAAAEAEQAEAEgBADQABAEgEAEQgEAEgEAAQgDAAgFgEg");
	this.shape_39.setTransform(-53.8,5.9);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#262733").s().p("AgKAhIgKgEIAAgIQAEAEAFABQAFACAGAAQAHAAAEgDQAEgEAAgFIgDgGIgEgEIgSgHQgGgDgBgCQgCgDAAgHQAAgFACgDQACgEAFgDQAEgCAGAAIAJABIAJADIAAAIIgEgCIgGgDIgIgBQgGAAgCADQgEAEAAADQAAAEACADIAEADIASAHIAHAGQACAEAAAFQAAAJgEAFQgGAFgLAAg");
	this.shape_40.setTransform(65.4,-6.1);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#262733").s().p("AATAhIgng3IAAA3IgHAAIAAhBIAIAAIAoA3IAAg3IAGAAIAABBg");
	this.shape_41.setTransform(58.5,-6.1);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#262733").s().p("AgWAaQgHgJAAgRQAAgQAHgJQAIgIAOAAQAPAAAHAIQAIAJAAAQQAAARgIAJQgGAIgQAAQgOAAgIgIgAgQgUQgGAHAAANQAAAOAGAHQAGAHAKAAQAMAAAFgHQAFgGAAgPQAAgOgFgGQgFgGgMAAQgLAAgFAGg");
	this.shape_42.setTransform(50.8,-6.1);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#262733").s().p("AgDAhIAAhBIAGAAIAABBg");
	this.shape_43.setTransform(45.5,-6.1);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#262733").s().p("AgDAhIAAg7IgXAAIAAgGIA1AAIAAAGIgXAAIAAA7g");
	this.shape_44.setTransform(40.8,-6.1);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#262733").s().p("AAXAhIgJgUIgbAAIgJAUIgHAAIAahBIAHAAIAaBBgAgLAGIAXAAIgMgeg");
	this.shape_45.setTransform(34.8,-6.1);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#262733").s().p("AgRAaQgIgJAAgRQAAgQAIgJQAIgIAOAAQALAAAKAFIAAAHQgKgFgKAAQgMAAgFAGQgGAHAAANQAAAOAGAHQAFAGAMAAQALAAAJgFIAAAHQgKAFgLAAQgOAAgIgIg");
	this.shape_46.setTransform(28,-6.1);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#262733").s().p("AgCAhIAAhBIAFAAIAABBg");
	this.shape_47.setTransform(23.2,-6.1);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#262733").s().p("AgUAhIAAhBIAIAAIAAA6IAhAAIAAAHg");
	this.shape_48.setTransform(19.1,-6.1);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#262733").s().p("AgXAhIAAhBIAWAAQAVAAAAASQAAAFgBACIgGAGQAEABAEAEQADAEAAAGQAAAKgGAFQgHAEgLAAgAgQAbIARAAQAHAAAEgDQAFgDAAgHQAAgHgFgCQgEgDgIAAIgQAAgAgQgDIAQAAQAFAAAEgDQAEgBAAgHQAAgGgEgDQgDgCgGAAIgQAAg");
	this.shape_49.setTransform(12.7,-6.1);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#262733").s().p("AgSAbQgHgIAAgNIAAgnIAHAAIAAAnQAAAVASAAQATAAAAgVIAAgnIAHAAIAAAnQAAANgHAIQgHAHgMAAQgLAAgHgHg");
	this.shape_50.setTransform(5.5,-6);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#262733").s().p("AgWAhIAAhBIAWAAQAMAAAFAFQAGAGAAAJQAAALgGAEQgFAFgMAAIgPAAIAAAZgAgPABIAPAAQAJAAAEgDQADgEAAgGQAAgFgDgFQgEgDgJAAIgPAAg");
	this.shape_51.setTransform(-1.4,-6.1);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#262733").s().p("AARAhIgRgbIgRAAIAAAbIgHAAIAAhBIAaAAQAKAAAFAFQAFAFAAAJQAAAIgEAFQgEAEgHACIASAbgAgRAAIARAAQAHAAAEgDQAEgDAAgGQAAgGgDgEQgEgEgGAAIgTAAg");
	this.shape_52.setTransform(-11.5,-6.1);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#262733").s().p("AgUAhIAAhBIApAAIAAAGIgiAAIAAAXIAeAAIAAAGIgeAAIAAAYIAiAAIAAAGg");
	this.shape_53.setTransform(-18.2,-6.1);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#262733").s().p("AgVAaQgIgJAAgRQAAgQAIgJQAIgIANAAQAPAAAIAIQAHAJAAAQQAAARgHAJQgIAIgPAAQgOAAgHgIgAgQgUQgGAHABANQgBAOAGAHQAFAHALAAQAMAAAFgHQAGgGAAgPQAAgNgGgHQgFgGgMAAQgLAAgFAGg");
	this.shape_54.setTransform(-25.2,-6.1);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#262733").s().p("AgKAhIgKgEIAAgIQAEAEAFABQAFACAGAAQAHAAAEgDQADgEABgFIgCgGIgGgEIgRgHQgFgDgCgCQgCgDAAgHQAAgFACgDQACgEAFgDQAFgCAFAAIAJABIAJADIAAAIIgEgCIgHgDIgHgBQgFAAgEADQgDAEAAADIACAHIAEADIASAHQADACAEAEQADAEAAAFQgBAJgFAFQgEAFgMAAg");
	this.shape_55.setTransform(-32.1,-6.1);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#262733").s().p("AgDAhIAAg7IgXAAIAAgGIA1AAIAAAGIgXAAIAAA7g");
	this.shape_56.setTransform(-41.7,-6.1);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#262733").s().p("AAXAhIAAg2IgXAhIgXggIAAA1IgHAAIAAhBIAIAAIAWAhIAXghIAIAAIAABBg");
	this.shape_57.setTransform(-49,-6.1);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#262733").s().p("AgSAaQgIgKAAgQQAAgPAIgKQAHgIAPAAQALAAAKAEIAAAIIgLgEIgJgBQgNAAgFAGQgGAHAAANQAAAOAGAHQAFAGANAAQAJAAAGgCIAAgTIgQAAIAAgGIAXAAIAAAdQgKAFgNAAQgPAAgHgIg");
	this.shape_58.setTransform(-57,-6.1);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#2FB7AA").s().p("AgHAIQgEgEAAgEQAAgDAEgEQAEgEADAAQAEAAAEAEQAEAEAAADQAAAEgEAEQgEAEgEAAQgDAAgEgEg");
	this.shape_59.setTransform(-66.3,-6.1);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#262733").s().p("AgmArIAAhVIAjAAQAVAAAKALQALAKAAAVQAAAWgLALQgKAKgVAAgAgRAbIAMAAQAKAAAGgGQAGgHAAgOQAAgNgGgHQgGgGgKAAIgMAAg");
	this.shape_60.setTransform(45.8,-29.1);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#262733").s().p("AAWArIgHgSIgfAAIgGASIgUAAIAhhVIAWAAIAeBVgAgLAJIAVAAIgKggg");
	this.shape_61.setTransform(35.8,-29.1);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#262733").s().p("AgdArIAAhVIA7AAIAAAQIgmAAIAAATIAhAAIAAAPIghAAIAAATIAmAAIAAAQg");
	this.shape_62.setTransform(26.9,-29.1);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#262733").s().p("AgcArIAAhVIAVAAIAABFIAkAAIAAAQg");
	this.shape_63.setTransform(19,-29.1);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#262733").s().p("AgJArIAAhFIgZAAIAAgQIBFAAIAAAQIgZAAIAABFg");
	this.shape_64.setTransform(6.4,-29.1);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#262733").s().p("AgiAAQAAgsAqAAQAOAAANAGIAAASQgMgIgNAAQgLAAgFAHQgGAHgBAOQABAQAGAGQAFAHAMAAQAGAAAFgCQAIgDAFgDIAAASQgGADgHABQgHACgHAAQgqAAAAgtg");
	this.shape_65.setTransform(-2.2,-29.1);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#262733").s().p("AgdArIAAhVIA7AAIAAAQIgmAAIAAATIAhAAIAAAPIghAAIAAATIAmAAIAAAQg");
	this.shape_66.setTransform(-10.7,-29.1);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#262733").s().p("AgXAnIAAgTIAIAFQADACAEAAQALAAAAgMIAAg6IAVAAIAAA7QAAAPgIAHQgIAGgLAAQgJAAgLgFg");
	this.shape_67.setTransform(-18.6,-29);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#262733").s().p("AgeAiQgLgMAAgWQAAgVALgMQALgLATAAQAUAAALALQALALAAAWQAAAWgLAMQgKALgVAAQgTAAgLgLgAgOgUQgFAFAAAPQAAAQAFAFQAFAHAJAAQALAAAFgHQAFgGAAgPQAAgPgFgFQgFgHgLAAQgJAAgFAHg");
	this.shape_68.setTransform(-26.9,-29.1);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#262733").s().p("AAMArIgQgeIgNAAIAAAeIgVAAIAAhVIApAAQAQAAAHAHQAJAHAAANQAAAJgGAGQgEAHgIACIAWAigAgRgBIARAAQALAAAAgNQABgFgDgEQgDgDgGAAIgRAAg");
	this.shape_69.setTransform(-36.3,-29.1);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#262733").s().p("AgjArIAAhVIAmAAQAQAAAIAHQAJAGAAAPQAAAOgJAHQgJAIgPAAIgRAAIAAAcgAgOAAIAPAAQAGAAADgEQADgDAAgGQAAgNgMAAIgPAAg");
	this.shape_70.setTransform(-46,-29.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer 3 copy
	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f().s("#3F3B4F").ss(3).p("AtRtRIAAajIajAAIAA6jg");

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#FFFFFF").s().p("AtRNSIAA6jIajAAIAAajg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_72},{t:this.shape_71}]}).wait(1));

	// Layer 3
	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#FFFFFF").s().p("AtRNSIAA6jIajAAIAAajg");
	this.shape_73.setTransform(0,0,1.412,1.412);

	this.timeline.addTween(cjs.Tween.get(this.shape_73).wait(1));

}).prototype = getMCSymbolPrototype(lib.SD12, new cjs.Rectangle(-120,-120,240,240), null);


(lib.SD11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// FAMILIARISATION
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#262733").s().p("AAVArIgrg/IAAA/IgQAAIAAhVIASAAIArA/IAAg/IAQAAIAABVg");
	this.shape.setTransform(55.1,-11);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#262733").s().p("AgKArQgGgBgFgDQgGgDgDgFQgEgEgDgIQgCgJAAgKQAAgKACgIQADgIAEgFQADgEAGgDQAFgDAGgBIAKgBIALABQAGABAFADQAFADAFAEQAEAFACAIQADAIAAAKQAAAKgDAJQgCAIgEAEQgFAFgFADQgFADgGABIgLABIgKgBgAgHgdIgHACQgDACgCADIgEAJQgBAGAAAHQAAAKACAGQACAGADADQAEADAEABIAJABIAIAAIAGgCQADgCADgEIAEgJQABgFAAgIQAAgJgCgGQgCgHgEgDQgEgDgEgBIgJgBg");
	this.shape_1.setTransform(44.6,-11);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#262733").s().p("AgHArIAAhVIAPAAIAABVg");
	this.shape_2.setTransform(37.3,-11);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#262733").s().p("AgGArIAAhGIgcAAIAAgPIBFAAIAAAPIgbAAIAABGg");
	this.shape_3.setTransform(31.1,-11);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#262733").s().p("AAaArIgIgVIgjAAIgIAVIgRAAIAihVIARAAIAiBVgAANAIIgNghIgMAhIAZAAg");
	this.shape_4.setTransform(22.2,-11);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#262733").s().p("AgcAlIAAgQQALAJAOAAQARAAAAgKQAAgFgDgDQgDgDgFgBIgKgEIgKgEQgFgBgEgFQgDgFAAgHQAAgNAJgGQAJgGAMAAQAMAAALAGIAAAPQgKgHgLAAQgGAAgFADQgFACAAAGQAAAEAEACQAFADAFABIANAFQAHACAEAFQAFAHAAAKQAAAKgJAHQgJAGgMAAQgQAAgMgHg");
	this.shape_5.setTransform(13.3,-11);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#262733").s().p("AgHArIAAhVIAPAAIAABVg");
	this.shape_6.setTransform(7.1,-11);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#262733").s().p("AAPArIgTgeIgOAAIAAAeIgQAAIAAhVIAhAAQAPAAAJAHQAHAHABANQAAATgTAGIAWAhgAgSgBIARAAQAHAAAEgCQAFgDAAgIQAAgIgFgDQgEgDgHAAIgRAAg");
	this.shape_7.setTransform(0.7,-11);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#262733").s().p("AAaArIgIgVIgjAAIgIAVIgRAAIAihVIARAAIAiBVgAANAIIgNghIgMAhIAZAAg");
	this.shape_8.setTransform(-9,-11);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#262733").s().p("AgHArIAAhVIAPAAIAABVg");
	this.shape_9.setTransform(-16.1,-11);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#262733").s().p("AgcArIAAhVIAQAAIAABHIApAAIAAAOg");
	this.shape_10.setTransform(-21.7,-11);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#262733").s().p("AgHArIAAhVIAPAAIAABVg");
	this.shape_11.setTransform(-28.2,-11);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#262733").s().p("AAbArIAAg/IgbAlIgaglIAAA/IgPAAIAAhVIARAAIAYAkIAZgkIARAAIAABVg");
	this.shape_12.setTransform(-36.1,-11);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#262733").s().p("AAaArIgIgVIgjAAIgIAVIgRAAIAihVIARAAIAiBVgAANAIIgNghIgMAhIAZAAg");
	this.shape_13.setTransform(-46.6,-11);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#262733").s().p("AgbArIAAhVIA3AAIAAAOIgoAAIAAAWIAjAAIAAANIgjAAIAAAkg");
	this.shape_14.setTransform(-55,-11);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer 3 copy
	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#3F3B4F").ss(3).p("AtRtRIAAajIajAAIAA6jg");

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AtRNSIAA6jIajAAIAAajg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_16},{t:this.shape_15}]}).wait(1));

	// Layer 3
	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AtRNSIAA6jIajAAIAAajg");
	this.shape_17.setTransform(0,0,1.412,1.412);

	this.timeline.addTween(cjs.Tween.get(this.shape_17).wait(1));

}).prototype = getMCSymbolPrototype(lib.SD11, new cjs.Rectangle(-119.9,-120,240,240), null);


(lib.hoverSpace = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFF33").s().p("AguKcIn4kmQgVgMgNgWQgNgWAAgZIAApJQAAgZANgVQANgXAVgMIH4klQAWgNAZAAQAYAAAWANIH4ElQAWAMAMAXQANAVAAAZIAAJJQAAAZgNAWQgMAWgWAMIn4EmQgVAMgZAAQgaAAgVgMg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.hoverSpace, new cjs.Rectangle(-59.7,-68,119.5,136), null);


(lib.Step4Diagram = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_18 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(18).call(this.frame_18).wait(1));

	// SD-4-1
	this.instance = new lib.SD41();
	this.instance.parent = this;
	this.instance.setTransform(-258.3,55,0.01,0.01,0,0,0,-5,0);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:0,regY:-0.7,scaleX:1.2,scaleY:1.2,alpha:1},9).to({regY:-0.8,scaleX:1,scaleY:1},5).wait(5));

	// SD-4-2
	this.instance_1 = new lib.SD42();
	this.instance_1.parent = this;
	this.instance_1.setTransform(41.6,46.2,0.01,0.01);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(4).to({_off:false},0).to({scaleX:1.2,scaleY:1.2,y:46.1,alpha:1},9).to({scaleX:1,scaleY:1,y:46.2},5).wait(1));

	// Maska copy 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_13 = new cjs.Graphics().p("AiOIhIAAxBIEdAAIAARBg");
	var mask_graphics_14 = new cjs.Graphics().p("AlUIhIAAxBIKpAAIAARBg");
	var mask_graphics_15 = new cjs.Graphics().p("AobIhIAAxBIQ3AAIAARBg");
	var mask_graphics_16 = new cjs.Graphics().p("ArhIhIAAxBIXDAAIAARBg");
	var mask_graphics_17 = new cjs.Graphics().p("AunIhIAAxBIdPAAIAARBg");
	var mask_graphics_18 = new cjs.Graphics().p("AxuIhIAAxBMAjdAAAIAARBg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(13).to({graphics:mask_graphics_13,x:-261.1,y:51.6}).wait(1).to({graphics:mask_graphics_14,x:-241.3,y:51.6}).wait(1).to({graphics:mask_graphics_15,x:-221.4,y:51.6}).wait(1).to({graphics:mask_graphics_16,x:-201.6,y:51.6}).wait(1).to({graphics:mask_graphics_17,x:-181.8,y:51.6}).wait(1).to({graphics:mask_graphics_18,x:-161.9,y:51.6}).wait(1));

	// Linia copy 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#2FB7AA").s().p("A80PjIAAgyIK8AAIAAAygEgvNgAnIAAh9IgBAAIAAgyMBdrAAAIAAsMIAyAAIAAM+MhdqAAAIAAB9g");
	this.shape.setTransform(41.1,-50.8);
	this.shape._off = true;

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(13).to({_off:false},0).wait(6));

	// Maska copy (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_4 = new cjs.Graphics().p("AiOIhIAAxBIEdAAIAARBg");
	var mask_1_graphics_5 = new cjs.Graphics().p("AnVIkIAAxHIOrAAIAARHg");
	var mask_1_graphics_6 = new cjs.Graphics().p("AsdInIAAxNIY7AAIAARNg");
	var mask_1_graphics_7 = new cjs.Graphics().p("AxlIqIAAxTMAjLAAAIAARTg");
	var mask_1_graphics_8 = new cjs.Graphics().p("A2sItIAAxZMAtaAAAIAARZg");
	var mask_1_graphics_9 = new cjs.Graphics().p("A70IwIAAxfMA3pAAAIAARfg");
	var mask_1_graphics_10 = new cjs.Graphics().p("Egg8AIzIAAxlMBB5AAAIAARlg");
	var mask_1_graphics_11 = new cjs.Graphics().p("EgmEAI3IAAxsMBMJAAAIAARsg");
	var mask_1_graphics_12 = new cjs.Graphics().p("EgrMAI5IAAxxMBWYAAAIAARxg");
	var mask_1_graphics_13 = new cjs.Graphics().p("EgwTAI8IAAx3MBgnAAAIAAR3g");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(4).to({graphics:mask_1_graphics_4,x:339.8,y:-112.9}).wait(1).to({graphics:mask_1_graphics_5,x:307,y:-112.6}).wait(1).to({graphics:mask_1_graphics_6,x:274.3,y:-112.3}).wait(1).to({graphics:mask_1_graphics_7,x:241.5,y:-112}).wait(1).to({graphics:mask_1_graphics_8,x:208.7,y:-111.7}).wait(1).to({graphics:mask_1_graphics_9,x:176,y:-111.4}).wait(1).to({graphics:mask_1_graphics_10,x:143.2,y:-111.1}).wait(1).to({graphics:mask_1_graphics_11,x:110.4,y:-110.8}).wait(1).to({graphics:mask_1_graphics_12,x:77.7,y:-110.5}).wait(1).to({graphics:mask_1_graphics_13,x:44.9,y:-110.2}).wait(6));

	// Linia copy
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#2FB7AA").s().p("A80PjIAAgyIK8AAIAAAygEgvNgAnIAAh9IgBAAIAAgyMBdrAAAIAAsMIAyAAIAAM+MhdqAAAIAAB9g");
	this.shape_1.setTransform(41.1,-50.8);
	this.shape_1._off = true;

	var maskedShapeInstanceList = [this.shape_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(4).to({_off:false},0).wait(15));

	// Maska (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	var mask_2_graphics_0 = new cjs.Graphics().p("AiOBLIAAiVIEdAAIAACVg");
	var mask_2_graphics_1 = new cjs.Graphics().p("AiODBIAAmBIEdAAIAAGBg");
	var mask_2_graphics_2 = new cjs.Graphics().p("AiOE2IAAprIEdAAIAAJrg");
	var mask_2_graphics_3 = new cjs.Graphics().p("AiOGrIAAtWIEdAAIAANWg");
	var mask_2_graphics_4 = new cjs.Graphics().p("AiOIhIAAxBIEdAAIAARBg");

	this.timeline.addTween(cjs.Tween.get(mask_2).to({graphics:mask_2_graphics_0,x:339.8,y:-159.9}).wait(1).to({graphics:mask_2_graphics_1,x:339.8,y:-148.1}).wait(1).to({graphics:mask_2_graphics_2,x:339.8,y:-136.4}).wait(1).to({graphics:mask_2_graphics_3,x:339.8,y:-124.7}).wait(1).to({graphics:mask_2_graphics_4,x:339.8,y:-112.9}).wait(15));

	// Linia
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#2FB7AA").s().p("A80PjIAAgyIK8AAIAAAygEgvNgAnIAAh9IgBAAIAAgyMBdrAAAIAAsMIAyAAIAAM+MhdqAAAIAAB9g");
	this.shape_2.setTransform(41.1,-50.8);

	var maskedShapeInstanceList = [this.shape_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(19));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-259.3,53.9,2.1,2.1);


(lib.STEP4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_5 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(5).call(this.frame_5).wait(6));

	// Layer 8
	this.hoverSpace = new lib.hoverSpace();
	this.hoverSpace.parent = this;
	this.hoverSpace.setTransform(0.5,-51.5);
	this.hoverSpace.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.hoverSpace).wait(11));

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#2FB7AA").s().p("AhVBXQgkgkAAgzQAAgxAkglQAjgjAygBQAzABAkAjQAkAlAAAxQAAAzgkAkQgkAkgzgBQgyABgjgkg");
	this.shape.setTransform(0,55.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(11));

	// REPORTING
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#262733").s().p("AAFAsIgLgBQgGgBgFgDQgGgDgEgEQgDgFgDgIQgCgJgBgKQABgKACgIQADgIADgFQAEgEAFgDQAGgDAFgBIALgBQAOAAAQAFIAAAPQgPgGgNAAIgHAAIgIADQgDACgDADQgCADgBAGQgCAFAAAHQAAAIACAFQABAGACADQADADADACIAIADIAHAAQAGAAAJgCIAAgVIgUAAIAAgMIAjAAIAAAqQgPAHgQAAg");
	this.shape_1.setTransform(33.9,89.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#262733").s().p("AAVArIgrg/IAAA/IgQAAIAAhVIASAAIArA/IAAg/IAQAAIAABVg");
	this.shape_2.setTransform(23.8,89.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#262733").s().p("AgHArIAAhVIAPAAIAABVg");
	this.shape_3.setTransform(16.3,89.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#262733").s().p("AgGArIAAhGIgcAAIAAgPIBGAAIAAAPIgcAAIAABGg");
	this.shape_4.setTransform(10.1,89.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#262733").s().p("AAQArIgUgeIgOAAIAAAeIgQAAIAAhVIAhAAQAPAAAJAHQAHAHABANQAAATgUAGIAYAhgAgSgBIARAAQAHAAAEgCQAFgDAAgIQAAgIgFgDQgEgDgHAAIgRAAg");
	this.shape_5.setTransform(2,89.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#262733").s().p("AgKArQgGgBgGgDQgFgDgEgFQgEgEgCgIQgDgJAAgKQAAgKADgIQACgIAEgFQAEgEAFgDQAGgDAGgBIAKgBIALABQAFABAGADQAFADAEAEQAEAFADAIQACAIAAAKQAAAKgCAJQgDAIgEAEQgEAFgFADQgGADgFABIgLABIgKgBgAgHgdIgHACQgDACgCADIgEAJQgBAGAAAHQAAAKACAGQACAGADADQAFADAEABIAIABIAIAAIAGgCQADgCADgEIAEgJQABgFAAgIQAAgJgCgGQgCgHgEgDQgEgDgEgBIgJgBg");
	this.shape_6.setTransform(-8.1,89.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#262733").s().p("AggArIAAhVIAgAAQAPAAAJAHQAJAIgBAOQABANgJAHQgJAIgPAAIgPAAIAAAcgAgPABIAPAAQAJAAAEgDQAEgEAAgHQAAgIgEgDQgEgEgJAAIgPAAg");
	this.shape_7.setTransform(-17.3,89.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#262733").s().p("AgcArIAAhVIA5AAIAAAOIgpAAIAAAWIAjAAIAAANIgjAAIAAAWIApAAIAAAOg");
	this.shape_8.setTransform(-25.9,89.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#262733").s().p("AAQArIgUgeIgOAAIAAAeIgQAAIAAhVIAiAAQAOAAAIAHQAJAHgBANQABATgUAGIAYAhgAgSgBIARAAQAHAAAEgCQAFgDAAgIQAAgIgFgDQgEgDgHAAIgRAAg");
	this.shape_9.setTransform(-34.3,89.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]}).wait(11));

	// 3 MONTHS
	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#333436").s().p("AgUAdIAAgHQAIAFALAAQAQAAAAgLQAAgEgDgDQgDgDgEgCIgIgDIgJgCQgDgBgDgEQgDgEAAgFQAAgHAGgGQAFgFALAAQAJAAAIAEIAAAHQgIgEgIAAQgHAAgFADQgDADAAAFQgBAEADACQADACAEABIAIADIAJADQADACAEAEQACAEAAAGQAAAJgGAEQgHAFgKAAQgKAAgJgFg");
	this.shape_10.setTransform(22.4,-41.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#333436").s().p("AASAhIAAgeIgjAAIAAAeIgHAAIAAhBIAHAAIAAAdIAjAAIAAgdIAHAAIAABBg");
	this.shape_11.setTransform(16.3,-41.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#333436").s().p("AgDAhIAAg6IgXAAIAAgHIA1AAIAAAHIgYAAIAAA6g");
	this.shape_12.setTransform(10.1,-41.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#333436").s().p("AAUAhIgng3IAAA3IgIAAIAAhBIAJAAIAmA3IAAg3IAIAAIAABBg");
	this.shape_13.setTransform(3.6,-41.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#333436").s().p("AgeAAQAAghAeAAQAfAAAAAhQAAAigfAAQgeAAAAgigAgRgUQgFAHgBANQABAOAFAHQAGAGALAAQANAAAFgGQAGgHAAgOQAAgNgGgHQgFgHgNAAQgLAAgGAHg");
	this.shape_14.setTransform(-3.7,-41.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#333436").s().p("AAYAhIAAg2IgYAhIgWghIAAA2IgIAAIAAhBIAIAAIAWAgIAXggIAIAAIAABBg");
	this.shape_15.setTransform(-11.4,-41.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#333436").s().p("AgUAeIAAgIQAIAFAJAAQAIAAAEgDQAFgEAAgGQAAgGgFgDQgFgEgIAAIgHAAIAAgGIAIAAQAGAAAEgCQAEgDAAgFQAAgGgEgCQgEgDgHAAQgIAAgGADIAAgHQAHgDAHAAIABAAQAKAAAFAFQAGAFAAAIQAAAIgHAEIgCABIACABIACABIAEADIADAFIABAGQAAAEgBADQgBAEgDADQgDADgFABQgFACgFAAQgKAAgIgEg");
	this.shape_16.setTransform(-21.6,-41.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgUAdIAAgHQAIAFALAAQAQAAAAgLQAAgEgDgDQgDgDgEgCIgIgDIgJgCQgDgBgDgEQgDgEAAgFQAAgHAGgGQAFgFALAAQAJAAAIAEIAAAHQgIgEgIAAQgHAAgFADQgDADAAAFQgBAEADACQADACAEABIAIADIAJADQADACAEAEQACAEAAAGQAAAJgGAEQgHAFgKAAQgKAAgJgFg");
	this.shape_17.setTransform(22.4,-41.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AASAhIAAgeIgjAAIAAAeIgHAAIAAhBIAHAAIAAAdIAjAAIAAgdIAHAAIAABBg");
	this.shape_18.setTransform(16.3,-41.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgDAhIAAg6IgXAAIAAgHIA1AAIAAAHIgYAAIAAA6g");
	this.shape_19.setTransform(10.1,-41.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AAUAhIgng3IAAA3IgIAAIAAhBIAJAAIAmA3IAAg3IAIAAIAABBg");
	this.shape_20.setTransform(3.6,-41.4);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgeAAQAAghAeAAQAfAAAAAhQAAAigfAAQgeAAAAgigAgRgUQgFAHgBANQABAOAFAHQAGAGALAAQANAAAFgGQAGgHAAgOQAAgNgGgHQgFgHgNAAQgLAAgGAHg");
	this.shape_21.setTransform(-3.7,-41.4);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AAYAhIAAg2IgYAhIgWghIAAA2IgIAAIAAhBIAIAAIAWAgIAXggIAIAAIAABBg");
	this.shape_22.setTransform(-11.4,-41.4);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgUAeIAAgIQAIAFAJAAQAIAAAEgDQAFgEAAgGQAAgGgFgDQgFgEgIAAIgHAAIAAgGIAIAAQAGAAAEgCQAEgDAAgFQAAgGgEgCQgEgDgHAAQgIAAgGADIAAgHQAHgDAHAAIABAAQAKAAAFAFQAGAFAAAIQAAAIgHAEIgCABIACABIACABIAEADIADAFIABAGQAAAEgBADQgBAEgDADQgDADgFABQgFACgFAAQgKAAgIgEg");
	this.shape_23.setTransform(-21.6,-41.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10}]}).to({state:[{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17}]},5).to({state:[{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10}]},5).wait(1));

	// STEP 4
	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#262733").s().p("AAGArIAAgYIgmAAIAAgNIAngwIAPAAIAAAvIALAAIAAAOIgLAAIAAAYgAgOAFIAUAAIAAgag");
	this.shape_24.setTransform(19.6,-56);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#262733").s().p("AgfArIAAhVIAfAAQAQAAAIAHQAJAIAAAOQAAANgJAHQgIAIgQAAIgQAAIAAAcgAgQABIAQAAQAJAAAEgDQADgEAAgHQAAgIgDgDQgEgEgJAAIgQAAg");
	this.shape_25.setTransform(6.6,-56);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#262733").s().p("AgcArIAAhVIA5AAIAAAOIgpAAIAAAWIAjAAIAAANIgjAAIAAAWIApAAIAAAOg");
	this.shape_26.setTransform(-2,-56);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#262733").s().p("AgHArIAAhGIgcAAIAAgPIBGAAIAAAPIgbAAIAABGg");
	this.shape_27.setTransform(-10.3,-56);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#262733").s().p("AgcAlIAAgQQALAJAOAAQARAAAAgKQAAgFgDgDQgDgDgFgBIgKgEIgKgEQgFgBgEgFQgDgFAAgHQAAgNAJgGQAJgGAMAAQAMAAALAGIAAAPQgKgHgLAAQgGAAgFADQgFACAAAGQAAAEAEACQAFADAFABIANAFQAHACAEAFQAFAHAAAKQAAAKgJAHQgJAGgMAAQgQAAgMgHg");
	this.shape_28.setTransform(-18.3,-56);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AAGArIAAgYIgmAAIAAgNIAngwIAPAAIAAAvIALAAIAAAOIgLAAIAAAYgAgOAFIAUAAIAAgag");
	this.shape_29.setTransform(19.6,-56);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgfArIAAhVIAfAAQAQAAAIAHQAJAIAAAOQAAANgJAHQgIAIgQAAIgQAAIAAAcgAgQABIAQAAQAJAAAEgDQADgEAAgHQAAgIgDgDQgEgEgJAAIgQAAg");
	this.shape_30.setTransform(6.6,-56);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgcArIAAhVIA5AAIAAAOIgpAAIAAAWIAjAAIAAANIgjAAIAAAWIApAAIAAAOg");
	this.shape_31.setTransform(-2,-56);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AgHArIAAhGIgcAAIAAgPIBGAAIAAAPIgbAAIAABGg");
	this.shape_32.setTransform(-10.3,-56);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AgcAlIAAgQQALAJAOAAQARAAAAgKQAAgFgDgDQgDgDgFgBIgKgEIgKgEQgFgBgEgFQgDgFAAgHQAAgNAJgGQAJgGAMAAQAMAAALAGIAAAPQgKgHgLAAQgGAAgFADQgFACAAAGQAAAEAEACQAFADAFABIANAFQAHACAEAFQAFAHAAAKQAAAKgJAHQgJAGgMAAQgQAAgMgHg");
	this.shape_33.setTransform(-18.3,-56);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24}]}).to({state:[{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29}]},5).to({state:[{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24}]},5).wait(1));

	// steps-shape
	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#3F3B4F").ss(5).p("AInl1In4klQgVgNgZAAQgZAAgVANIn4ElQgWAMgNAWQgNAWAAAZIAAJJQAAAZANAWQANAWAWAMIH4EmQAUAMAaAAQAaAAAUgMIH4kmQAWgMAMgWQANgWAAgZIAApJQAAgZgNgWQgMgWgWgMg");
	this.shape_34.setTransform(0.5,-51.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_34).wait(11));

	// Layer 7
	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AguKcIn4kmQgVgMgNgWQgNgWAAgZIAApJQAAgZANgVQANgXAVgMIH4klQAWgNAZAAQAYAAAWANIH4ElQAWAMAMAXQANAVAAAZIAAJJQAAAZgNAWQgMAWgWAMIn4EmQgVAMgZAAQgaAAgVgMg");
	this.shape_35.setTransform(0.5,-51.5);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#D9D8DC").s().p("AguKbIn4kkQgVgNgNgWQgNgWAAgZIAApIQAAgaANgVQANgXAVgMIH4klQAWgNAZAAQAYAAAWANIH4ElQAWAMAMAXQANAVAAAaIAAJIQAAAZgNAWQgMAWgWANIn4EkQgVANgZAAQgaAAgVgNg");
	this.shape_36.setTransform(0.5,-51.5);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#B2B1B9").s().p("AguKbIn4kkQgVgNgNgWQgNgWAAgZIAApIQAAgaANgVQANgXAVgMIH4klQAWgNAZAAQAYAAAWANIH4ElQAWAMAMAXQANAVAAAaIAAJIQAAAZgNAWQgMAWgWANIn4EkQgVANgZAAQgaAAgVgNg");
	this.shape_37.setTransform(0.5,-51.5);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#8C8995").s().p("AguKbIn4kkQgVgNgNgWQgNgWAAgZIAApIQAAgaANgVQANgXAVgMIH4klQAWgNAZAAQAYAAAWANIH4ElQAWAMAMAXQANAVAAAaIAAJIQAAAZgNAWQgMAWgWANIn4EkQgVANgZAAQgaAAgVgNg");
	this.shape_38.setTransform(0.5,-51.5);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#656272").s().p("AguKbIn4kkQgVgNgNgWQgNgWAAgZIAApIQAAgaANgVQANgXAVgMIH4klQAWgNAZAAQAYAAAWANIH4ElQAWAMAMAXQANAVAAAaIAAJIQAAAZgNAWQgMAWgWANIn4EkQgVANgZAAQgaAAgVgNg");
	this.shape_39.setTransform(0.5,-51.5);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#3F3B4F").s().p("AguKcIn4kmQgVgMgNgWQgNgWAAgZIAApJQAAgZANgVQANgXAVgMIH4klQAWgNAZAAQAYAAAWANIH4ElQAWAMAMAXQANAVAAAZIAAJJQAAAZgNAWQgMAWgWAMIn4EmQgVAMgZAAQgaAAgVgMg");
	this.shape_40.setTransform(0.5,-51.5);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AguKbIn4kkQgVgNgNgWQgMgWAAgZIAApIQAAgZAMgXQANgVAVgNIH4klQAWgNAYAAQAZAAAWANIH4ElQAWANAMAVQANAWAAAaIAAJIQAAAagNAVQgMAWgWANIn4EkQgVANgaAAQgZAAgVgNg");
	this.shape_41.setTransform(0.5,-51.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_35}]}).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_41}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-87.2,-122,174.5,220.4);


(lib.Step3Diagram = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_54 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(54).call(this.frame_54).wait(1));

	// SD-3-1
	this.instance = new lib.SD31();
	this.instance.parent = this;
	this.instance.setTransform(-287,-209.8,0.01,0.01,0,0,0,0,-5);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regY:0,scaleX:1.2,scaleY:1.2,x:-286.9,alpha:1},10).to({scaleX:1,scaleY:1,x:-287},5).wait(40));

	// SD-3-2-2
	this.instance_1 = new lib.SD322();
	this.instance_1.parent = this;
	this.instance_1.setTransform(163.1,-124.8,0.01,0.013,0,0,0,5,-3.9);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(10).to({_off:false},0).to({regX:0,regY:0,scaleX:1.2,scaleY:1.2,alpha:1},10).to({scaleX:1,scaleY:1},5).wait(30));

	// SD-3-2
	this.instance_2 = new lib.SD32();
	this.instance_2.parent = this;
	this.instance_2.setTransform(13,-201,0.01,0.01,0,0,0,5,0);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(4).to({_off:false},0).to({regX:0.1,regY:-0.8,scaleX:1.2,scaleY:1.2,alpha:1},10).to({regX:0,scaleX:1,scaleY:1},5).wait(36));

	// SD-3-3
	this.instance_3 = new lib.SD33();
	this.instance_3.parent = this;
	this.instance_3.setTransform(312.4,-201,0.01,0.01);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(14).to({_off:false},0).to({regY:-0.8,scaleX:1.2,scaleY:1.2,alpha:1},10).to({scaleX:1,scaleY:1},5).wait(26));

	// SD-3-4
	this.instance_4 = new lib.SD34();
	this.instance_4.parent = this;
	this.instance_4.setTransform(313.3,19.4,0.01,0.01,0,0,0,5,0);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(19).to({_off:false},0).to({regX:0.1,regY:-0.7,scaleX:1.2,scaleY:1.2,alpha:1},10).to({regX:0,regY:-0.8,scaleX:1,scaleY:1},5).wait(21));

	// SD-3-5
	this.instance_5 = new lib.SD35();
	this.instance_5.parent = this;
	this.instance_5.setTransform(13,19.4,0.01,0.01,0,0,0,5,0);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(24).to({_off:false},0).to({regX:0.1,regY:-0.7,scaleX:1.2,scaleY:1.2,x:13.1,alpha:1},10).to({regX:0,regY:-0.8,scaleX:1,scaleY:1,x:13},5).wait(16));

	// SD-3-6
	this.instance_6 = new lib.SD36();
	this.instance_6.parent = this;
	this.instance_6.setTransform(-287,19.4,0.01,0.01);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(29).to({_off:false},0).to({regX:-0.1,regY:-0.7,scaleX:1.2,scaleY:1.2,alpha:1},10).to({regX:0,regY:-0.8,scaleX:1,scaleY:1},5).wait(11));

	// SD-3-7
	this.instance_7 = new lib.SD37();
	this.instance_7.parent = this;
	this.instance_7.setTransform(-469.5,121.1,0.01,0.01,0,0,0,-5,0);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(34).to({_off:false},0).to({regX:-0.1,regY:0.1,scaleX:2,scaleY:2,y:121.2,alpha:1},10).to({regX:0,regY:0,scaleX:1,scaleY:1,y:121.1},5).wait(6));

	// SD-3-8
	this.instance_8 = new lib.SD38();
	this.instance_8.parent = this;
	this.instance_8.setTransform(-287,240.5,1,1,0,0,0,0,-0.8);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(39).to({_off:false},0).wait(16));

	// Maska copy 4 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_44 = new cjs.Graphics().p("AqDBkIAAjHIUHAAIAADHg");
	var mask_graphics_45 = new cjs.Graphics().p("AqDDhIAAnBIUHAAIAAHBg");
	var mask_graphics_46 = new cjs.Graphics().p("AqDFeIAAq7IUHAAIAAK7g");
	var mask_graphics_47 = new cjs.Graphics().p("AqDHbIAAu1IUHAAIAAO1g");
	var mask_graphics_48 = new cjs.Graphics().p("AqDJYIAAyvIUHAAIAASvg");
	var mask_graphics_49 = new cjs.Graphics().p("AqDLVIAA2pIUHAAIAAWpg");
	var mask_graphics_50 = new cjs.Graphics().p("AqDNSIAA6jIUHAAIAAajg");
	var mask_graphics_51 = new cjs.Graphics().p("AqDPPIAA+dIUHAAIAAedg");
	var mask_graphics_52 = new cjs.Graphics().p("AqDRLMAAAgiWIUHAAMAAAAiWg");
	var mask_graphics_53 = new cjs.Graphics().p("AqDTIMAAAgmQIUHAAMAAAAmQg");
	var mask_graphics_54 = new cjs.Graphics().p("AqDVFMAAAgqKIUHAAMAAAAqKg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(44).to({graphics:mask_graphics_44,x:-422.9,y:-20.1}).wait(1).to({graphics:mask_graphics_45,x:-422.9,y:-7.6}).wait(1).to({graphics:mask_graphics_46,x:-422.9,y:4.9}).wait(1).to({graphics:mask_graphics_47,x:-422.9,y:17.4}).wait(1).to({graphics:mask_graphics_48,x:-422.9,y:29.9}).wait(1).to({graphics:mask_graphics_49,x:-422.9,y:42.4}).wait(1).to({graphics:mask_graphics_50,x:-422.9,y:54.9}).wait(1).to({graphics:mask_graphics_51,x:-422.9,y:67.4}).wait(1).to({graphics:mask_graphics_52,x:-422.9,y:79.9}).wait(1).to({graphics:mask_graphics_53,x:-422.9,y:92.4}).wait(1).to({graphics:mask_graphics_54,x:-422.9,y:104.9}).wait(1));

	// Linia copy 4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#2FB7AA").s().p("AgYA/IAAh8IAxAAIAAB8g");
	this.shape.setTransform(113.6,-329.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#2FB7AA").s().p("AgYBXIAAiuIAxAAIAACug");
	this.shape_1.setTransform(-287.2,-319.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#2FB7AA").s().p("A/tAZIAAgxMA/aAAAIAAAxg");
	this.shape_2.setTransform(-86.8,-325.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#2FB7AA").s().p("AgYRCMAAAgiDIAxAAMAAAAiDg");
	this.shape_3.setTransform(-469.5,121.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#2FB7AA").s().p("AldAZIAAgxIK7AAIAAAxg");
	this.shape_4.setTransform(-437,10.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#2FB7AA").s().p("AldAZIAAgxIK7AAIAAAxg");
	this.shape_5.setTransform(-437,231.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#2FB7AA").s().p("AgYRCMAAAgiDIAxAAMAAAAiDg");
	this.shape_6.setTransform(495.5,-98.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#2FB7AA").s().p("AldAZIAAgxIK7AAIAAAxg");
	this.shape_7.setTransform(463,10.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#2FB7AA").s().p("AldAZIAAgxIK7AAIAAAxg");
	this.shape_8.setTransform(463,-209.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#2FB7AA").s().p("AldAZIAAgxIK7AAIAAAxg");
	this.shape_9.setTransform(-137,10.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#2FB7AA").s().p("AldAZIAAgxIK7AAIAAAxg");
	this.shape_10.setTransform(162.7,10.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#2FB7AA").s().p("AldAZIAAgxIK7AAIAAAxg");
	this.shape_11.setTransform(162.7,-209.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#2FB7AA").s().p("AldAZIAAgxIK7AAIAAAxg");
	this.shape_12.setTransform(-137,-209.8);

	var maskedShapeInstanceList = [this.shape,this.shape_1,this.shape_2,this.shape_3,this.shape_4,this.shape_5,this.shape_6,this.shape_7,this.shape_8,this.shape_9,this.shape_10,this.shape_11,this.shape_12];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},44).wait(11));

	// Maska copy 3 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_34 = new cjs.Graphics().p("AjqVGMAAAgqKIHUAAMAAAAqKg");
	var mask_1_graphics_35 = new cjs.Graphics().p("ArJVGMAAAgqKIWTAAMAAAAqKg");
	var mask_1_graphics_36 = new cjs.Graphics().p("AyoVGMAAAgqKMAlRAAAMAAAAqKg");
	var mask_1_graphics_37 = new cjs.Graphics().p("A6IVGMAAAgqKMA0RAAAMAAAAqKg");
	var mask_1_graphics_38 = new cjs.Graphics().p("EghnAVGMAAAgqKMBDPAAAMAAAAqKg");
	var mask_1_graphics_39 = new cjs.Graphics().p("EgpHAVGMAAAgqKMBSPAAAMAAAAqKg");
	var mask_1_graphics_40 = new cjs.Graphics().p("EgwmAVGMAAAgqKMBhNAAAMAAAAqKg");
	var mask_1_graphics_41 = new cjs.Graphics().p("Eg4GAVGMAAAgqKMBwNAAAMAAAAqKg");
	var mask_1_graphics_42 = new cjs.Graphics().p("Eg/lAVGMAAAgqKMB/LAAAMAAAAqKg");
	var mask_1_graphics_43 = new cjs.Graphics().p("EhHEAVGMAAAgqKMCOKAAAMAAAAqKg");
	var mask_1_graphics_44 = new cjs.Graphics().p("EhOkAVGMAAAgqKMCdJAAAMAAAAqKg");
	var mask_1_graphics_45 = new cjs.Graphics().p("EhOkAVGMAAAgqKMCdJAAAMAAAAqKg");
	var mask_1_graphics_46 = new cjs.Graphics().p("EhOkAVGMAAAgqKMCdJAAAMAAAAqKg");
	var mask_1_graphics_47 = new cjs.Graphics().p("EhOkAVGMAAAgqKMCdJAAAMAAAAqKg");
	var mask_1_graphics_48 = new cjs.Graphics().p("EhOkAVGMAAAgqKMCdJAAAMAAAAqKg");
	var mask_1_graphics_49 = new cjs.Graphics().p("EhOkAVGMAAAgqKMCdJAAAMAAAAqKg");
	var mask_1_graphics_50 = new cjs.Graphics().p("EhOkAVGMAAAgqKMCdJAAAMAAAAqKg");
	var mask_1_graphics_51 = new cjs.Graphics().p("EhOkAVGMAAAgqKMCdJAAAMAAAAqKg");
	var mask_1_graphics_52 = new cjs.Graphics().p("EhOkAVGMAAAgqKMCdJAAAMAAAAqKg");
	var mask_1_graphics_53 = new cjs.Graphics().p("EhOkAVGMAAAgqKMCdJAAAMAAAAqKg");
	var mask_1_graphics_54 = new cjs.Graphics().p("EhOkAVGMAAAgqKMCdJAAAMAAAAqKg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(34).to({graphics:mask_1_graphics_34,x:494.5,y:-115.5}).wait(1).to({graphics:mask_1_graphics_35,x:446.6,y:-115.5}).wait(1).to({graphics:mask_1_graphics_36,x:398.7,y:-115.5}).wait(1).to({graphics:mask_1_graphics_37,x:350.8,y:-115.5}).wait(1).to({graphics:mask_1_graphics_38,x:302.9,y:-115.5}).wait(1).to({graphics:mask_1_graphics_39,x:255,y:-115.5}).wait(1).to({graphics:mask_1_graphics_40,x:207.1,y:-115.5}).wait(1).to({graphics:mask_1_graphics_41,x:159.3,y:-115.5}).wait(1).to({graphics:mask_1_graphics_42,x:111.4,y:-115.5}).wait(1).to({graphics:mask_1_graphics_43,x:63.5,y:-115.5}).wait(1).to({graphics:mask_1_graphics_44,x:15.6,y:-115.5}).wait(1).to({graphics:mask_1_graphics_45,x:15.6,y:-115.5}).wait(1).to({graphics:mask_1_graphics_46,x:15.6,y:-115.5}).wait(1).to({graphics:mask_1_graphics_47,x:15.6,y:-115.5}).wait(1).to({graphics:mask_1_graphics_48,x:15.6,y:-115.5}).wait(1).to({graphics:mask_1_graphics_49,x:15.6,y:-115.5}).wait(1).to({graphics:mask_1_graphics_50,x:15.6,y:-115.5}).wait(1).to({graphics:mask_1_graphics_51,x:15.6,y:-115.5}).wait(1).to({graphics:mask_1_graphics_52,x:15.6,y:-115.5}).wait(1).to({graphics:mask_1_graphics_53,x:15.6,y:-115.5}).wait(1).to({graphics:mask_1_graphics_54,x:15.6,y:-115.5}).wait(1));

	// Linia copy 3
	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#2FB7AA").s().p("AgYA/IAAh8IAxAAIAAB8g");
	this.shape_13.setTransform(113.6,-329.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#2FB7AA").s().p("AgYBXIAAiuIAxAAIAACug");
	this.shape_14.setTransform(-287.2,-319.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#2FB7AA").s().p("A/tAZIAAgxMA/aAAAIAAAxg");
	this.shape_15.setTransform(-86.8,-325.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#2FB7AA").s().p("AgYRCMAAAgiDIAxAAMAAAAiDg");
	this.shape_16.setTransform(-469.5,121.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#2FB7AA").s().p("AldAZIAAgxIK7AAIAAAxg");
	this.shape_17.setTransform(-437,10.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#2FB7AA").s().p("AldAZIAAgxIK7AAIAAAxg");
	this.shape_18.setTransform(-437,231.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#2FB7AA").s().p("AgYRCMAAAgiDIAxAAMAAAAiDg");
	this.shape_19.setTransform(495.5,-98.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#2FB7AA").s().p("AldAZIAAgxIK7AAIAAAxg");
	this.shape_20.setTransform(463,10.6);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#2FB7AA").s().p("AldAZIAAgxIK7AAIAAAxg");
	this.shape_21.setTransform(463,-209.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#2FB7AA").s().p("AldAZIAAgxIK7AAIAAAxg");
	this.shape_22.setTransform(-137,10.6);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#2FB7AA").s().p("AldAZIAAgxIK7AAIAAAxg");
	this.shape_23.setTransform(162.7,10.6);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#2FB7AA").s().p("AldAZIAAgxIK7AAIAAAxg");
	this.shape_24.setTransform(162.7,-209.8);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#2FB7AA").s().p("AldAZIAAgxIK7AAIAAAxg");
	this.shape_25.setTransform(-137,-209.8);

	var maskedShapeInstanceList = [this.shape_13,this.shape_14,this.shape_15,this.shape_16,this.shape_17,this.shape_18,this.shape_19,this.shape_20,this.shape_21,this.shape_22,this.shape_23,this.shape_24,this.shape_25];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13}]},34).wait(21));

	// Maska copy 2 (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	var mask_2_graphics_29 = new cjs.Graphics().p("AjqB/IAAj9IHUAAIAAD9g");
	var mask_2_graphics_30 = new cjs.Graphics().p("AjqF0IAArnIHUAAIAALng");
	var mask_2_graphics_31 = new cjs.Graphics().p("AjqJoIAAzPIHUAAIAATPg");
	var mask_2_graphics_32 = new cjs.Graphics().p("AjqNdIAA64IHUAAIAAa4g");
	var mask_2_graphics_33 = new cjs.Graphics().p("AjqRRMAAAgihIHUAAMAAAAihg");
	var mask_2_graphics_34 = new cjs.Graphics().p("AjqVGMAAAgqKIHUAAMAAAAqKg");
	var mask_2_graphics_35 = new cjs.Graphics().p("AjqVGMAAAgqKIHUAAMAAAAqKg");
	var mask_2_graphics_36 = new cjs.Graphics().p("AjqVGMAAAgqKIHUAAMAAAAqKg");
	var mask_2_graphics_37 = new cjs.Graphics().p("AjqVGMAAAgqKIHUAAMAAAAqKg");
	var mask_2_graphics_38 = new cjs.Graphics().p("AjqVGMAAAgqKIHUAAMAAAAqKg");
	var mask_2_graphics_39 = new cjs.Graphics().p("AjqVGMAAAgqKIHUAAMAAAAqKg");
	var mask_2_graphics_40 = new cjs.Graphics().p("AjqVGMAAAgqKIHUAAMAAAAqKg");
	var mask_2_graphics_41 = new cjs.Graphics().p("AjqVGMAAAgqKIHUAAMAAAAqKg");
	var mask_2_graphics_42 = new cjs.Graphics().p("AjqVGMAAAgqKIHUAAMAAAAqKg");
	var mask_2_graphics_43 = new cjs.Graphics().p("AjqVGMAAAgqKIHUAAMAAAAqKg");
	var mask_2_graphics_44 = new cjs.Graphics().p("AjqVGMAAAgqKIHUAAMAAAAqKg");
	var mask_2_graphics_45 = new cjs.Graphics().p("AjqVGMAAAgqKIHUAAMAAAAqKg");
	var mask_2_graphics_46 = new cjs.Graphics().p("AjqVGMAAAgqKIHUAAMAAAAqKg");
	var mask_2_graphics_47 = new cjs.Graphics().p("AjqVGMAAAgqKIHUAAMAAAAqKg");
	var mask_2_graphics_48 = new cjs.Graphics().p("AjqVGMAAAgqKIHUAAMAAAAqKg");
	var mask_2_graphics_49 = new cjs.Graphics().p("AjqVGMAAAgqKIHUAAMAAAAqKg");
	var mask_2_graphics_50 = new cjs.Graphics().p("AjqVGMAAAgqKIHUAAMAAAAqKg");
	var mask_2_graphics_51 = new cjs.Graphics().p("AjqVGMAAAgqKIHUAAMAAAAqKg");
	var mask_2_graphics_52 = new cjs.Graphics().p("AjqVGMAAAgqKIHUAAMAAAAqKg");
	var mask_2_graphics_53 = new cjs.Graphics().p("AjqVGMAAAgqKIHUAAMAAAAqKg");
	var mask_2_graphics_54 = new cjs.Graphics().p("AjqVGMAAAgqKIHUAAMAAAAqKg");

	this.timeline.addTween(cjs.Tween.get(mask_2).to({graphics:null,x:0,y:0}).wait(29).to({graphics:mask_2_graphics_29,x:494.5,y:-237.8}).wait(1).to({graphics:mask_2_graphics_30,x:494.5,y:-213.3}).wait(1).to({graphics:mask_2_graphics_31,x:494.5,y:-188.9}).wait(1).to({graphics:mask_2_graphics_32,x:494.5,y:-164.4}).wait(1).to({graphics:mask_2_graphics_33,x:494.5,y:-140}).wait(1).to({graphics:mask_2_graphics_34,x:494.5,y:-115.5}).wait(1).to({graphics:mask_2_graphics_35,x:494.5,y:-115.5}).wait(1).to({graphics:mask_2_graphics_36,x:494.5,y:-115.5}).wait(1).to({graphics:mask_2_graphics_37,x:494.5,y:-115.5}).wait(1).to({graphics:mask_2_graphics_38,x:494.5,y:-115.5}).wait(1).to({graphics:mask_2_graphics_39,x:494.5,y:-115.5}).wait(1).to({graphics:mask_2_graphics_40,x:494.5,y:-115.5}).wait(1).to({graphics:mask_2_graphics_41,x:494.5,y:-115.5}).wait(1).to({graphics:mask_2_graphics_42,x:494.5,y:-115.5}).wait(1).to({graphics:mask_2_graphics_43,x:494.5,y:-115.5}).wait(1).to({graphics:mask_2_graphics_44,x:494.5,y:-115.5}).wait(1).to({graphics:mask_2_graphics_45,x:494.5,y:-115.5}).wait(1).to({graphics:mask_2_graphics_46,x:494.5,y:-115.5}).wait(1).to({graphics:mask_2_graphics_47,x:494.5,y:-115.5}).wait(1).to({graphics:mask_2_graphics_48,x:494.5,y:-115.5}).wait(1).to({graphics:mask_2_graphics_49,x:494.5,y:-115.5}).wait(1).to({graphics:mask_2_graphics_50,x:494.5,y:-115.5}).wait(1).to({graphics:mask_2_graphics_51,x:494.5,y:-115.5}).wait(1).to({graphics:mask_2_graphics_52,x:494.5,y:-115.5}).wait(1).to({graphics:mask_2_graphics_53,x:494.5,y:-115.5}).wait(1).to({graphics:mask_2_graphics_54,x:494.5,y:-115.5}).wait(1));

	// Linia copy 2
	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#2FB7AA").s().p("AgYA/IAAh8IAxAAIAAB8g");
	this.shape_26.setTransform(113.6,-329.6);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#2FB7AA").s().p("AgYBXIAAiuIAxAAIAACug");
	this.shape_27.setTransform(-287.2,-319.6);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#2FB7AA").s().p("A/tAZIAAgxMA/aAAAIAAAxg");
	this.shape_28.setTransform(-86.8,-325.8);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#2FB7AA").s().p("AgYRCMAAAgiDIAxAAMAAAAiDg");
	this.shape_29.setTransform(-469.5,121.1);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#2FB7AA").s().p("AldAZIAAgxIK7AAIAAAxg");
	this.shape_30.setTransform(-437,10.6);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#2FB7AA").s().p("AldAZIAAgxIK7AAIAAAxg");
	this.shape_31.setTransform(-437,231.8);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#2FB7AA").s().p("AgYRCMAAAgiDIAxAAMAAAAiDg");
	this.shape_32.setTransform(495.5,-98.4);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#2FB7AA").s().p("AldAZIAAgxIK7AAIAAAxg");
	this.shape_33.setTransform(463,10.6);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#2FB7AA").s().p("AldAZIAAgxIK7AAIAAAxg");
	this.shape_34.setTransform(463,-209.8);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#2FB7AA").s().p("AldAZIAAgxIK7AAIAAAxg");
	this.shape_35.setTransform(-137,10.6);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#2FB7AA").s().p("AldAZIAAgxIK7AAIAAAxg");
	this.shape_36.setTransform(162.7,10.6);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#2FB7AA").s().p("AldAZIAAgxIK7AAIAAAxg");
	this.shape_37.setTransform(162.7,-209.8);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#2FB7AA").s().p("AldAZIAAgxIK7AAIAAAxg");
	this.shape_38.setTransform(-137,-209.8);

	var maskedShapeInstanceList = [this.shape_26,this.shape_27,this.shape_28,this.shape_29,this.shape_30,this.shape_31,this.shape_32,this.shape_33,this.shape_34,this.shape_35,this.shape_36,this.shape_37,this.shape_38];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26}]},29).wait(26));

	// Maska copy (mask)
	var mask_3 = new cjs.Shape();
	mask_3._off = true;
	var mask_3_graphics_15 = new cjs.Graphics().p("Ah+DqIAAnUID9AAIAAHUg");
	var mask_3_graphics_16 = new cjs.Graphics().p("AmdDrIAAnVIM7AAIAAHVg");
	var mask_3_graphics_17 = new cjs.Graphics().p("Aq8DqIAAnUIV5AAIAAHUg");
	var mask_3_graphics_18 = new cjs.Graphics().p("AvbDrIAAnUIe3AAIAAHUg");
	var mask_3_graphics_19 = new cjs.Graphics().p("Az5DqIAAnUMAnzAAAIAAHUg");
	var mask_3_graphics_20 = new cjs.Graphics().p("A4YDqIAAnUMAwxAAAIAAHUg");
	var mask_3_graphics_21 = new cjs.Graphics().p("A83DqIAAnUMA5vAAAIAAHUg");
	var mask_3_graphics_22 = new cjs.Graphics().p("EghWADrIAAnUMBCtAAAIAAHUg");
	var mask_3_graphics_23 = new cjs.Graphics().p("Egl0ADqIAAnTMBLqAAAIAAHTg");
	var mask_3_graphics_24 = new cjs.Graphics().p("EgqTADrIAAnUMBUnAAAIAAHUg");
	var mask_3_graphics_25 = new cjs.Graphics().p("EguyADqIAAnUMBdlAAAIAAHUg");
	var mask_3_graphics_26 = new cjs.Graphics().p("EgzRADrIAAnVMBmjAAAIAAHVg");
	var mask_3_graphics_27 = new cjs.Graphics().p("Eg3vADrIAAnUMBvgAAAIAAHUg");
	var mask_3_graphics_28 = new cjs.Graphics().p("Eg8OADrIAAnUMB4dAAAIAAHUg");
	var mask_3_graphics_29 = new cjs.Graphics().p("EhAtADqIAAnUMCBbAAAIAAHUg");
	var mask_3_graphics_30 = new cjs.Graphics().p("EhAtADqIAAnUMCBbAAAIAAHUg");
	var mask_3_graphics_31 = new cjs.Graphics().p("EhAtADqIAAnUMCBbAAAIAAHUg");
	var mask_3_graphics_32 = new cjs.Graphics().p("EhAtADqIAAnUMCBbAAAIAAHUg");
	var mask_3_graphics_33 = new cjs.Graphics().p("EhAtADqIAAnUMCBbAAAIAAHUg");
	var mask_3_graphics_34 = new cjs.Graphics().p("EhAtADqIAAnUMCBbAAAIAAHUg");
	var mask_3_graphics_35 = new cjs.Graphics().p("EhAtADqIAAnUMCBbAAAIAAHUg");
	var mask_3_graphics_36 = new cjs.Graphics().p("EhAtADqIAAnUMCBbAAAIAAHUg");
	var mask_3_graphics_37 = new cjs.Graphics().p("EhAtADqIAAnUMCBbAAAIAAHUg");
	var mask_3_graphics_38 = new cjs.Graphics().p("EhAtADqIAAnUMCBbAAAIAAHUg");
	var mask_3_graphics_39 = new cjs.Graphics().p("EhAtADqIAAnUMCBbAAAIAAHUg");
	var mask_3_graphics_40 = new cjs.Graphics().p("EhAtADqIAAnUMCBbAAAIAAHUg");
	var mask_3_graphics_41 = new cjs.Graphics().p("EhAtADqIAAnUMCBbAAAIAAHUg");
	var mask_3_graphics_42 = new cjs.Graphics().p("EhAtADqIAAnUMCBbAAAIAAHUg");
	var mask_3_graphics_43 = new cjs.Graphics().p("EhAtADqIAAnUMCBbAAAIAAHUg");
	var mask_3_graphics_44 = new cjs.Graphics().p("EhAtADqIAAnUMCBbAAAIAAHUg");
	var mask_3_graphics_45 = new cjs.Graphics().p("EhAtADqIAAnUMCBbAAAIAAHUg");
	var mask_3_graphics_46 = new cjs.Graphics().p("EhAtADqIAAnUMCBbAAAIAAHUg");
	var mask_3_graphics_47 = new cjs.Graphics().p("EhAtADqIAAnUMCBbAAAIAAHUg");
	var mask_3_graphics_48 = new cjs.Graphics().p("EhAtADqIAAnUMCBbAAAIAAHUg");
	var mask_3_graphics_49 = new cjs.Graphics().p("EhAtADqIAAnUMCBbAAAIAAHUg");
	var mask_3_graphics_50 = new cjs.Graphics().p("EhAtADqIAAnUMCBbAAAIAAHUg");
	var mask_3_graphics_51 = new cjs.Graphics().p("EhAtADqIAAnUMCBbAAAIAAHUg");
	var mask_3_graphics_52 = new cjs.Graphics().p("EhAtADqIAAnUMCBbAAAIAAHUg");
	var mask_3_graphics_53 = new cjs.Graphics().p("EhAtADqIAAnUMCBbAAAIAAHUg");
	var mask_3_graphics_54 = new cjs.Graphics().p("EhAtADqIAAnUMCBbAAAIAAHUg");

	this.timeline.addTween(cjs.Tween.get(mask_3).to({graphics:null,x:0,y:0}).wait(15).to({graphics:mask_3_graphics_15,x:-297.5,y:-216.3}).wait(1).to({graphics:mask_3_graphics_16,x:-268.8,y:-217.3}).wait(1).to({graphics:mask_3_graphics_17,x:-240.1,y:-218.3}).wait(1).to({graphics:mask_3_graphics_18,x:-211.4,y:-219.4}).wait(1).to({graphics:mask_3_graphics_19,x:-182.8,y:-220.4}).wait(1).to({graphics:mask_3_graphics_20,x:-154.1,y:-221.5}).wait(1).to({graphics:mask_3_graphics_21,x:-125.4,y:-222.5}).wait(1).to({graphics:mask_3_graphics_22,x:-96.7,y:-223.5}).wait(1).to({graphics:mask_3_graphics_23,x:-68.1,y:-224.6}).wait(1).to({graphics:mask_3_graphics_24,x:-39.4,y:-225.6}).wait(1).to({graphics:mask_3_graphics_25,x:-10.7,y:-226.6}).wait(1).to({graphics:mask_3_graphics_26,x:17.9,y:-227.7}).wait(1).to({graphics:mask_3_graphics_27,x:46.6,y:-228.7}).wait(1).to({graphics:mask_3_graphics_28,x:75.3,y:-229.7}).wait(1).to({graphics:mask_3_graphics_29,x:104,y:-230.8}).wait(1).to({graphics:mask_3_graphics_30,x:104,y:-230.8}).wait(1).to({graphics:mask_3_graphics_31,x:104,y:-230.8}).wait(1).to({graphics:mask_3_graphics_32,x:104,y:-230.8}).wait(1).to({graphics:mask_3_graphics_33,x:104,y:-230.8}).wait(1).to({graphics:mask_3_graphics_34,x:104,y:-230.8}).wait(1).to({graphics:mask_3_graphics_35,x:104,y:-230.8}).wait(1).to({graphics:mask_3_graphics_36,x:104,y:-230.8}).wait(1).to({graphics:mask_3_graphics_37,x:104,y:-230.8}).wait(1).to({graphics:mask_3_graphics_38,x:104,y:-230.8}).wait(1).to({graphics:mask_3_graphics_39,x:104,y:-230.8}).wait(1).to({graphics:mask_3_graphics_40,x:104,y:-230.8}).wait(1).to({graphics:mask_3_graphics_41,x:104,y:-230.8}).wait(1).to({graphics:mask_3_graphics_42,x:104,y:-230.8}).wait(1).to({graphics:mask_3_graphics_43,x:104,y:-230.8}).wait(1).to({graphics:mask_3_graphics_44,x:104,y:-230.8}).wait(1).to({graphics:mask_3_graphics_45,x:104,y:-230.8}).wait(1).to({graphics:mask_3_graphics_46,x:104,y:-230.8}).wait(1).to({graphics:mask_3_graphics_47,x:104,y:-230.8}).wait(1).to({graphics:mask_3_graphics_48,x:104,y:-230.8}).wait(1).to({graphics:mask_3_graphics_49,x:104,y:-230.8}).wait(1).to({graphics:mask_3_graphics_50,x:104,y:-230.8}).wait(1).to({graphics:mask_3_graphics_51,x:104,y:-230.8}).wait(1).to({graphics:mask_3_graphics_52,x:104,y:-230.8}).wait(1).to({graphics:mask_3_graphics_53,x:104,y:-230.8}).wait(1).to({graphics:mask_3_graphics_54,x:104,y:-230.8}).wait(1));

	// Linia copy
	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#2FB7AA").s().p("AgYA/IAAh8IAxAAIAAB8g");
	this.shape_39.setTransform(113.6,-329.6);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#2FB7AA").s().p("AgYBXIAAiuIAxAAIAACug");
	this.shape_40.setTransform(-287.2,-319.6);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#2FB7AA").s().p("A/tAZIAAgxMA/aAAAIAAAxg");
	this.shape_41.setTransform(-86.8,-325.8);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#2FB7AA").s().p("AgYRCMAAAgiDIAxAAMAAAAiDg");
	this.shape_42.setTransform(-469.5,121.1);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#2FB7AA").s().p("AldAZIAAgxIK7AAIAAAxg");
	this.shape_43.setTransform(-437,10.6);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#2FB7AA").s().p("AldAZIAAgxIK7AAIAAAxg");
	this.shape_44.setTransform(-437,231.8);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#2FB7AA").s().p("AgYRCMAAAgiDIAxAAMAAAAiDg");
	this.shape_45.setTransform(495.5,-98.4);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#2FB7AA").s().p("AldAZIAAgxIK7AAIAAAxg");
	this.shape_46.setTransform(463,10.6);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#2FB7AA").s().p("AldAZIAAgxIK7AAIAAAxg");
	this.shape_47.setTransform(463,-209.8);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#2FB7AA").s().p("AldAZIAAgxIK7AAIAAAxg");
	this.shape_48.setTransform(-137,10.6);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#2FB7AA").s().p("AldAZIAAgxIK7AAIAAAxg");
	this.shape_49.setTransform(162.7,10.6);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#2FB7AA").s().p("AldAZIAAgxIK7AAIAAAxg");
	this.shape_50.setTransform(162.7,-209.8);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#2FB7AA").s().p("AldAZIAAgxIK7AAIAAAxg");
	this.shape_51.setTransform(-137,-209.8);

	var maskedShapeInstanceList = [this.shape_39,this.shape_40,this.shape_41,this.shape_42,this.shape_43,this.shape_44,this.shape_45,this.shape_46,this.shape_47,this.shape_48,this.shape_49,this.shape_50,this.shape_51];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39}]},15).wait(40));

	// Maska (mask)
	var mask_4 = new cjs.Shape();
	mask_4._off = true;
	var mask_4_graphics_0 = new cjs.Graphics().p("Ah+DqIAAnUID9AAIAAHUg");
	var mask_4_graphics_1 = new cjs.Graphics().p("AkaDqIAAnUII2AAIAAHUg");
	var mask_4_graphics_2 = new cjs.Graphics().p("Am3DqIAAnUINvAAIAAHUg");
	var mask_4_graphics_3 = new cjs.Graphics().p("ApTDqIAAnUISnAAIAAHUg");
	var mask_4_graphics_4 = new cjs.Graphics().p("ArvDqIAAnUIXfAAIAAHUg");
	var mask_4_graphics_5 = new cjs.Graphics().p("AuLDqIAAnUIcXAAIAAHUg");
	var mask_4_graphics_6 = new cjs.Graphics().p("AwnDqIAAnUMAhPAAAIAAHUg");
	var mask_4_graphics_7 = new cjs.Graphics().p("AzDDqIAAnUMAmHAAAIAAHUg");
	var mask_4_graphics_8 = new cjs.Graphics().p("A1fDqIAAnUMAq/AAAIAAHUg");
	var mask_4_graphics_9 = new cjs.Graphics().p("A38DqIAAnUMAv5AAAIAAHUg");
	var mask_4_graphics_10 = new cjs.Graphics().p("A6YDqIAAnUMA0xAAAIAAHUg");
	var mask_4_graphics_11 = new cjs.Graphics().p("A80DqIAAnUMA5pAAAIAAHUg");
	var mask_4_graphics_12 = new cjs.Graphics().p("A/QDqIAAnUMA+hAAAIAAHUg");
	var mask_4_graphics_13 = new cjs.Graphics().p("EghsADqIAAnUMBDZAAAIAAHUg");
	var mask_4_graphics_14 = new cjs.Graphics().p("EgkIADqIAAnUMBIRAAAIAAHUg");
	var mask_4_graphics_15 = new cjs.Graphics().p("EgmkADqIAAnUMBNJAAAIAAHUg");
	var mask_4_graphics_16 = new cjs.Graphics().p("EgmkADqIAAnUMBNJAAAIAAHUg");
	var mask_4_graphics_17 = new cjs.Graphics().p("EgmkADqIAAnUMBNJAAAIAAHUg");
	var mask_4_graphics_18 = new cjs.Graphics().p("EgmkADqIAAnUMBNJAAAIAAHUg");
	var mask_4_graphics_19 = new cjs.Graphics().p("EgmkADqIAAnUMBNJAAAIAAHUg");
	var mask_4_graphics_20 = new cjs.Graphics().p("EgmkADqIAAnUMBNJAAAIAAHUg");
	var mask_4_graphics_21 = new cjs.Graphics().p("EgmkADqIAAnUMBNJAAAIAAHUg");
	var mask_4_graphics_22 = new cjs.Graphics().p("EgmkADqIAAnUMBNJAAAIAAHUg");
	var mask_4_graphics_23 = new cjs.Graphics().p("EgmkADqIAAnUMBNJAAAIAAHUg");
	var mask_4_graphics_24 = new cjs.Graphics().p("EgmkADqIAAnUMBNJAAAIAAHUg");
	var mask_4_graphics_25 = new cjs.Graphics().p("EgmkADqIAAnUMBNJAAAIAAHUg");
	var mask_4_graphics_26 = new cjs.Graphics().p("EgmkADqIAAnUMBNJAAAIAAHUg");
	var mask_4_graphics_27 = new cjs.Graphics().p("EgmkADqIAAnUMBNJAAAIAAHUg");
	var mask_4_graphics_28 = new cjs.Graphics().p("EgmkADqIAAnUMBNJAAAIAAHUg");
	var mask_4_graphics_29 = new cjs.Graphics().p("EgmkADqIAAnUMBNJAAAIAAHUg");
	var mask_4_graphics_30 = new cjs.Graphics().p("EgmkADqIAAnUMBNJAAAIAAHUg");
	var mask_4_graphics_31 = new cjs.Graphics().p("EgmkADqIAAnUMBNJAAAIAAHUg");
	var mask_4_graphics_32 = new cjs.Graphics().p("EgmkADqIAAnUMBNJAAAIAAHUg");
	var mask_4_graphics_33 = new cjs.Graphics().p("EgmkADqIAAnUMBNJAAAIAAHUg");
	var mask_4_graphics_34 = new cjs.Graphics().p("EgmkADqIAAnUMBNJAAAIAAHUg");
	var mask_4_graphics_35 = new cjs.Graphics().p("EgmkADqIAAnUMBNJAAAIAAHUg");
	var mask_4_graphics_36 = new cjs.Graphics().p("EgmkADqIAAnUMBNJAAAIAAHUg");
	var mask_4_graphics_37 = new cjs.Graphics().p("EgmkADqIAAnUMBNJAAAIAAHUg");
	var mask_4_graphics_38 = new cjs.Graphics().p("EgmkADqIAAnUMBNJAAAIAAHUg");
	var mask_4_graphics_39 = new cjs.Graphics().p("EgmkADqIAAnUMBNJAAAIAAHUg");
	var mask_4_graphics_40 = new cjs.Graphics().p("EgmkADqIAAnUMBNJAAAIAAHUg");
	var mask_4_graphics_41 = new cjs.Graphics().p("EgmkADqIAAnUMBNJAAAIAAHUg");
	var mask_4_graphics_42 = new cjs.Graphics().p("EgmkADqIAAnUMBNJAAAIAAHUg");
	var mask_4_graphics_43 = new cjs.Graphics().p("EgmkADqIAAnUMBNJAAAIAAHUg");
	var mask_4_graphics_44 = new cjs.Graphics().p("EgmkADqIAAnUMBNJAAAIAAHUg");
	var mask_4_graphics_45 = new cjs.Graphics().p("EgmkADqIAAnUMBNJAAAIAAHUg");
	var mask_4_graphics_46 = new cjs.Graphics().p("EgmkADqIAAnUMBNJAAAIAAHUg");
	var mask_4_graphics_47 = new cjs.Graphics().p("EgmkADqIAAnUMBNJAAAIAAHUg");
	var mask_4_graphics_48 = new cjs.Graphics().p("EgmkADqIAAnUMBNJAAAIAAHUg");
	var mask_4_graphics_49 = new cjs.Graphics().p("EgmkADqIAAnUMBNJAAAIAAHUg");
	var mask_4_graphics_50 = new cjs.Graphics().p("EgmkADqIAAnUMBNJAAAIAAHUg");
	var mask_4_graphics_51 = new cjs.Graphics().p("EgmkADqIAAnUMBNJAAAIAAHUg");
	var mask_4_graphics_52 = new cjs.Graphics().p("EgmkADqIAAnUMBNJAAAIAAHUg");
	var mask_4_graphics_53 = new cjs.Graphics().p("EgmkADqIAAnUMBNJAAAIAAHUg");
	var mask_4_graphics_54 = new cjs.Graphics().p("EgmkADqIAAnUMBNJAAAIAAHUg");

	this.timeline.addTween(cjs.Tween.get(mask_4).to({graphics:mask_4_graphics_0,x:133.4,y:-334.3}).wait(1).to({graphics:mask_4_graphics_1,x:117.8,y:-334.3}).wait(1).to({graphics:mask_4_graphics_2,x:102.2,y:-334.3}).wait(1).to({graphics:mask_4_graphics_3,x:86.6,y:-334.3}).wait(1).to({graphics:mask_4_graphics_4,x:71,y:-334.3}).wait(1).to({graphics:mask_4_graphics_5,x:55.4,y:-334.3}).wait(1).to({graphics:mask_4_graphics_6,x:39.8,y:-334.3}).wait(1).to({graphics:mask_4_graphics_7,x:24.1,y:-334.3}).wait(1).to({graphics:mask_4_graphics_8,x:8.6,y:-334.3}).wait(1).to({graphics:mask_4_graphics_9,x:-7.1,y:-334.3}).wait(1).to({graphics:mask_4_graphics_10,x:-22.7,y:-334.3}).wait(1).to({graphics:mask_4_graphics_11,x:-38.3,y:-334.3}).wait(1).to({graphics:mask_4_graphics_12,x:-53.9,y:-334.3}).wait(1).to({graphics:mask_4_graphics_13,x:-69.5,y:-334.3}).wait(1).to({graphics:mask_4_graphics_14,x:-85.1,y:-334.3}).wait(1).to({graphics:mask_4_graphics_15,x:-100.7,y:-334.3}).wait(1).to({graphics:mask_4_graphics_16,x:-100.7,y:-334.3}).wait(1).to({graphics:mask_4_graphics_17,x:-100.7,y:-334.3}).wait(1).to({graphics:mask_4_graphics_18,x:-100.7,y:-334.3}).wait(1).to({graphics:mask_4_graphics_19,x:-100.7,y:-334.3}).wait(1).to({graphics:mask_4_graphics_20,x:-100.7,y:-334.3}).wait(1).to({graphics:mask_4_graphics_21,x:-100.7,y:-334.3}).wait(1).to({graphics:mask_4_graphics_22,x:-100.7,y:-334.3}).wait(1).to({graphics:mask_4_graphics_23,x:-100.7,y:-334.3}).wait(1).to({graphics:mask_4_graphics_24,x:-100.7,y:-334.3}).wait(1).to({graphics:mask_4_graphics_25,x:-100.7,y:-334.3}).wait(1).to({graphics:mask_4_graphics_26,x:-100.7,y:-334.3}).wait(1).to({graphics:mask_4_graphics_27,x:-100.7,y:-334.3}).wait(1).to({graphics:mask_4_graphics_28,x:-100.7,y:-334.3}).wait(1).to({graphics:mask_4_graphics_29,x:-100.7,y:-334.3}).wait(1).to({graphics:mask_4_graphics_30,x:-100.7,y:-334.3}).wait(1).to({graphics:mask_4_graphics_31,x:-100.7,y:-334.3}).wait(1).to({graphics:mask_4_graphics_32,x:-100.7,y:-334.3}).wait(1).to({graphics:mask_4_graphics_33,x:-100.7,y:-334.3}).wait(1).to({graphics:mask_4_graphics_34,x:-100.7,y:-334.3}).wait(1).to({graphics:mask_4_graphics_35,x:-100.7,y:-334.3}).wait(1).to({graphics:mask_4_graphics_36,x:-100.7,y:-334.3}).wait(1).to({graphics:mask_4_graphics_37,x:-100.7,y:-334.3}).wait(1).to({graphics:mask_4_graphics_38,x:-100.7,y:-334.3}).wait(1).to({graphics:mask_4_graphics_39,x:-100.7,y:-334.3}).wait(1).to({graphics:mask_4_graphics_40,x:-100.7,y:-334.3}).wait(1).to({graphics:mask_4_graphics_41,x:-100.7,y:-334.3}).wait(1).to({graphics:mask_4_graphics_42,x:-100.7,y:-334.3}).wait(1).to({graphics:mask_4_graphics_43,x:-100.7,y:-334.3}).wait(1).to({graphics:mask_4_graphics_44,x:-100.7,y:-334.3}).wait(1).to({graphics:mask_4_graphics_45,x:-100.7,y:-334.3}).wait(1).to({graphics:mask_4_graphics_46,x:-100.7,y:-334.3}).wait(1).to({graphics:mask_4_graphics_47,x:-100.7,y:-334.3}).wait(1).to({graphics:mask_4_graphics_48,x:-100.7,y:-334.3}).wait(1).to({graphics:mask_4_graphics_49,x:-100.7,y:-334.3}).wait(1).to({graphics:mask_4_graphics_50,x:-100.7,y:-334.3}).wait(1).to({graphics:mask_4_graphics_51,x:-100.7,y:-334.3}).wait(1).to({graphics:mask_4_graphics_52,x:-100.7,y:-334.3}).wait(1).to({graphics:mask_4_graphics_53,x:-100.7,y:-334.3}).wait(1).to({graphics:mask_4_graphics_54,x:-100.7,y:-334.3}).wait(1));

	// Linia
	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#2FB7AA").s().p("AgYA/IAAh8IAxAAIAAB8g");
	this.shape_52.setTransform(113.6,-329.6);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#2FB7AA").s().p("AgYBXIAAiuIAxAAIAACug");
	this.shape_53.setTransform(-287.2,-319.6);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#2FB7AA").s().p("A/tAZIAAgxMA/aAAAIAAAxg");
	this.shape_54.setTransform(-86.8,-325.8);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#2FB7AA").s().p("AgYRCMAAAgiDIAxAAMAAAAiDg");
	this.shape_55.setTransform(-469.5,121.1);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#2FB7AA").s().p("AldAZIAAgxIK7AAIAAAxg");
	this.shape_56.setTransform(-437,10.6);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#2FB7AA").s().p("AldAZIAAgxIK7AAIAAAxg");
	this.shape_57.setTransform(-437,231.8);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#2FB7AA").s().p("AgYRCMAAAgiDIAxAAMAAAAiDg");
	this.shape_58.setTransform(495.5,-98.4);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#2FB7AA").s().p("AldAZIAAgxIK7AAIAAAxg");
	this.shape_59.setTransform(463,10.6);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#2FB7AA").s().p("AldAZIAAgxIK7AAIAAAxg");
	this.shape_60.setTransform(463,-209.8);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#2FB7AA").s().p("AldAZIAAgxIK7AAIAAAxg");
	this.shape_61.setTransform(-137,10.6);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#2FB7AA").s().p("AldAZIAAgxIK7AAIAAAxg");
	this.shape_62.setTransform(162.7,10.6);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#2FB7AA").s().p("AldAZIAAgxIK7AAIAAAxg");
	this.shape_63.setTransform(162.7,-209.8);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#2FB7AA").s().p("AldAZIAAgxIK7AAIAAAxg");
	this.shape_64.setTransform(-137,-209.8);

	var maskedShapeInstanceList = [this.shape_52,this.shape_53,this.shape_54,this.shape_55,this.shape_56,this.shape_57,this.shape_58,this.shape_59,this.shape_60,this.shape_61,this.shape_62,this.shape_63,this.shape_64];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_4;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52}]}).wait(55));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-288,-335.8,434.2,127.1);


(lib.STEP3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_5 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(5).call(this.frame_5).wait(6));

	// Layer 8
	this.hoverSpace = new lib.hoverSpace();
	this.hoverSpace.parent = this;
	this.hoverSpace.setTransform(0.5,-51.5);
	this.hoverSpace.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.hoverSpace).wait(11));

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#2FB7AA").s().p("AhVBXQgkgkAAgzQAAgxAkglQAjgjAygBQAzABAkAjQAkAlAAAxQAAAzgkAkQgkAkgzgBQgyABgjgkg");
	this.shape.setTransform(0,55.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(11));

	// IDENTIFYING RISKS AND OPPORTUNITIES FOR ENVIRONMENTAL POLICY
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#262733").s().p("AgHArIAAglIgigwIATAAIAWAjIAXgjIATAAIgiAwIAAAlg");
	this.shape_1.setTransform(19.6,143);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#262733").s().p("AgDAsQgGgCgFgDQgGgCgDgGQgEgEgDgIQgCgIAAgLQAAgJACgIQADgIAEgGQADgEAGgEQAFgDAGgBIAKAAQANAAANAFIAAAOQgMgFgMgBQgGAAgDACQgFABgEADQgEACgCAHQgCAHAAAIQAAAKACAGQACAGAEAEQAEACAFABIAJABQAMABAMgGIAAAOQgNAGgNAAIgKgBg");
	this.shape_2.setTransform(10.7,143);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#262733").s().p("AgHArIAAhVIAPAAIAABVg");
	this.shape_3.setTransform(4.1,143);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#262733").s().p("AgcArIAAhVIAQAAIAABHIAoAAIAAAOg");
	this.shape_4.setTransform(-1.5,143);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#262733").s().p("AgLArQgFgBgGgDQgFgDgEgFQgEgEgCgIQgCgJgBgKQABgKACgIQACgIAEgFQAEgEAFgDQAGgDAFgBIALgBIALABQAFABAGADQAFADAEAEQAFAFACAIQADAIgBAKQABAKgDAJQgCAIgFAEQgEAFgFADQgGADgFABIgLABIgLgBgAgGgdIgIACQgDACgCADIgEAJQgBAGAAAHQAAAKACAGQACAGAEADQADADAFABIAIABIAIAAIAGgCQADgCADgEIADgJQACgFAAgIQAAgJgCgGQgCgHgEgDQgDgDgEgBIgKgBg");
	this.shape_5.setTransform(-11,143);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#262733").s().p("AgfArIAAhVIAfAAQAPAAAJAHQAIAIAAAOQAAANgIAHQgJAIgPAAIgPAAIAAAcgAgPABIAPAAQAJAAAEgDQAEgEgBgHQABgIgEgDQgEgEgJAAIgPAAg");
	this.shape_6.setTransform(-20.2,143);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#262733").s().p("AgbArIAAhVIAPAAIAABHIAoAAIAAAOg");
	this.shape_7.setTransform(55.3,125.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#262733").s().p("AAaArIgIgVIgjAAIgIAVIgRAAIAihVIARAAIAiBVgAANAIIgNghIgMAhIAZAAg");
	this.shape_8.setTransform(46.2,125.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#262733").s().p("AgHArIAAhGIgbAAIAAgPIBGAAIAAAPIgcAAIAABGg");
	this.shape_9.setTransform(37.3,125.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#262733").s().p("AAVArIgrg/IAAA/IgQAAIAAhVIASAAIArA/IAAg/IAQAAIAABVg");
	this.shape_10.setTransform(28,125.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#262733").s().p("AgcArIAAhVIA5AAIAAAOIgpAAIAAAWIAjAAIAAANIgjAAIAAAWIApAAIAAAOg");
	this.shape_11.setTransform(18.8,125.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#262733").s().p("AAbArIAAg/IgbAlIgaglIAAA/IgPAAIAAhVIARAAIAYAkIAZgkIARAAIAABVg");
	this.shape_12.setTransform(8.8,125.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#262733").s().p("AAVArIgrg/IAAA/IgQAAIAAhVIASAAIArA/IAAg/IAQAAIAABVg");
	this.shape_13.setTransform(-2.2,125.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#262733").s().p("AgKArQgGgBgGgDQgFgDgEgFQgEgEgCgIQgDgJAAgKQAAgKADgIQACgIAEgFQAEgEAFgDQAGgDAGgBIAKgBIALABQAFABAGADQAFADAEAEQAEAFADAIQACAIAAAKQAAAKgCAJQgDAIgEAEQgEAFgFADQgGADgFABIgLABIgKgBgAgHgdIgHACQgDACgCADIgEAJQgBAGAAAHQAAAKACAGQACAGAEADQADADAFABIAIABIAIAAIAGgCQADgCADgEIADgJQACgFAAgIQAAgJgCgGQgCgHgEgDQgEgDgDgBIgKgBg");
	this.shape_14.setTransform(-12.7,125.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#262733").s().p("AAPArIgTgeIgOAAIAAAeIgPAAIAAhVIAgAAQAPAAAIAHQAJAHAAANQgBATgSAGIAWAhgAgSgBIARAAQAHAAAFgCQAEgDAAgIQAAgIgEgDQgFgDgHAAIgRAAg");
	this.shape_15.setTransform(-22,125.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#262733").s().p("AgHArIAAhVIAPAAIAABVg");
	this.shape_16.setTransform(-29.1,125.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#262733").s().p("AgHArIghhVIAQAAIAYBCIAZhCIAQAAIghBVg");
	this.shape_17.setTransform(-35.9,125.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#262733").s().p("AAVArIgrg/IAAA/IgQAAIAAhVIASAAIArA/IAAg/IAQAAIAABVg");
	this.shape_18.setTransform(-45.8,125.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#262733").s().p("AgcArIAAhVIA5AAIAAAOIgpAAIAAAWIAjAAIAAANIgjAAIAAAWIApAAIAAAOg");
	this.shape_19.setTransform(-55,125.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#262733").s().p("AAPArIgTgeIgOAAIAAAeIgPAAIAAhVIAgAAQAPAAAJAHQAIAHAAANQgBATgSAGIAWAhgAgSgBIARAAQAHAAAFgCQAEgDAAgIQAAgIgEgDQgFgDgHAAIgRAAg");
	this.shape_20.setTransform(66.2,107.2);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#262733").s().p("AgLArQgFgBgFgDQgGgDgDgFQgFgEgCgIQgDgJABgKQgBgKADgIQACgIAFgFQADgEAGgDQAFgDAFgBIALgBIALABQAFABAGADQAFADAFAEQAEAFACAIQACAIABAKQgBAKgCAJQgCAIgEAEQgFAFgFADQgGADgFABIgLABIgLgBgAgHgdIgGACQgEACgCADIgDAJQgCAGAAAHQAAAKACAGQACAGADADQAFADADABIAJABIAHAAIAHgCQAEgCACgEIAEgJQABgFAAgIQAAgJgCgGQgCgHgEgDQgEgDgEgBIgJgBg");
	this.shape_21.setTransform(56.1,107.2);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#262733").s().p("AgbArIAAhVIA3AAIAAAOIgoAAIAAAWIAiAAIAAANIgiAAIAAAkg");
	this.shape_22.setTransform(47.4,107.2);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#262733").s().p("AgcAlIAAgQQALAJAOAAQARAAAAgKQAAgFgDgDQgDgDgFgBIgKgEIgKgEQgFgBgEgFQgDgFAAgHQAAgNAJgGQAJgGAMAAQAMAAALAGIAAAPQgKgHgLAAQgGAAgFADQgFACAAAGQAAAEAEACQAFADAFABIANAFQAHACAEAFQAFAHAAAKQAAAKgJAHQgJAGgMAAQgQAAgMgHg");
	this.shape_23.setTransform(34.1,107.2);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#262733").s().p("AgcArIAAhVIA5AAIAAAOIgpAAIAAAWIAjAAIAAANIgjAAIAAAWIApAAIAAAOg");
	this.shape_24.setTransform(26.2,107.2);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#262733").s().p("AgHArIAAhVIAPAAIAABVg");
	this.shape_25.setTransform(19.7,107.2);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#262733").s().p("AgHArIAAhGIgcAAIAAgPIBHAAIAAAPIgcAAIAABGg");
	this.shape_26.setTransform(13.5,107.2);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#262733").s().p("AgHArIAAhVIAPAAIAABVg");
	this.shape_27.setTransform(7.3,107.2);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#262733").s().p("AAVArIgrg/IAAA/IgQAAIAAhVIASAAIArA/IAAg/IAQAAIAABVg");
	this.shape_28.setTransform(-0.3,107.2);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#262733").s().p("AgaAiQgJgKAAgSIAAgxIAPAAIAAAyQAAAMAFAFQAFAFAKAAQALAAAFgFQAFgFAAgMIAAgyIAPAAIAAAxQAAASgJAKQgKAKgRAAQgQAAgKgKg");
	this.shape_29.setTransform(-10.7,107.2);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#262733").s().p("AgHArIAAhGIgcAAIAAgPIBGAAIAAAPIgbAAIAABGg");
	this.shape_30.setTransform(-19.7,107.2);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#262733").s().p("AAPArIgTgeIgOAAIAAAeIgPAAIAAhVIAgAAQAPAAAIAHQAJAHAAANQgBATgSAGIAWAhgAgSgBIARAAQAHAAAFgCQAEgDAAgIQAAgIgEgDQgFgDgHAAIgRAAg");
	this.shape_31.setTransform(-27.9,107.2);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#262733").s().p("AgLArQgFgBgFgDQgGgDgDgFQgFgEgCgIQgDgJABgKQgBgKADgIQACgIAFgFQADgEAGgDQAFgDAFgBIALgBIALABQAFABAGADQAFADAFAEQAEAFACAIQACAIABAKQgBAKgCAJQgCAIgEAEQgFAFgFADQgGADgFABIgLABIgLgBgAgHgdIgGACQgEACgCADIgDAJQgCAGAAAHQAAAKACAGQACAGADADQAFADADABIAJABIAHAAIAHgCQAEgCACgEIAEgJQABgFAAgIQAAgJgCgGQgCgHgEgDQgEgDgEgBIgJgBg");
	this.shape_32.setTransform(-38,107.2);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#262733").s().p("AggArIAAhVIAgAAQAQAAAIAHQAJAIAAAOQAAANgJAHQgIAIgQAAIgQAAIAAAcgAgQABIAQAAQAJAAAEgDQADgEABgHQgBgIgDgDQgEgEgJAAIgQAAg");
	this.shape_33.setTransform(-47.2,107.2);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#262733").s().p("AgfArIAAhVIAfAAQAPAAAJAHQAIAIAAAOQAAANgIAHQgJAIgPAAIgPAAIAAAcgAgPABIAPAAQAJAAAEgDQAEgEgBgHQABgIgEgDQgEgEgJAAIgPAAg");
	this.shape_34.setTransform(-55.9,107.2);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#262733").s().p("AgKArQgGgBgGgDQgFgDgEgFQgEgEgCgIQgDgJAAgKQAAgKADgIQACgIAEgFQAEgEAFgDQAGgDAGgBIAKgBIALABQAFABAGADQAFADAEAEQAEAFADAIQACAIAAAKQAAAKgCAJQgDAIgEAEQgEAFgFADQgGADgFABIgLABIgKgBgAgHgdIgHACQgDACgCADIgEAJQgBAGAAAHQAAAKACAGQACAGADADQAFADAEABIAIABIAIAAIAGgCQADgCADgEIAEgJQABgFAAgIQAAgJgCgGQgCgHgEgDQgEgDgEgBIgJgBg");
	this.shape_35.setTransform(-65.7,107.2);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#262733").s().p("AgiArIAAhVIAdAAQAUAAAKALQAKALAAAUQAAAVgKALQgKALgUAAgAgTAdIAOAAQANAAAGgHQAGgGAAgQQAAgPgGgHQgGgGgNAAIgOAAg");
	this.shape_36.setTransform(78,89.3);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#262733").s().p("AAVArIgrg/IAAA/IgQAAIAAhVIASAAIArA/IAAg/IAQAAIAABVg");
	this.shape_37.setTransform(67.7,89.3);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#262733").s().p("AAaArIgIgVIgjAAIgIAVIgRAAIAihVIARAAIAiBVgAANAIIgNghIgMAhIAZAAg");
	this.shape_38.setTransform(57.6,89.3);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#262733").s().p("AgcAlIAAgQQALAJAOAAQARAAAAgKQAAgFgDgDQgDgDgFgBIgKgEIgKgEQgFgBgEgFQgDgFAAgHQAAgNAJgGQAJgGAMAAQAMAAALAGIAAAPQgKgHgLAAQgGAAgFADQgFACAAAGQAAAEAEACQAFADAFABIANAFQAHACAEAFQAFAHAAAKQAAAKgJAHQgJAGgMAAQgQAAgMgHg");
	this.shape_39.setTransform(43.7,89.3);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#262733").s().p("AARArIgcglIgJAJIAAAcIgPAAIAAhVIAPAAIAAAkIAggkIAVAAIgiAmIAlAvg");
	this.shape_40.setTransform(35.2,89.3);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#262733").s().p("AgcAlIAAgQQALAJAOAAQARAAAAgKQAAgFgDgDQgDgDgFgBIgKgEIgKgEQgFgBgEgFQgDgFAAgHQAAgNAJgGQAJgGAMAAQAMAAALAGIAAAPQgKgHgLAAQgGAAgFADQgFACAAAGQAAAEAEACQAFADAFABIANAFQAHACAEAFQAFAHAAAKQAAAKgJAHQgJAGgMAAQgQAAgMgHg");
	this.shape_41.setTransform(26.1,89.3);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#262733").s().p("AgHArIAAhVIAPAAIAABVg");
	this.shape_42.setTransform(19.8,89.3);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#262733").s().p("AAQArIgUgeIgOAAIAAAeIgQAAIAAhVIAiAAQAOAAAIAHQAIAHAAANQABATgUAGIAYAhgAgSgBIARAAQAHAAAEgCQAFgDAAgIQAAgIgFgDQgEgDgHAAIgRAAg");
	this.shape_43.setTransform(13.5,89.3);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#262733").s().p("AAEAsIgKgBQgFgBgGgDQgFgDgEgEQgEgFgDgIQgCgJAAgKQAAgKACgIQADgIAEgFQADgEAGgDQAFgDAGgBIAKgBQAOAAAPAFIAAAPQgOgGgOAAIgHAAIgGADQgFACgCADQgCADgBAGQgCAFAAAHQAAAIACAFQABAGACADQACADAFACIAGADIAHAAQAIAAAIgCIAAgVIgTAAIAAgMIAjAAIAAAqQgQAHgQAAg");
	this.shape_44.setTransform(-1.1,89.3);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#262733").s().p("AAVArIgrg/IAAA/IgQAAIAAhVIASAAIArA/IAAg/IAQAAIAABVg");
	this.shape_45.setTransform(-11.2,89.3);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#262733").s().p("AgHArIAAhVIAPAAIAABVg");
	this.shape_46.setTransform(-18.7,89.3);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#262733").s().p("AgHArIAAglIgigwIATAAIAWAjIAXgjIATAAIgiAwIAAAlg");
	this.shape_47.setTransform(-25.6,89.3);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#262733").s().p("AgbArIAAhVIA3AAIAAAOIgoAAIAAAWIAiAAIAAANIgiAAIAAAkg");
	this.shape_48.setTransform(-33.7,89.3);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#262733").s().p("AgHArIAAhVIAPAAIAABVg");
	this.shape_49.setTransform(-40.2,89.3);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#262733").s().p("AgHArIAAhGIgcAAIAAgPIBHAAIAAAPIgcAAIAABGg");
	this.shape_50.setTransform(-46.4,89.3);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#262733").s().p("AAVArIgrg/IAAA/IgQAAIAAhVIASAAIArA/IAAg/IAQAAIAABVg");
	this.shape_51.setTransform(-55.7,89.3);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#262733").s().p("AgcArIAAhVIA5AAIAAAOIgpAAIAAAWIAjAAIAAANIgjAAIAAAWIApAAIAAAOg");
	this.shape_52.setTransform(-64.9,89.3);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#262733").s().p("AgiArIAAhVIAdAAQAUAAAKALQAKALAAAUQAAAVgKALQgKALgUAAgAgTAdIAOAAQANAAAGgHQAGgGAAgQQAAgPgGgHQgGgGgNAAIgOAAg");
	this.shape_53.setTransform(-73.9,89.3);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#262733").s().p("AgHArIAAhVIAPAAIAABVg");
	this.shape_54.setTransform(-81,89.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]}).wait(11));

	// 2 MONTHS
	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#333436").s().p("AgUAdIAAgHQAIAFALAAQAQAAAAgLQAAgEgDgDQgDgDgEgCIgIgDIgJgCQgDgBgDgEQgDgEAAgFQAAgHAGgGQAFgFALAAQAJAAAIAEIAAAHQgIgEgIAAQgHAAgFADQgDADAAAFQgBAEADACQADACAEABIAIADIAJADQADACAEAEQACAEAAAGQAAAJgGAEQgHAFgKAAQgKAAgJgFg");
	this.shape_55.setTransform(22.4,-41.4);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#333436").s().p("AASAhIAAgeIgjAAIAAAeIgHAAIAAhBIAHAAIAAAdIAjAAIAAgdIAHAAIAABBg");
	this.shape_56.setTransform(16.3,-41.4);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#333436").s().p("AgDAhIAAg6IgXAAIAAgHIA1AAIAAAHIgYAAIAAA6g");
	this.shape_57.setTransform(10.1,-41.4);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#333436").s().p("AAUAhIgng3IAAA3IgIAAIAAhBIAJAAIAmA3IAAg3IAIAAIAABBg");
	this.shape_58.setTransform(3.6,-41.4);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#333436").s().p("AgeAAQAAghAeAAQAfAAAAAhQAAAigfAAQgeAAAAgigAgRgUQgFAHgBANQABAOAFAHQAGAGALAAQANAAAFgGQAGgHAAgOQAAgNgGgHQgFgHgNAAQgLAAgGAHg");
	this.shape_59.setTransform(-3.7,-41.4);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#333436").s().p("AAYAhIAAg2IgYAhIgWghIAAA2IgIAAIAAhBIAIAAIAWAgIAXggIAIAAIAABBg");
	this.shape_60.setTransform(-11.4,-41.4);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#333436").s().p("AgUAiIAAgHIAKgIIAKgKQAFgGAEgGQADgGABgFQAAgMgPAAQgJAAgJAGIAAgIQAJgFAJAAQALAAAFAGQAGAFAAAIQAAAFgDAGQgCAFgFAGIgJAKIgKAJIAeAAIAAAHg");
	this.shape_61.setTransform(-21.6,-41.5);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#FFFFFF").s().p("AgUAdIAAgHQAIAFALAAQAQAAAAgLQAAgEgDgDQgDgDgEgCIgIgDIgJgCQgDgBgDgEQgDgEAAgFQAAgHAGgGQAFgFALAAQAJAAAIAEIAAAHQgIgEgIAAQgHAAgFADQgDADAAAFQgBAEADACQADACAEABIAIADIAJADQADACAEAEQACAEAAAGQAAAJgGAEQgHAFgKAAQgKAAgJgFg");
	this.shape_62.setTransform(22.4,-41.4);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#FFFFFF").s().p("AASAhIAAgeIgjAAIAAAeIgHAAIAAhBIAHAAIAAAdIAjAAIAAgdIAHAAIAABBg");
	this.shape_63.setTransform(16.3,-41.4);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#FFFFFF").s().p("AgDAhIAAg6IgXAAIAAgHIA1AAIAAAHIgYAAIAAA6g");
	this.shape_64.setTransform(10.1,-41.4);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#FFFFFF").s().p("AAUAhIgng3IAAA3IgIAAIAAhBIAJAAIAmA3IAAg3IAIAAIAABBg");
	this.shape_65.setTransform(3.6,-41.4);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#FFFFFF").s().p("AgeAAQAAghAeAAQAfAAAAAhQAAAigfAAQgeAAAAgigAgRgUQgFAHgBANQABAOAFAHQAGAGALAAQANAAAFgGQAGgHAAgOQAAgNgGgHQgFgHgNAAQgLAAgGAHg");
	this.shape_66.setTransform(-3.7,-41.4);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#FFFFFF").s().p("AAYAhIAAg2IgYAhIgWghIAAA2IgIAAIAAhBIAIAAIAWAgIAXggIAIAAIAABBg");
	this.shape_67.setTransform(-11.4,-41.4);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#FFFFFF").s().p("AgUAiIAAgHIAKgIIAKgKQAFgGAEgGQADgGABgFQAAgMgPAAQgJAAgJAGIAAgIQAJgFAJAAQALAAAFAGQAGAFAAAIQAAAFgDAGQgCAFgFAGIgJAKIgKAJIAeAAIAAAHg");
	this.shape_68.setTransform(-21.6,-41.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55}]}).to({state:[{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62}]},5).to({state:[{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55}]},5).wait(1));

	// STEP 3
	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#262733").s().p("AgcAmIAAgQQAMAHAMAAQARAAAAgMQAAgFgEgEQgEgEgKAAIgLAAIAAgMIAMAAQAGAAAEgDQADgDAAgEQAAgFgEgCQgFgCgFAAQgLgBgKAGIAAgQQAMgGAKABQAMAAAIAFQAJAHAAANQAAAKgLAFQAHADAEAEQAEAGAAAHQAAAHgCAEQgCAFgEADQgDADgEACIgJADIgIABQgNAAgMgHg");
	this.shape_69.setTransform(19.8,-56);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#262733").s().p("AggArIAAhVIAgAAQAPAAAJAHQAJAIgBAOQABANgJAHQgJAIgPAAIgQAAIAAAcgAgQABIAQAAQAJAAAEgDQAEgEAAgHQAAgIgEgDQgEgEgJAAIgQAAg");
	this.shape_70.setTransform(6.6,-56);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#262733").s().p("AgcArIAAhVIA5AAIAAAOIgpAAIAAAWIAjAAIAAANIgjAAIAAAWIApAAIAAAOg");
	this.shape_71.setTransform(-1.9,-56);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#262733").s().p("AgGArIAAhGIgcAAIAAgPIBGAAIAAAPIgcAAIAABGg");
	this.shape_72.setTransform(-10.2,-56);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#262733").s().p("AgcAlIAAgQQALAJAOAAQARAAAAgKQAAgFgDgDQgDgDgFgBIgKgEIgKgEQgFgBgEgFQgDgFAAgHQAAgNAJgGQAJgGAMAAQAMAAALAGIAAAPQgKgHgLAAQgGAAgFADQgFACAAAGQAAAEAEACQAFADAFABIANAFQAHACAEAFQAFAHAAAKQAAAKgJAHQgJAGgMAAQgQAAgMgHg");
	this.shape_73.setTransform(-18.3,-56);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#FFFFFF").s().p("AgcAmIAAgQQAMAHAMAAQARAAAAgMQAAgFgEgEQgEgEgKAAIgLAAIAAgMIAMAAQAGAAAEgDQADgDAAgEQAAgFgEgCQgFgCgFAAQgLgBgKAGIAAgQQAMgGAKABQAMAAAIAFQAJAHAAANQAAAKgLAFQAHADAEAEQAEAGAAAHQAAAHgCAEQgCAFgEADQgDADgEACIgJADIgIABQgNAAgMgHg");
	this.shape_74.setTransform(19.8,-56);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#FFFFFF").s().p("AggArIAAhVIAgAAQAPAAAJAHQAJAIgBAOQABANgJAHQgJAIgPAAIgQAAIAAAcgAgQABIAQAAQAJAAAEgDQAEgEAAgHQAAgIgEgDQgEgEgJAAIgQAAg");
	this.shape_75.setTransform(6.6,-56);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#FFFFFF").s().p("AgcArIAAhVIA5AAIAAAOIgpAAIAAAWIAjAAIAAANIgjAAIAAAWIApAAIAAAOg");
	this.shape_76.setTransform(-1.9,-56);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#FFFFFF").s().p("AgGArIAAhGIgcAAIAAgPIBGAAIAAAPIgcAAIAABGg");
	this.shape_77.setTransform(-10.2,-56);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#FFFFFF").s().p("AgcAlIAAgQQALAJAOAAQARAAAAgKQAAgFgDgDQgDgDgFgBIgKgEIgKgEQgFgBgEgFQgDgFAAgHQAAgNAJgGQAJgGAMAAQAMAAALAGIAAAPQgKgHgLAAQgGAAgFADQgFACAAAGQAAAEAEACQAFADAFABIANAFQAHACAEAFQAFAHAAAKQAAAKgJAHQgJAGgMAAQgQAAgMgHg");
	this.shape_78.setTransform(-18.3,-56);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69}]}).to({state:[{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74}]},5).to({state:[{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69}]},5).wait(1));

	// steps-shape
	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f().s("#3F3B4F").ss(5).p("AInl1In4klQgVgNgZAAQgZAAgVANIn4ElQgWAMgNAWQgNAWAAAZIAAJJQAAAZANAWQANAWAWAMIH4EmQAUAMAaAAQAaAAAUgMIH4kmQAWgMAMgWQANgWAAgZIAApJQAAgZgNgWQgMgWgWgMg");
	this.shape_79.setTransform(0.5,-51.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_79).wait(11));

	// Layer 7
	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#FFFFFF").s().p("AguKcIn4kmQgVgMgNgWQgNgWAAgZIAApJQAAgZANgVQANgXAVgMIH4klQAWgNAZAAQAYAAAWANIH4ElQAWAMAMAXQANAVAAAZIAAJJQAAAZgNAWQgMAWgWAMIn4EmQgVAMgZAAQgaAAgVgMg");
	this.shape_80.setTransform(0.5,-51.5);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#D9D8DC").s().p("AguKbIn4kkQgVgNgNgWQgNgWAAgZIAApIQAAgaANgVQANgXAVgMIH4klQAWgNAZAAQAYAAAWANIH4ElQAWAMAMAXQANAVAAAaIAAJIQAAAZgNAWQgMAWgWANIn4EkQgVANgZAAQgaAAgVgNg");
	this.shape_81.setTransform(0.5,-51.5);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#B2B1B9").s().p("AguKbIn4kkQgVgNgNgWQgNgWAAgZIAApIQAAgaANgVQANgXAVgMIH4klQAWgNAZAAQAYAAAWANIH4ElQAWAMAMAXQANAVAAAaIAAJIQAAAZgNAWQgMAWgWANIn4EkQgVANgZAAQgaAAgVgNg");
	this.shape_82.setTransform(0.5,-51.5);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#8C8995").s().p("AguKbIn4kkQgVgNgNgWQgNgWAAgZIAApIQAAgaANgVQANgXAVgMIH4klQAWgNAZAAQAYAAAWANIH4ElQAWAMAMAXQANAVAAAaIAAJIQAAAZgNAWQgMAWgWANIn4EkQgVANgZAAQgaAAgVgNg");
	this.shape_83.setTransform(0.5,-51.5);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#656272").s().p("AguKbIn4kkQgVgNgNgWQgNgWAAgZIAApIQAAgaANgVQANgXAVgMIH4klQAWgNAZAAQAYAAAWANIH4ElQAWAMAMAXQANAVAAAaIAAJIQAAAZgNAWQgMAWgWANIn4EkQgVANgZAAQgaAAgVgNg");
	this.shape_84.setTransform(0.5,-51.5);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#3F3B4F").s().p("AguKcIn4kmQgVgMgNgWQgNgWAAgZIAApJQAAgZANgVQANgXAVgMIH4klQAWgNAZAAQAYAAAWANIH4ElQAWAMAMAXQANAVAAAZIAAJJQAAAZgNAWQgMAWgWAMIn4EmQgVAMgZAAQgaAAgVgMg");
	this.shape_85.setTransform(0.5,-51.5);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#FFFFFF").s().p("AguKbIn4kkQgVgNgNgWQgMgWAAgZIAApIQAAgZAMgXQANgVAVgNIH4klQAWgNAYAAQAZAAAWANIH4ElQAWANAMAVQANAWAAAaIAAJIQAAAagNAVQgMAWgWANIn4EkQgVANgaAAQgZAAgVgNg");
	this.shape_86.setTransform(0.5,-51.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_80}]}).to({state:[{t:this.shape_81}]},1).to({state:[{t:this.shape_82}]},1).to({state:[{t:this.shape_83}]},1).to({state:[{t:this.shape_84}]},1).to({state:[{t:this.shape_85}]},1).to({state:[{t:this.shape_84}]},1).to({state:[{t:this.shape_83}]},1).to({state:[{t:this.shape_82}]},1).to({state:[{t:this.shape_81}]},1).to({state:[{t:this.shape_86}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-87.2,-122,174.5,274.1);


(lib.Step2diagram = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_39 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(39).call(this.frame_39).wait(1));

	// SD-2-1
	this.instance = new lib.SD21();
	this.instance.parent = this;
	this.instance.setTransform(-350,-76.8,0.01,0.01,0,0,0,-5,0);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:-2.9,regY:-0.1,scaleX:1.2,scaleY:1.2,alpha:1},10).to({regX:0,regY:0,scaleX:1,scaleY:1,x:-349.9},5).wait(25));

	// SD-2-2-2
	this.instance_1 = new lib.SD222();
	this.instance_1.parent = this;
	this.instance_1.setTransform(99.7,8.2,0.01,0.013,0,0,0,5,0);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(4).to({_off:false},0).to({regX:0,scaleX:1.2,scaleY:1.2,x:99.6,alpha:1},10).to({scaleX:1,scaleY:1,x:99.7},5).wait(21));

	// SD-2-2
	this.instance_2 = new lib.SD22();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-50,-76.8,0.01,0.01);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(9).to({_off:false},0).to({scaleX:1.2,scaleY:1.2,alpha:1},10).to({scaleX:1,scaleY:1},5).wait(16));

	// SD-2-3
	this.instance_3 = new lib.SD23();
	this.instance_3.parent = this;
	this.instance_3.setTransform(253,-67.9,0.01,0.01,0,0,0,5,-5);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(14).to({_off:false},0).to({regX:-0.7,regY:-0.8,scaleX:1.2,scaleY:1.2,alpha:1},10).to({scaleX:1,scaleY:1},5).wait(11));

	// SD-2-4
	this.instance_4 = new lib.SD24();
	this.instance_4.parent = this;
	this.instance_4.setTransform(250.3,152.5,0.01,0.01);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(19).to({_off:false},0).to({regX:0.1,regY:-0.7,scaleX:1.2,scaleY:1.2,alpha:1},10).to({scaleX:1,scaleY:1},5).wait(6));

	// SD-2-5
	this.instance_5 = new lib.SD25();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-50,152.5,0.01,0.01,0,0,0,-5,0);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(24).to({_off:false},0).to({regX:-0.1,regY:-0.7,scaleX:1.2,scaleY:1.2,alpha:1},10).to({scaleX:1,scaleY:1},5).wait(1));

	// Maska copy 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_29 = new cjs.Graphics().p("AnmCUIAAknIPNAAIAAEng");
	var mask_graphics_30 = new cjs.Graphics().p("AnmFlIAArKIPNAAIAALKg");
	var mask_graphics_31 = new cjs.Graphics().p("AnmI3IAAxuIPNAAIAARug");
	var mask_graphics_32 = new cjs.Graphics().p("AnmMJIAA4SIPNAAIAAYSg");
	var mask_graphics_33 = new cjs.Graphics().p("AnmPcIAA+3IPNAAIAAe3g");
	var mask_graphics_34 = new cjs.Graphics().p("AnmStMAAAglZIPNAAMAAAAlZg");
	var mask_graphics_35 = new cjs.Graphics().p("AuLStMAAAglZIcXAAMAAAAlZg");
	var mask_graphics_36 = new cjs.Graphics().p("A0vStMAAAglZMApfAAAMAAAAlZg");
	var mask_graphics_37 = new cjs.Graphics().p("A7UStMAAAglZMA2pAAAMAAAAlZg");
	var mask_graphics_38 = new cjs.Graphics().p("Egh5AStMAAAglZMBDzAAAMAAAAlZg");
	var mask_graphics_39 = new cjs.Graphics().p("EgoeAStMAAAglZMBQ9AAAMAAAAlZg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(29).to({graphics:mask_graphics_29,x:438.7,y:-74.3}).wait(1).to({graphics:mask_graphics_30,x:438.7,y:-53.3}).wait(1).to({graphics:mask_graphics_31,x:438.7,y:-32.3}).wait(1).to({graphics:mask_graphics_32,x:438.7,y:-11.4}).wait(1).to({graphics:mask_graphics_33,x:438.7,y:9.6}).wait(1).to({graphics:mask_graphics_34,x:438.7,y:30.6}).wait(1).to({graphics:mask_graphics_35,x:396.6,y:30.6}).wait(1).to({graphics:mask_graphics_36,x:354.5,y:30.6}).wait(1).to({graphics:mask_graphics_37,x:312.5,y:30.6}).wait(1).to({graphics:mask_graphics_38,x:270.4,y:30.6}).wait(1).to({graphics:mask_graphics_39,x:228.3,y:30.6}).wait(1));

	// Linia copy 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#2FB7AA").s().p("AgYRCMAAAgiDIAxAAMAAAAiDg");
	this.shape.setTransform(432.5,34.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#2FB7AA").s().p("AldAZIAAgxIK7AAIAAAxg");
	this.shape_1.setTransform(249.9,143.7,5.291,1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#2FB7AA").s().p("AldAZIAAgxIK7AAIAAAxg");
	this.shape_2.setTransform(400,-76.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#2FB7AA").s().p("AldAZIAAgxIK7AAIAAAxg");
	this.shape_3.setTransform(99.7,143.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#2FB7AA").s().p("AldAZIAAgxIK7AAIAAAxg");
	this.shape_4.setTransform(99.7,-76.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#2FB7AA").s().p("AgYC7IAAl1IAxAAIAAF1g");
	this.shape_5.setTransform(-150,-229);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#2FB7AA").s().p("AgYC7IAAl1IAxAAIAAF1g");
	this.shape_6.setTransform(-350.2,-146,1,3.693);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#2FB7AA").s().p("AwCAZIAAgxMAgFAAAIAAAxg");
	this.shape_7.setTransform(-250.1,-212.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#2FB7AA").s().p("AldAZIAAgxIK7AAIAAAxg");
	this.shape_8.setTransform(25.1,-76.8,10.713,1);

	var maskedShapeInstanceList = [this.shape,this.shape_1,this.shape_2,this.shape_3,this.shape_4,this.shape_5,this.shape_6,this.shape_7,this.shape_8];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},29).wait(11));

	// Maska copy (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_13 = new cjs.Graphics().p("AiTHnIAAvNIEnAAIAAPNg");
	var mask_1_graphics_14 = new cjs.Graphics().p("AmWHnIAAvNIMtAAIAAPNg");
	var mask_1_graphics_15 = new cjs.Graphics().p("AqaHnIAAvNIU1AAIAAPNg");
	var mask_1_graphics_16 = new cjs.Graphics().p("AueHnIAAvNIc9AAIAAPNg");
	var mask_1_graphics_17 = new cjs.Graphics().p("AyiHnIAAvNMAlFAAAIAAPNg");
	var mask_1_graphics_18 = new cjs.Graphics().p("A2lHnIAAvNMAtLAAAIAAPNg");
	var mask_1_graphics_19 = new cjs.Graphics().p("A6pHnIAAvNMA1TAAAIAAPNg");
	var mask_1_graphics_20 = new cjs.Graphics().p("A+tHnIAAvNMA9bAAAIAAPNg");
	var mask_1_graphics_21 = new cjs.Graphics().p("EgixAHnIAAvNMBFjAAAIAAPNg");
	var mask_1_graphics_22 = new cjs.Graphics().p("Egm0AHnIAAvNMBNpAAAIAAPNg");
	var mask_1_graphics_23 = new cjs.Graphics().p("Egq4AHnIAAvNMBVxAAAIAAPNg");
	var mask_1_graphics_24 = new cjs.Graphics().p("Egu8AHnIAAvNMBd5AAAIAAPNg");
	var mask_1_graphics_25 = new cjs.Graphics().p("Egy/AHnIAAvNMBl/AAAIAAPNg");
	var mask_1_graphics_26 = new cjs.Graphics().p("Eg3DAHnIAAvNMBuHAAAIAAPNg");
	var mask_1_graphics_27 = new cjs.Graphics().p("Eg7HAHnIAAvNMB2PAAAIAAPNg");
	var mask_1_graphics_28 = new cjs.Graphics().p("Eg/LAHnIAAvNMB+XAAAIAAPNg");
	var mask_1_graphics_29 = new cjs.Graphics().p("EhDOAHnIAAvNMCGeAAAIAAPNg");
	var mask_1_graphics_30 = new cjs.Graphics().p("EhDOAHnIAAvNMCGeAAAIAAPNg");
	var mask_1_graphics_31 = new cjs.Graphics().p("EhDOAHnIAAvNMCGeAAAIAAPNg");
	var mask_1_graphics_32 = new cjs.Graphics().p("EhDOAHnIAAvNMCGeAAAIAAPNg");
	var mask_1_graphics_33 = new cjs.Graphics().p("EhDOAHnIAAvNMCGeAAAIAAPNg");
	var mask_1_graphics_34 = new cjs.Graphics().p("EhDOAHnIAAvNMCGeAAAIAAPNg");
	var mask_1_graphics_35 = new cjs.Graphics().p("EhDOAHnIAAvNMCGeAAAIAAPNg");
	var mask_1_graphics_36 = new cjs.Graphics().p("EhDOAHnIAAvNMCGeAAAIAAPNg");
	var mask_1_graphics_37 = new cjs.Graphics().p("EhDOAHnIAAvNMCGeAAAIAAPNg");
	var mask_1_graphics_38 = new cjs.Graphics().p("EhDOAHnIAAvNMCGeAAAIAAPNg");
	var mask_1_graphics_39 = new cjs.Graphics().p("EhDOAHnIAAvNMCGeAAAIAAPNg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(13).to({graphics:mask_1_graphics_13,x:-407.3,y:-123}).wait(1).to({graphics:mask_1_graphics_14,x:-381.3,y:-123}).wait(1).to({graphics:mask_1_graphics_15,x:-355.3,y:-123}).wait(1).to({graphics:mask_1_graphics_16,x:-329.3,y:-123}).wait(1).to({graphics:mask_1_graphics_17,x:-303.4,y:-123}).wait(1).to({graphics:mask_1_graphics_18,x:-277.4,y:-123}).wait(1).to({graphics:mask_1_graphics_19,x:-251.4,y:-123}).wait(1).to({graphics:mask_1_graphics_20,x:-225.4,y:-123}).wait(1).to({graphics:mask_1_graphics_21,x:-199.5,y:-123}).wait(1).to({graphics:mask_1_graphics_22,x:-173.5,y:-123}).wait(1).to({graphics:mask_1_graphics_23,x:-147.5,y:-123}).wait(1).to({graphics:mask_1_graphics_24,x:-121.6,y:-123}).wait(1).to({graphics:mask_1_graphics_25,x:-95.6,y:-123}).wait(1).to({graphics:mask_1_graphics_26,x:-69.6,y:-123}).wait(1).to({graphics:mask_1_graphics_27,x:-43.6,y:-123}).wait(1).to({graphics:mask_1_graphics_28,x:-17.7,y:-123}).wait(1).to({graphics:mask_1_graphics_29,x:8.3,y:-123}).wait(1).to({graphics:mask_1_graphics_30,x:8.3,y:-123}).wait(1).to({graphics:mask_1_graphics_31,x:8.3,y:-123}).wait(1).to({graphics:mask_1_graphics_32,x:8.3,y:-123}).wait(1).to({graphics:mask_1_graphics_33,x:8.3,y:-123}).wait(1).to({graphics:mask_1_graphics_34,x:8.3,y:-123}).wait(1).to({graphics:mask_1_graphics_35,x:8.3,y:-123}).wait(1).to({graphics:mask_1_graphics_36,x:8.3,y:-123}).wait(1).to({graphics:mask_1_graphics_37,x:8.3,y:-123}).wait(1).to({graphics:mask_1_graphics_38,x:8.3,y:-123}).wait(1).to({graphics:mask_1_graphics_39,x:8.3,y:-123}).wait(1));

	// Linia copy
	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#2FB7AA").s().p("AgYRCMAAAgiDIAxAAMAAAAiDg");
	this.shape_9.setTransform(432.5,34.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#2FB7AA").s().p("AldAZIAAgxIK7AAIAAAxg");
	this.shape_10.setTransform(249.9,143.7,5.291,1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#2FB7AA").s().p("AldAZIAAgxIK7AAIAAAxg");
	this.shape_11.setTransform(400,-76.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#2FB7AA").s().p("AldAZIAAgxIK7AAIAAAxg");
	this.shape_12.setTransform(99.7,143.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#2FB7AA").s().p("AldAZIAAgxIK7AAIAAAxg");
	this.shape_13.setTransform(99.7,-76.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#2FB7AA").s().p("AgYC7IAAl1IAxAAIAAF1g");
	this.shape_14.setTransform(-150,-229);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#2FB7AA").s().p("AgYC7IAAl1IAxAAIAAF1g");
	this.shape_15.setTransform(-350.2,-146,1,3.693);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#2FB7AA").s().p("AwCAZIAAgxMAgFAAAIAAAxg");
	this.shape_16.setTransform(-250.1,-212.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#2FB7AA").s().p("AldAZIAAgxIK7AAIAAAxg");
	this.shape_17.setTransform(25.1,-76.8,10.713,1);

	var maskedShapeInstanceList = [this.shape_9,this.shape_10,this.shape_11,this.shape_12,this.shape_13,this.shape_14,this.shape_15,this.shape_16,this.shape_17];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9}]},13).wait(27));

	// Maska (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	var mask_2_graphics_5 = new cjs.Graphics().p("AnmCUIAAknIPNAAIAAEng");
	var mask_2_graphics_6 = new cjs.Graphics().p("ApUDPIAAmdISpAAIAAGdg");
	var mask_2_graphics_7 = new cjs.Graphics().p("ArDEKIAAoTIWHAAIAAITg");
	var mask_2_graphics_8 = new cjs.Graphics().p("AsyFFIAAqJIZlAAIAAKJg");
	var mask_2_graphics_9 = new cjs.Graphics().p("AuhGAIAAr/IdDAAIAAL/g");
	var mask_2_graphics_10 = new cjs.Graphics().p("AwQG7IAAt1MAghAAAIAAN1g");
	var mask_2_graphics_11 = new cjs.Graphics().p("Ax/H2IAAvrMAj/AAAIAAPrg");
	var mask_2_graphics_12 = new cjs.Graphics().p("AztIyIAAxjMAnbAAAIAARjg");
	var mask_2_graphics_13 = new cjs.Graphics().p("A1cJsIAAzYMAq5AAAIAATYg");
	var mask_2_graphics_14 = new cjs.Graphics().p("A3LKoIAA1PMAuXAAAIAAVPg");
	var mask_2_graphics_15 = new cjs.Graphics().p("A46LjIAA3FMAx1AAAIAAXFg");
	var mask_2_graphics_16 = new cjs.Graphics().p("A6pMeIAA47MA1TAAAIAAY7g");
	var mask_2_graphics_17 = new cjs.Graphics().p("A8YNZIAA6xMA4xAAAIAAaxg");
	var mask_2_graphics_18 = new cjs.Graphics().p("A+HOUIAA8nMA8OAAAIAAcng");
	var mask_2_graphics_19 = new cjs.Graphics().p("A+HOUIAA8nMA8OAAAIAAcng");
	var mask_2_graphics_20 = new cjs.Graphics().p("A+HOUIAA8nMA8OAAAIAAcng");
	var mask_2_graphics_21 = new cjs.Graphics().p("A+HOUIAA8nMA8OAAAIAAcng");
	var mask_2_graphics_22 = new cjs.Graphics().p("A+HOUIAA8nMA8OAAAIAAcng");
	var mask_2_graphics_23 = new cjs.Graphics().p("A+HOUIAA8nMA8OAAAIAAcng");
	var mask_2_graphics_24 = new cjs.Graphics().p("A+HOUIAA8nMA8OAAAIAAcng");
	var mask_2_graphics_25 = new cjs.Graphics().p("A+HOUIAA8nMA8OAAAIAAcng");
	var mask_2_graphics_26 = new cjs.Graphics().p("A+HOUIAA8nMA8OAAAIAAcng");
	var mask_2_graphics_27 = new cjs.Graphics().p("A+HOUIAA8nMA8OAAAIAAcng");
	var mask_2_graphics_28 = new cjs.Graphics().p("A+HOUIAA8nMA8OAAAIAAcng");
	var mask_2_graphics_29 = new cjs.Graphics().p("A+HOUIAA8nMA8OAAAIAAcng");
	var mask_2_graphics_30 = new cjs.Graphics().p("A+HOUIAA8nMA8OAAAIAAcng");
	var mask_2_graphics_31 = new cjs.Graphics().p("A+HOUIAA8nMA8OAAAIAAcng");
	var mask_2_graphics_32 = new cjs.Graphics().p("A+HOUIAA8nMA8OAAAIAAcng");
	var mask_2_graphics_33 = new cjs.Graphics().p("A+HOUIAA8nMA8OAAAIAAcng");
	var mask_2_graphics_34 = new cjs.Graphics().p("A+HOUIAA8nMA8OAAAIAAcng");
	var mask_2_graphics_35 = new cjs.Graphics().p("A+HOUIAA8nMA8OAAAIAAcng");
	var mask_2_graphics_36 = new cjs.Graphics().p("A+HOUIAA8nMA8OAAAIAAcng");
	var mask_2_graphics_37 = new cjs.Graphics().p("A+HOUIAA8nMA8OAAAIAAcng");
	var mask_2_graphics_38 = new cjs.Graphics().p("A+HOUIAA8nMA8OAAAIAAcng");
	var mask_2_graphics_39 = new cjs.Graphics().p("A+HOUIAA8nMA8OAAAIAAcng");

	this.timeline.addTween(cjs.Tween.get(mask_2).to({graphics:null,x:0,y:0}).wait(5).to({graphics:mask_2_graphics_5,x:-149.6,y:-272.6}).wait(1).to({graphics:mask_2_graphics_6,x:-160.7,y:-266.7}).wait(1).to({graphics:mask_2_graphics_7,x:-171.8,y:-260.8}).wait(1).to({graphics:mask_2_graphics_8,x:-182.9,y:-254.9}).wait(1).to({graphics:mask_2_graphics_9,x:-193.9,y:-249}).wait(1).to({graphics:mask_2_graphics_10,x:-205,y:-243.1}).wait(1).to({graphics:mask_2_graphics_11,x:-216.1,y:-237.2}).wait(1).to({graphics:mask_2_graphics_12,x:-227.2,y:-231.3}).wait(1).to({graphics:mask_2_graphics_13,x:-238.3,y:-225.4}).wait(1).to({graphics:mask_2_graphics_14,x:-249.4,y:-219.5}).wait(1).to({graphics:mask_2_graphics_15,x:-260.4,y:-213.6}).wait(1).to({graphics:mask_2_graphics_16,x:-271.5,y:-207.7}).wait(1).to({graphics:mask_2_graphics_17,x:-282.6,y:-201.7}).wait(1).to({graphics:mask_2_graphics_18,x:-293.7,y:-195.8}).wait(1).to({graphics:mask_2_graphics_19,x:-293.7,y:-195.8}).wait(1).to({graphics:mask_2_graphics_20,x:-293.7,y:-195.8}).wait(1).to({graphics:mask_2_graphics_21,x:-293.7,y:-195.8}).wait(1).to({graphics:mask_2_graphics_22,x:-293.7,y:-195.8}).wait(1).to({graphics:mask_2_graphics_23,x:-293.7,y:-195.8}).wait(1).to({graphics:mask_2_graphics_24,x:-293.7,y:-195.8}).wait(1).to({graphics:mask_2_graphics_25,x:-293.7,y:-195.8}).wait(1).to({graphics:mask_2_graphics_26,x:-293.7,y:-195.8}).wait(1).to({graphics:mask_2_graphics_27,x:-293.7,y:-195.8}).wait(1).to({graphics:mask_2_graphics_28,x:-293.7,y:-195.8}).wait(1).to({graphics:mask_2_graphics_29,x:-293.7,y:-195.8}).wait(1).to({graphics:mask_2_graphics_30,x:-293.7,y:-195.8}).wait(1).to({graphics:mask_2_graphics_31,x:-293.7,y:-195.8}).wait(1).to({graphics:mask_2_graphics_32,x:-293.7,y:-195.8}).wait(1).to({graphics:mask_2_graphics_33,x:-293.7,y:-195.8}).wait(1).to({graphics:mask_2_graphics_34,x:-293.7,y:-195.8}).wait(1).to({graphics:mask_2_graphics_35,x:-293.7,y:-195.8}).wait(1).to({graphics:mask_2_graphics_36,x:-293.7,y:-195.8}).wait(1).to({graphics:mask_2_graphics_37,x:-293.7,y:-195.8}).wait(1).to({graphics:mask_2_graphics_38,x:-293.7,y:-195.8}).wait(1).to({graphics:mask_2_graphics_39,x:-293.7,y:-195.8}).wait(1));

	// Linia
	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#2FB7AA").s().p("AgYRCMAAAgiDIAxAAMAAAAiDg");
	this.shape_18.setTransform(432.5,34.7);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#2FB7AA").s().p("AldAZIAAgxIK7AAIAAAxg");
	this.shape_19.setTransform(249.9,143.7,5.291,1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#2FB7AA").s().p("AldAZIAAgxIK7AAIAAAxg");
	this.shape_20.setTransform(400,-76.8);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#2FB7AA").s().p("AldAZIAAgxIK7AAIAAAxg");
	this.shape_21.setTransform(99.7,143.7);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#2FB7AA").s().p("AldAZIAAgxIK7AAIAAAxg");
	this.shape_22.setTransform(99.7,-76.8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#2FB7AA").s().p("AgYC7IAAl1IAxAAIAAF1g");
	this.shape_23.setTransform(-150,-229);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#2FB7AA").s().p("AgYC7IAAl1IAxAAIAAF1g");
	this.shape_24.setTransform(-350.2,-146,1,3.693);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#2FB7AA").s().p("AwCAZIAAgxMAgFAAAIAAAxg");
	this.shape_25.setTransform(-250.1,-212.8);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#2FB7AA").s().p("AldAZIAAgxIK7AAIAAAxg");
	this.shape_26.setTransform(25.1,-76.8,10.713,1);

	var maskedShapeInstanceList = [this.shape_18,this.shape_19,this.shape_20,this.shape_21,this.shape_22,this.shape_23,this.shape_24,this.shape_25,this.shape_26];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18}]},5).wait(35));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-351.1,-78,2.4,2.4);


(lib.STEP2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_5 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(5).call(this.frame_5).wait(6));

	// Layer 7
	this.hoverSpace = new lib.hoverSpace();
	this.hoverSpace.parent = this;
	this.hoverSpace.setTransform(0.5,-51.5);
	this.hoverSpace.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.hoverSpace).wait(11));

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#2FB7AA").s().p("AhVBXQgkgkAAgzQAAgxAkglQAjgjAygBQAzABAkAjQAkAlAAAxQAAAzgkAkQgkAkgzgBQgyABgjgkg");
	this.shape.setTransform(0,55.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(11));

	// LINKING IMPLICATIONS TO NATIONAL EVIDENCE
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#262733").s().p("AgcArIAAhVIA5AAIAAAOIgpAAIAAAWIAjAAIAAANIgjAAIAAAWIApAAIAAAOg");
	this.shape_1.setTransform(79.1,107.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#262733").s().p("AgDAsQgGgBgFgEQgGgDgDgEQgEgFgDgIQgCgJAAgKQAAgJACgJQADgIAEgEQADgGAGgCQAFgEAGgBIAKgBQANABANAFIAAAOQgMgFgMAAQgGAAgDABQgFABgEADQgEACgCAHQgCAGAAAJQAAAJACAHQACAHAEADQAEACAFABIAJABQAMABAMgGIAAAOQgNAGgNgBIgKAAg");
	this.shape_2.setTransform(70.4,107.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#262733").s().p("AAVArIgrg/IAAA/IgQAAIAAhVIASAAIArA/IAAg/IAQAAIAABVg");
	this.shape_3.setTransform(60.7,107.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#262733").s().p("AgcArIAAhVIA5AAIAAAOIgpAAIAAAWIAjAAIAAANIgjAAIAAAWIApAAIAAAOg");
	this.shape_4.setTransform(51.5,107.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#262733").s().p("AgiArIAAhVIAdAAQAUAAAKALQAKALAAAUQAAAVgKALQgKALgUAAgAgTAdIAOAAQANAAAGgHQAGgGAAgQQAAgPgGgHQgGgGgNAAIgOAAg");
	this.shape_5.setTransform(42.5,107.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#262733").s().p("AgHArIAAhVIAPAAIAABVg");
	this.shape_6.setTransform(35.4,107.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#262733").s().p("AgHArIghhVIAQAAIAYBCIAZhCIAQAAIghBVg");
	this.shape_7.setTransform(28.6,107.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#262733").s().p("AgcArIAAhVIA5AAIAAAOIgpAAIAAAWIAjAAIAAANIgjAAIAAAWIApAAIAAAOg");
	this.shape_8.setTransform(20.1,107.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#262733").s().p("AgcArIAAhVIAQAAIAABHIAoAAIAAAOg");
	this.shape_9.setTransform(7.5,107.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#262733").s().p("AAaArIgIgVIgjAAIgIAVIgRAAIAihVIARAAIAiBVgAANAIIgNghIgMAhIAZAAg");
	this.shape_10.setTransform(-1.7,107.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#262733").s().p("AAVArIgrg/IAAA/IgQAAIAAhVIASAAIArA/IAAg/IAQAAIAABVg");
	this.shape_11.setTransform(-11.9,107.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#262733").s().p("AgLArQgFgBgGgDQgFgDgEgFQgDgEgDgIQgCgJgBgKQABgKACgIQADgIADgFQAEgEAFgDQAGgDAFgBIALgBIALABQAGABAFADQAGADADAEQAEAFADAIQADAIgBAKQABAKgDAJQgDAIgEAEQgDAFgGADQgFADgGABIgLABIgLgBgAgGgdIgIACQgDACgCADIgEAJQgBAGAAAHQAAAKACAGQACAGAEADQADADAFABIAIABIAHAAIAHgCQADgCADgEIADgJQACgFAAgIQAAgJgCgGQgCgHgEgDQgDgDgEgBIgKgBg");
	this.shape_12.setTransform(-22.4,107.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#262733").s().p("AgHArIAAhVIAPAAIAABVg");
	this.shape_13.setTransform(-29.7,107.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#262733").s().p("AgHArIAAhGIgcAAIAAgPIBGAAIAAAPIgbAAIAABGg");
	this.shape_14.setTransform(-35.9,107.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#262733").s().p("AAaArIgIgVIgjAAIgIAVIgRAAIAihVIARAAIAiBVgAANAIIgNghIgMAhIAZAAg");
	this.shape_15.setTransform(-44.8,107.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#262733").s().p("AAVArIgrg/IAAA/IgQAAIAAhVIASAAIArA/IAAg/IAQAAIAABVg");
	this.shape_16.setTransform(-55,107.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#262733").s().p("AgLArQgFgBgGgDQgFgDgEgFQgEgEgCgIQgCgJgBgKQABgKACgIQACgIAEgFQAEgEAFgDQAGgDAFgBIALgBIALABQAFABAGADQAFADAEAEQAFAFACAIQADAIgBAKQABAKgDAJQgCAIgFAEQgEAFgFADQgGADgFABIgLABIgLgBgAgGgdIgIACQgDACgCADIgEAJQgBAGAAAHQAAAKACAGQACAGAEADQADADAFABIAIABIAIAAIAGgCQADgCADgEIADgJQACgFAAgIQAAgJgCgGQgCgHgEgDQgDgDgEgBIgKgBg");
	this.shape_17.setTransform(-70.4,107.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#262733").s().p("AgHArIAAhGIgcAAIAAgPIBGAAIAAAPIgbAAIAABGg");
	this.shape_18.setTransform(-79.6,107.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#262733").s().p("AgcAlIAAgQQALAJAOAAQARAAAAgKQAAgFgDgDQgDgDgFgBIgKgEIgKgEQgFgBgEgFQgDgFAAgHQAAgNAJgGQAJgGAMAAQAMAAALAGIAAAPQgKgHgLAAQgGAAgFADQgFACAAAGQAAAEAEACQAFADAFABIANAFQAHACAEAFQAFAHAAAKQAAAKgJAHQgJAGgMAAQgQAAgMgHg");
	this.shape_19.setTransform(74.8,89.3);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#262733").s().p("AAVArIgrg/IAAA/IgQAAIAAhVIASAAIArA/IAAg/IAQAAIAABVg");
	this.shape_20.setTransform(65.4,89.3);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#262733").s().p("AgLArQgFgBgGgDQgFgDgEgFQgDgEgDgIQgCgJgBgKQABgKACgIQADgIADgFQAEgEAFgDQAGgDAFgBIALgBIALABQAGABAFADQAGADADAEQAEAFADAIQACAIABAKQgBAKgCAJQgDAIgEAEQgDAFgGADQgFADgGABIgLABIgLgBgAgGgdIgHACQgEACgCADIgDAJQgCAGAAAHQAAAKACAGQACAGAEADQADADAEABIAJABIAHAAIAHgCQAEgCACgEIADgJQACgFAAgIQAAgJgCgGQgCgHgEgDQgDgDgEgBIgKgBg");
	this.shape_21.setTransform(54.9,89.3);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#262733").s().p("AgHArIAAhVIAPAAIAABVg");
	this.shape_22.setTransform(47.6,89.3);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#262733").s().p("AgHArIAAhGIgcAAIAAgPIBHAAIAAAPIgcAAIAABGg");
	this.shape_23.setTransform(41.4,89.3);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#262733").s().p("AAaArIgIgVIgjAAIgIAVIgRAAIAihVIARAAIAiBVgAANAIIgNghIgMAhIAZAAg");
	this.shape_24.setTransform(32.5,89.3);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#262733").s().p("AgDArQgGAAgFgDQgGgEgDgEQgEgFgDgIQgCgJAAgKQAAgJACgJQADgHAEgFQADgGAGgCQAFgDAGgCIAKgBQANABANAFIAAAOQgMgFgMAAQgGgBgDACQgFABgEADQgEACgCAHQgCAGAAAJQAAAJACAHQACAHAEACQAEADAFABIAJACQAMAAAMgGIAAAPQgNAEgNAAIgKgBg");
	this.shape_25.setTransform(23.3,89.3);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#262733").s().p("AgHArIAAhVIAPAAIAABVg");
	this.shape_26.setTransform(16.7,89.3);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#262733").s().p("AgbArIAAhVIAPAAIAABHIAoAAIAAAOg");
	this.shape_27.setTransform(11.1,89.3);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#262733").s().p("AggArIAAhVIAgAAQAQAAAIAHQAJAIAAAOQAAANgJAHQgIAIgQAAIgQAAIAAAcgAgQABIAQAAQAJAAAEgDQADgEABgHQgBgIgDgDQgEgEgJAAIgQAAg");
	this.shape_28.setTransform(2.8,89.3);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#262733").s().p("AAbArIAAg/IgbAlIgaglIAAA/IgPAAIAAhVIARAAIAYAkIAZgkIARAAIAABVg");
	this.shape_29.setTransform(-7.6,89.3);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#262733").s().p("AgHArIAAhVIAPAAIAABVg");
	this.shape_30.setTransform(-15.4,89.3);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#262733").s().p("AAEAsIgKgBQgFgBgGgDQgFgDgEgEQgEgFgDgIQgCgJAAgKQAAgKACgIQADgIAEgFQADgEAGgDQAFgDAGgBIAKgBQAOAAAPAFIAAAPQgOgGgOAAIgHAAIgGADQgFACgBADQgDADgCAGQgBAFAAAHQAAAIABAFQACAGADADQABADAFACIAGADIAHAAQAIAAAIgCIAAgVIgTAAIAAgMIAjAAIAAAqQgQAHgQAAg");
	this.shape_31.setTransform(-27.3,89.3);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#262733").s().p("AAVArIgrg/IAAA/IgQAAIAAhVIASAAIArA/IAAg/IAQAAIAABVg");
	this.shape_32.setTransform(-37.4,89.3);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#262733").s().p("AgHArIAAhVIAPAAIAABVg");
	this.shape_33.setTransform(-44.9,89.3);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#262733").s().p("AARArIgcglIgJAJIAAAcIgPAAIAAhVIAPAAIAAAkIAggkIAVAAIgiAmIAlAvg");
	this.shape_34.setTransform(-51.6,89.3);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#262733").s().p("AAVArIgrg/IAAA/IgQAAIAAhVIASAAIArA/IAAg/IAQAAIAABVg");
	this.shape_35.setTransform(-62,89.3);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#262733").s().p("AgHArIAAhVIAPAAIAABVg");
	this.shape_36.setTransform(-69.5,89.3);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#262733").s().p("AgcArIAAhVIAQAAIAABHIApAAIAAAOg");
	this.shape_37.setTransform(-75.1,89.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]}).wait(11));

	// 3 MONTHS
	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#333436").s().p("AgUAdIAAgHQAIAFALAAQAQAAAAgLQAAgEgDgDQgDgDgEgCIgIgDIgJgCQgDgBgDgEQgDgEAAgFQAAgHAGgGQAFgFALAAQAJAAAIAEIAAAHQgIgEgIAAQgHAAgFADQgDADAAAFQgBAEADACQADACAEABIAIADIAJADQADACAEAEQACAEAAAGQAAAJgGAEQgHAFgKAAQgKAAgJgFg");
	this.shape_38.setTransform(22.4,-41.4);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#333436").s().p("AASAhIAAgeIgjAAIAAAeIgHAAIAAhBIAHAAIAAAdIAjAAIAAgdIAHAAIAABBg");
	this.shape_39.setTransform(16.3,-41.4);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#333436").s().p("AgDAhIAAg6IgXAAIAAgHIA1AAIAAAHIgYAAIAAA6g");
	this.shape_40.setTransform(10.1,-41.4);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#333436").s().p("AAUAhIgng3IAAA3IgIAAIAAhBIAJAAIAmA3IAAg3IAIAAIAABBg");
	this.shape_41.setTransform(3.6,-41.4);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#333436").s().p("AgeAAQAAghAeAAQAfAAAAAhQAAAigfAAQgeAAAAgigAgRgUQgFAHgBANQABAOAFAHQAGAGALAAQANAAAFgGQAGgHAAgOQAAgNgGgHQgFgHgNAAQgLAAgGAHg");
	this.shape_42.setTransform(-3.7,-41.4);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#333436").s().p("AAYAhIAAg2IgYAhIgWghIAAA2IgIAAIAAhBIAIAAIAWAgIAXggIAIAAIAABBg");
	this.shape_43.setTransform(-11.4,-41.4);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#333436").s().p("AgUAeIAAgIQAIAFAJAAQAIAAAEgDQAFgEAAgGQAAgGgFgDQgFgEgIAAIgHAAIAAgGIAIAAQAGAAAEgCQAEgDAAgFQAAgGgEgCQgEgDgHAAQgIAAgGADIAAgHQAHgDAHAAIABAAQAKAAAFAFQAGAFAAAIQAAAIgHAEIgCABIACABIACABIAEADIADAFIABAGQAAAEgBADQgBAEgDADQgDADgFABQgFACgFAAQgKAAgIgEg");
	this.shape_44.setTransform(-21.6,-41.4);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AgUAdIAAgHQAIAFALAAQAQAAAAgLQAAgEgDgDQgDgDgEgCIgIgDIgJgCQgDgBgDgEQgDgEAAgFQAAgHAGgGQAFgFALAAQAJAAAIAEIAAAHQgIgEgIAAQgHAAgFADQgDADAAAFQgBAEADACQADACAEABIAIADIAJADQADACAEAEQACAEAAAGQAAAJgGAEQgHAFgKAAQgKAAgJgFg");
	this.shape_45.setTransform(22.4,-41.4);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("AASAhIAAgeIgjAAIAAAeIgHAAIAAhBIAHAAIAAAdIAjAAIAAgdIAHAAIAABBg");
	this.shape_46.setTransform(16.3,-41.4);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("AgDAhIAAg6IgXAAIAAgHIA1AAIAAAHIgYAAIAAA6g");
	this.shape_47.setTransform(10.1,-41.4);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFFFF").s().p("AAUAhIgng3IAAA3IgIAAIAAhBIAJAAIAmA3IAAg3IAIAAIAABBg");
	this.shape_48.setTransform(3.6,-41.4);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFFFF").s().p("AgeAAQAAghAeAAQAfAAAAAhQAAAigfAAQgeAAAAgigAgRgUQgFAHgBANQABAOAFAHQAGAGALAAQANAAAFgGQAGgHAAgOQAAgNgGgHQgFgHgNAAQgLAAgGAHg");
	this.shape_49.setTransform(-3.7,-41.4);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFFFFF").s().p("AAYAhIAAg2IgYAhIgWghIAAA2IgIAAIAAhBIAIAAIAWAgIAXggIAIAAIAABBg");
	this.shape_50.setTransform(-11.4,-41.4);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFFFFF").s().p("AgUAeIAAgIQAIAFAJAAQAIAAAEgDQAFgEAAgGQAAgGgFgDQgFgEgIAAIgHAAIAAgGIAIAAQAGAAAEgCQAEgDAAgFQAAgGgEgCQgEgDgHAAQgIAAgGADIAAgHQAHgDAHAAIABAAQAKAAAFAFQAGAFAAAIQAAAIgHAEIgCABIACABIACABIAEADIADAFIABAGQAAAEgBADQgBAEgDADQgDADgFABQgFACgFAAQgKAAgIgEg");
	this.shape_51.setTransform(-21.6,-41.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38}]}).to({state:[{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45}]},5).wait(6));

	// STEP 2
	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#262733").s().p("AgcAsIAAgNIANgJIANgNQAFgGAFgHQAEgHAAgGQAAgEgEgEQgDgCgIAAQgGAAgHACQgGACgFAEIAAgQQAMgIANAAIAAAAQAOAAAIAIQAHAHAAALQAAAMgIALQgJAMgMAKIAfAAIAAAQg");
	this.shape_52.setTransform(19.8,-56.1);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#262733").s().p("AggArIAAhVIAgAAQAPAAAJAHQAJAIgBAOQABANgJAHQgJAIgPAAIgQAAIAAAcgAgQABIAQAAQAJAAAEgDQAEgEAAgHQAAgIgEgDQgEgEgJAAIgQAAg");
	this.shape_53.setTransform(6.6,-56);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#262733").s().p("AgcArIAAhVIA5AAIAAAOIgpAAIAAAWIAjAAIAAANIgjAAIAAAWIApAAIAAAOg");
	this.shape_54.setTransform(-1.9,-56);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#262733").s().p("AgGArIAAhGIgcAAIAAgPIBGAAIAAAPIgcAAIAABGg");
	this.shape_55.setTransform(-10.2,-56);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#262733").s().p("AgcAlIAAgQQALAJAOAAQARAAAAgKQAAgFgDgDQgDgDgFgBIgKgEIgKgEQgFgBgEgFQgDgFAAgHQAAgNAJgGQAJgGAMAAQAMAAALAGIAAAPQgKgHgLAAQgGAAgFADQgFACAAAGQAAAEAEACQAFADAFABIANAFQAHACAEAFQAFAHAAAKQAAAKgJAHQgJAGgMAAQgQAAgMgHg");
	this.shape_56.setTransform(-18.3,-56);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FFFFFF").s().p("AgcAsIAAgNIANgJIANgNQAFgGAFgHQAEgHAAgGQAAgEgEgEQgDgCgIAAQgGAAgHACQgGACgFAEIAAgQQAMgIANAAIAAAAQAOAAAIAIQAHAHAAALQAAAMgIALQgJAMgMAKIAfAAIAAAQg");
	this.shape_57.setTransform(19.8,-56.1);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#FFFFFF").s().p("AggArIAAhVIAgAAQAPAAAJAHQAJAIgBAOQABANgJAHQgJAIgPAAIgQAAIAAAcgAgQABIAQAAQAJAAAEgDQAEgEAAgHQAAgIgEgDQgEgEgJAAIgQAAg");
	this.shape_58.setTransform(6.6,-56);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#FFFFFF").s().p("AgcArIAAhVIA5AAIAAAOIgpAAIAAAWIAjAAIAAANIgjAAIAAAWIApAAIAAAOg");
	this.shape_59.setTransform(-1.9,-56);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#FFFFFF").s().p("AgGArIAAhGIgcAAIAAgPIBGAAIAAAPIgcAAIAABGg");
	this.shape_60.setTransform(-10.2,-56);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#FFFFFF").s().p("AgcAlIAAgQQALAJAOAAQARAAAAgKQAAgFgDgDQgDgDgFgBIgKgEIgKgEQgFgBgEgFQgDgFAAgHQAAgNAJgGQAJgGAMAAQAMAAALAGIAAAPQgKgHgLAAQgGAAgFADQgFACAAAGQAAAEAEACQAFADAFABIANAFQAHACAEAFQAFAHAAAKQAAAKgJAHQgJAGgMAAQgQAAgMgHg");
	this.shape_61.setTransform(-18.3,-56);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52}]}).to({state:[{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57}]},5).wait(6));

	// steps-shape
	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f().s("#3F3B4F").ss(5).p("AInl1In4klQgVgNgZAAQgZAAgVANIn4ElQgWAMgNAWQgNAWAAAZIAAJJQAAAZANAWQANAWAWAMIH4EmQAUAMAaAAQAaAAAUgMIH4kmQAWgMAMgWQANgWAAgZIAApJQAAgZgNgWQgMgWgWgMg");
	this.shape_62.setTransform(0.5,-51.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_62).wait(11));

	// Layer 8
	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#FFFFFF").s().p("AguKcIn4kmQgVgMgNgWQgNgWAAgZIAApJQAAgZANgVQANgXAVgMIH4klQAWgNAZAAQAYAAAWANIH4ElQAWAMAMAXQANAVAAAZIAAJJQAAAZgNAWQgMAWgWAMIn4EmQgVAMgZAAQgaAAgVgMg");
	this.shape_63.setTransform(0.5,-51.5);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#D9D8DC").s().p("AguKbIn4kkQgVgNgNgWQgNgWAAgZIAApIQAAgaANgVQANgXAVgMIH4klQAWgNAZAAQAYAAAWANIH4ElQAWAMAMAXQANAVAAAaIAAJIQAAAZgNAWQgMAWgWANIn4EkQgVANgZAAQgaAAgVgNg");
	this.shape_64.setTransform(0.5,-51.5);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#B2B1B9").s().p("AguKbIn4kkQgVgNgNgWQgNgWAAgZIAApIQAAgaANgVQANgXAVgMIH4klQAWgNAZAAQAYAAAWANIH4ElQAWAMAMAXQANAVAAAaIAAJIQAAAZgNAWQgMAWgWANIn4EkQgVANgZAAQgaAAgVgNg");
	this.shape_65.setTransform(0.5,-51.5);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#8C8995").s().p("AguKbIn4kkQgVgNgNgWQgNgWAAgZIAApIQAAgaANgVQANgXAVgMIH4klQAWgNAZAAQAYAAAWANIH4ElQAWAMAMAXQANAVAAAaIAAJIQAAAZgNAWQgMAWgWANIn4EkQgVANgZAAQgaAAgVgNg");
	this.shape_66.setTransform(0.5,-51.5);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#656272").s().p("AguKbIn4kkQgVgNgNgWQgNgWAAgZIAApIQAAgaANgVQANgXAVgMIH4klQAWgNAZAAQAYAAAWANIH4ElQAWAMAMAXQANAVAAAaIAAJIQAAAZgNAWQgMAWgWANIn4EkQgVANgZAAQgaAAgVgNg");
	this.shape_67.setTransform(0.5,-51.5);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#3F3B4F").s().p("AguKcIn4kmQgVgMgNgWQgNgWAAgZIAApJQAAgZANgVQANgXAVgMIH4klQAWgNAZAAQAYAAAWANIH4ElQAWAMAMAXQANAVAAAZIAAJJQAAAZgNAWQgMAWgWAMIn4EmQgVAMgZAAQgaAAgVgMg");
	this.shape_68.setTransform(0.5,-51.5);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#FFFFFF").s().p("AguKbIn4kkQgVgNgNgWQgMgWAAgZIAApIQAAgZAMgXQANgVAVgNIH4klQAWgNAYAAQAZAAAWANIH4ElQAWANAMAVQANAWAAAaIAAJIQAAAagNAVQgMAWgWANIn4EkQgVANgaAAQgZAAgVgNg");
	this.shape_69.setTransform(0.5,-51.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_63}]}).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_65}]},1).to({state:[{t:this.shape_66}]},1).to({state:[{t:this.shape_67}]},1).to({state:[{t:this.shape_68}]},1).to({state:[{t:this.shape_67}]},1).to({state:[{t:this.shape_66}]},1).to({state:[{t:this.shape_65}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_69}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-87.2,-122,174.5,238.3);


(lib.Step1diagram = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_54 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(54).call(this.frame_54).wait(1));

	// SD-1-1
	this.instance = new lib.SD11();
	this.instance.parent = this;
	this.instance.setTransform(-299.9,-191.8,0.01,0.01,0,0,0,-5,0);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:0,scaleX:1.2,scaleY:1.2,alpha:1},10).to({scaleX:1,scaleY:1},5).wait(40));

	// SD-1-2
	this.instance_1 = new lib.SD12();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,-191.8,0.01,0.01);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(4).to({_off:false},0).to({scaleX:1.2,scaleY:1.2,alpha:1},10).to({scaleX:1,scaleY:1},5).wait(36));

	// SD-1-3
	this.instance_2 = new lib.SD13();
	this.instance_2.parent = this;
	this.instance_2.setTransform(299.4,-191.8,0.01,0.01,0,0,0,5,0);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(9).to({_off:false},0).to({regX:0,scaleX:1.2,scaleY:1.2,alpha:1},10).to({scaleX:1,scaleY:1,x:299.5},5).wait(31));

	// SD-1-4
	this.instance_3 = new lib.SD14();
	this.instance_3.parent = this;
	this.instance_3.setTransform(300.4,28.8,0.01,0.01,0,0,0,0,10);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(14).to({_off:false},0).to({regY:0,scaleX:1.2,scaleY:1.2,y:28.7,alpha:1},10).to({scaleX:1,scaleY:1,y:28.8},5).wait(26));

	// SD-1-5
	this.instance_4 = new lib.SD15();
	this.instance_4.parent = this;
	this.instance_4.setTransform(0.2,28.8,0.01,0.01,0,0,0,0,5);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(19).to({_off:false},0).to({regY:0,scaleX:1.2,scaleY:1.2,x:0.1,y:28.7,alpha:1},10).to({scaleX:1,scaleY:1,x:0.2,y:28.8},5).wait(21));

	// SD-1-6
	this.instance_5 = new lib.SD16();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-299.9,28.7,0.01,0.01,0,0,0,-5,5);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(24).to({_off:false},0).to({regX:0,regY:0,scaleX:1.2,scaleY:1.2,alpha:1},10).to({scaleX:1,scaleY:1},5).wait(16));

	// SD-1-7
	this.instance_6 = new lib.SD17();
	this.instance_6.parent = this;
	this.instance_6.setTransform(-299.9,249.8,0.01,0.01,0,0,0,-5,5);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(29).to({_off:false},0).to({regX:0,regY:0,scaleX:1.2,scaleY:1.2,alpha:1},10).to({scaleX:1,scaleY:1},5).wait(11));

	// SD-1-8
	this.instance_7 = new lib.SD18();
	this.instance_7.parent = this;
	this.instance_7.setTransform(0.1,249.9,0.01,0.01,0,0,0,0,5);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(34).to({_off:false},0).to({regY:0,scaleX:1.2,scaleY:1.2,alpha:1},10).to({scaleX:1,scaleY:1},5).wait(6));

	// SD-1-9
	this.instance_8 = new lib.SD19();
	this.instance_8.parent = this;
	this.instance_8.setTransform(300.3,249.8,0.01,0.01,0,0,0,0,5);
	this.instance_8.alpha = 0;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(39).to({_off:false},0).to({regY:0,scaleX:1.2,scaleY:1.2,alpha:1},10).to({scaleX:1,scaleY:1},5).wait(1));

	// Maska copy 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_39 = new cjs.Graphics().p("AmYBbIAAi1IMxAAIAAC1g");
	var mask_graphics_40 = new cjs.Graphics().p("AmYFgIAAq/IMxAAIAAK/g");
	var mask_graphics_41 = new cjs.Graphics().p("AmYJlIAAzJIMxAAIAATJg");
	var mask_graphics_42 = new cjs.Graphics().p("AmYNqIAA7TIMxAAIAAbTg");
	var mask_graphics_43 = new cjs.Graphics().p("AmYRvMAAAgjeIMxAAMAAAAjeg");
	var mask_graphics_44 = new cjs.Graphics().p("Aq2RvMAAAgjeIVtAAMAAAAjeg");
	var mask_graphics_45 = new cjs.Graphics().p("AvURvMAAAgjeIepAAMAAAAjeg");
	var mask_graphics_46 = new cjs.Graphics().p("AzyRvMAAAgjeMAnlAAAMAAAAjeg");
	var mask_graphics_47 = new cjs.Graphics().p("A4RRvMAAAgjeMAwjAAAMAAAAjeg");
	var mask_graphics_48 = new cjs.Graphics().p("A8vRvMAAAgjeMA5fAAAMAAAAjeg");
	var mask_graphics_49 = new cjs.Graphics().p("EghOARvMAAAgjeMBCdAAAMAAAAjeg");
	var mask_graphics_50 = new cjs.Graphics().p("EglsARvMAAAgjeMBLZAAAMAAAAjeg");
	var mask_graphics_51 = new cjs.Graphics().p("EgqKARvMAAAgjeMBUVAAAMAAAAjeg");
	var mask_graphics_52 = new cjs.Graphics().p("EguoARvMAAAgjeMBdRAAAMAAAAjeg");
	var mask_graphics_53 = new cjs.Graphics().p("EgzHARvMAAAgjeMBmPAAAMAAAAjeg");
	var mask_graphics_54 = new cjs.Graphics().p("Eg3lARvMAAAgjeMBvLAAAMAAAAjeg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(39).to({graphics:mask_graphics_39,x:-474.3,y:35.2}).wait(1).to({graphics:mask_graphics_40,x:-474.3,y:61.4}).wait(1).to({graphics:mask_graphics_41,x:-474.3,y:87.5}).wait(1).to({graphics:mask_graphics_42,x:-474.3,y:113.6}).wait(1).to({graphics:mask_graphics_43,x:-474.3,y:139.8}).wait(1).to({graphics:mask_graphics_44,x:-445.7,y:139.8}).wait(1).to({graphics:mask_graphics_45,x:-417.1,y:139.8}).wait(1).to({graphics:mask_graphics_46,x:-388.4,y:139.8}).wait(1).to({graphics:mask_graphics_47,x:-359.8,y:139.8}).wait(1).to({graphics:mask_graphics_48,x:-331.2,y:139.8}).wait(1).to({graphics:mask_graphics_49,x:-302.6,y:139.8}).wait(1).to({graphics:mask_graphics_50,x:-274,y:139.8}).wait(1).to({graphics:mask_graphics_51,x:-245.3,y:139.8}).wait(1).to({graphics:mask_graphics_52,x:-216.7,y:139.8}).wait(1).to({graphics:mask_graphics_53,x:-188.1,y:139.8}).wait(1).to({graphics:mask_graphics_54,x:-159.5,y:139.8}).wait(1));

	// Kreski copy 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#2FB7AA").s().p("AldAZIAAgxIK7AAIAAAxg");
	this.shape.setTransform(-30.9,249.8,4.401,1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#2FB7AA").s().p("AldAZIAAgxIK7AAIAAAxg");
	this.shape_1.setTransform(149.7,249.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#2FB7AA").s().p("AgYRCMAAAgiDIAxAAMAAAAiDg");
	this.shape_2.setTransform(-482.5,139.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#2FB7AA").s().p("AldAZIAAgxIK7AAIAAAxg");
	this.shape_3.setTransform(-449.9,28.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#2FB7AA").s().p("AldAZIAAgxIK7AAIAAAxg");
	this.shape_4.setTransform(-328.5,249.8,4.469,1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#2FB7AA").s().p("AgYRCMAAAgiDIAxAAMAAAAiDg");
	this.shape_5.setTransform(482.6,-80.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#2FB7AA").s().p("AldAZIAAgxIK7AAIAAAxg");
	this.shape_6.setTransform(322.2,28.7,4.653,1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#2FB7AA").s().p("AldAZIAAgxIK7AAIAAAxg");
	this.shape_7.setTransform(450.1,-191.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#2FB7AA").s().p("AldAZIAAgxIK7AAIAAAxg");
	this.shape_8.setTransform(-270.1,28.7,4.435,1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#2FB7AA").s().p("AldAZIAAgxIK7AAIAAAxg");
	this.shape_9.setTransform(27.8,28.7,4.483,1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#2FB7AA").s().p("AldAZIAAgxIK7AAIAAAxg");
	this.shape_10.setTransform(270,-191.8,4.435,1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#2FB7AA").s().p("AgYFeIAAq7IAxAAIAAK7g");
	this.shape_11.setTransform(-300.2,-276.8,1,2.459);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#2FB7AA").s().p("AldAZIAAgxIK7AAIAAAxg");
	this.shape_12.setTransform(-86.7,-191.8,6.165,1);

	var maskedShapeInstanceList = [this.shape,this.shape_1,this.shape_2,this.shape_3,this.shape_4,this.shape_5,this.shape_6,this.shape_7,this.shape_8,this.shape_9,this.shape_10,this.shape_11,this.shape_12];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},39).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},15).wait(1));

	// Maska copy (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_23 = new cjs.Graphics().p("AmYBbIAAi1IMxAAIAAC1g");
	var mask_1_graphics_24 = new cjs.Graphics().p("AmYF5IAAryIMxAAIAALyg");
	var mask_1_graphics_25 = new cjs.Graphics().p("AmYKYIAA0vIMxAAIAAUvg");
	var mask_1_graphics_26 = new cjs.Graphics().p("AmYO3IAA9tIMxAAIAAdtg");
	var mask_1_graphics_27 = new cjs.Graphics().p("AmYTWMAAAgmqIMxAAMAAAAmqg");
	var mask_1_graphics_28 = new cjs.Graphics().p("AsPTWMAAAgmqIYfAAMAAAAmqg");
	var mask_1_graphics_29 = new cjs.Graphics().p("AyHTWMAAAgmqMAkPAAAMAAAAmqg");
	var mask_1_graphics_30 = new cjs.Graphics().p("A3+TWMAAAgmqMAv9AAAMAAAAmqg");
	var mask_1_graphics_31 = new cjs.Graphics().p("A92TWMAAAgmqMA7sAAAMAAAAmqg");
	var mask_1_graphics_32 = new cjs.Graphics().p("EgjtATWMAAAgmqMBHbAAAMAAAAmqg");
	var mask_1_graphics_33 = new cjs.Graphics().p("EgpkATWMAAAgmqMBTJAAAMAAAAmqg");
	var mask_1_graphics_34 = new cjs.Graphics().p("EgvcATWMAAAgmqMBe5AAAMAAAAmqg");
	var mask_1_graphics_35 = new cjs.Graphics().p("Eg1TATWMAAAgmqMBqnAAAMAAAAmqg");
	var mask_1_graphics_36 = new cjs.Graphics().p("Eg7LATWMAAAgmqMB2XAAAMAAAAmqg");
	var mask_1_graphics_37 = new cjs.Graphics().p("EhBCATWMAAAgmqMCCFAAAMAAAAmqg");
	var mask_1_graphics_38 = new cjs.Graphics().p("EhG6ATWMAAAgmqMCN1AAAMAAAAmqg");
	var mask_1_graphics_39 = new cjs.Graphics().p("EhMxATWMAAAgmqMCZjAAAMAAAAmqg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(23).to({graphics:mask_1_graphics_23,x:457,y:-207.3}).wait(1).to({graphics:mask_1_graphics_24,x:457,y:-178.6}).wait(1).to({graphics:mask_1_graphics_25,x:457,y:-149.9}).wait(1).to({graphics:mask_1_graphics_26,x:457,y:-121.3}).wait(1).to({graphics:mask_1_graphics_27,x:457,y:-92.6}).wait(1).to({graphics:mask_1_graphics_28,x:419.6,y:-92.6}).wait(1).to({graphics:mask_1_graphics_29,x:382.1,y:-92.6}).wait(1).to({graphics:mask_1_graphics_30,x:344.6,y:-92.6}).wait(1).to({graphics:mask_1_graphics_31,x:307.1,y:-92.6}).wait(1).to({graphics:mask_1_graphics_32,x:269.7,y:-92.6}).wait(1).to({graphics:mask_1_graphics_33,x:232.2,y:-92.6}).wait(1).to({graphics:mask_1_graphics_34,x:194.7,y:-92.6}).wait(1).to({graphics:mask_1_graphics_35,x:157.2,y:-92.6}).wait(1).to({graphics:mask_1_graphics_36,x:119.7,y:-92.6}).wait(1).to({graphics:mask_1_graphics_37,x:82.3,y:-92.6}).wait(1).to({graphics:mask_1_graphics_38,x:44.8,y:-92.6}).wait(1).to({graphics:mask_1_graphics_39,x:7.3,y:-92.6}).wait(16));

	// Kreski copy
	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#2FB7AA").s().p("AldAZIAAgxIK7AAIAAAxg");
	this.shape_13.setTransform(-30.9,249.8,4.401,1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#2FB7AA").s().p("AldAZIAAgxIK7AAIAAAxg");
	this.shape_14.setTransform(149.7,249.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#2FB7AA").s().p("AgYRCMAAAgiDIAxAAMAAAAiDg");
	this.shape_15.setTransform(-482.5,139.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#2FB7AA").s().p("AldAZIAAgxIK7AAIAAAxg");
	this.shape_16.setTransform(-449.9,28.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#2FB7AA").s().p("AldAZIAAgxIK7AAIAAAxg");
	this.shape_17.setTransform(-328.5,249.8,4.469,1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#2FB7AA").s().p("AgYRCMAAAgiDIAxAAMAAAAiDg");
	this.shape_18.setTransform(482.6,-80.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#2FB7AA").s().p("AldAZIAAgxIK7AAIAAAxg");
	this.shape_19.setTransform(322.2,28.7,4.653,1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#2FB7AA").s().p("AldAZIAAgxIK7AAIAAAxg");
	this.shape_20.setTransform(450.1,-191.8);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#2FB7AA").s().p("AldAZIAAgxIK7AAIAAAxg");
	this.shape_21.setTransform(-270.1,28.7,4.435,1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#2FB7AA").s().p("AldAZIAAgxIK7AAIAAAxg");
	this.shape_22.setTransform(27.8,28.7,4.483,1);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#2FB7AA").s().p("AldAZIAAgxIK7AAIAAAxg");
	this.shape_23.setTransform(270,-191.8,4.435,1);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#2FB7AA").s().p("AgYFeIAAq7IAxAAIAAK7g");
	this.shape_24.setTransform(-300.2,-276.8,1,2.459);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#2FB7AA").s().p("AldAZIAAgxIK7AAIAAAxg");
	this.shape_25.setTransform(-86.7,-191.8,6.165,1);

	var maskedShapeInstanceList = [this.shape_13,this.shape_14,this.shape_15,this.shape_16,this.shape_17,this.shape_18,this.shape_19,this.shape_20,this.shape_21,this.shape_22,this.shape_23,this.shape_24,this.shape_25];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13}]},23).wait(32));

	// Maska (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	var mask_2_graphics_5 = new cjs.Graphics().p("AkwBbIAAi1IJhAAIAAC1g");
	var mask_2_graphics_6 = new cjs.Graphics().p("AkwFKIAAqUIJhAAIAAKUg");
	var mask_2_graphics_7 = new cjs.Graphics().p("AkwI6IAAxzIJhAAIAARzg");
	var mask_2_graphics_8 = new cjs.Graphics().p("AkwMqIAA5TIJhAAIAAZTg");
	var mask_2_graphics_9 = new cjs.Graphics().p("AkwQaMAAAggzIJhAAMAAAAgzg");
	var mask_2_graphics_10 = new cjs.Graphics().p("Ao8QaMAAAggzIR4AAMAAAAgzg");
	var mask_2_graphics_11 = new cjs.Graphics().p("AtHQaMAAAggzIaPAAMAAAAgzg");
	var mask_2_graphics_12 = new cjs.Graphics().p("AxSQaMAAAggzMAilAAAMAAAAgzg");
	var mask_2_graphics_13 = new cjs.Graphics().p("A1dQaMAAAggzMAq7AAAMAAAAgzg");
	var mask_2_graphics_14 = new cjs.Graphics().p("A5oQaMAAAggzMAzRAAAMAAAAgzg");
	var mask_2_graphics_15 = new cjs.Graphics().p("A9zQaMAAAggzMA7nAAAMAAAAgzg");
	var mask_2_graphics_16 = new cjs.Graphics().p("Egh+AQaMAAAggzMBD9AAAMAAAAgzg");
	var mask_2_graphics_17 = new cjs.Graphics().p("EgmKAQaMAAAggzMBMVAAAMAAAAgzg");
	var mask_2_graphics_18 = new cjs.Graphics().p("EgqVAQaMAAAggzMBUrAAAMAAAAgzg");
	var mask_2_graphics_19 = new cjs.Graphics().p("EgugAQaMAAAggzMBdBAAAMAAAAgzg");
	var mask_2_graphics_20 = new cjs.Graphics().p("EgyrAQaMAAAggzMBlXAAAMAAAAgzg");
	var mask_2_graphics_21 = new cjs.Graphics().p("Eg23AQaMAAAggzMBtuAAAMAAAAgzg");
	var mask_2_graphics_22 = new cjs.Graphics().p("Eg7CAQaMAAAggzMB2FAAAMAAAAgzg");
	var mask_2_graphics_23 = new cjs.Graphics().p("Eg/NAQaMAAAggzMB+bAAAMAAAAgzg");

	this.timeline.addTween(cjs.Tween.get(mask_2).to({graphics:null,x:0,y:0}).wait(5).to({graphics:mask_2_graphics_5,x:-293.3,y:-376.1}).wait(1).to({graphics:mask_2_graphics_6,x:-293.3,y:-352.1}).wait(1).to({graphics:mask_2_graphics_7,x:-293.3,y:-328.2}).wait(1).to({graphics:mask_2_graphics_8,x:-293.3,y:-304.2}).wait(1).to({graphics:mask_2_graphics_9,x:-293.3,y:-280.3}).wait(1).to({graphics:mask_2_graphics_10,x:-266.5,y:-280.3}).wait(1).to({graphics:mask_2_graphics_11,x:-239.8,y:-280.3}).wait(1).to({graphics:mask_2_graphics_12,x:-213.1,y:-280.3}).wait(1).to({graphics:mask_2_graphics_13,x:-186.4,y:-280.3}).wait(1).to({graphics:mask_2_graphics_14,x:-159.7,y:-280.3}).wait(1).to({graphics:mask_2_graphics_15,x:-133,y:-280.3}).wait(1).to({graphics:mask_2_graphics_16,x:-106.3,y:-280.3}).wait(1).to({graphics:mask_2_graphics_17,x:-79.6,y:-280.3}).wait(1).to({graphics:mask_2_graphics_18,x:-52.9,y:-280.3}).wait(1).to({graphics:mask_2_graphics_19,x:-26.1,y:-280.3}).wait(1).to({graphics:mask_2_graphics_20,x:0.5,y:-280.3}).wait(1).to({graphics:mask_2_graphics_21,x:27.3,y:-280.3}).wait(1).to({graphics:mask_2_graphics_22,x:54,y:-280.3}).wait(1).to({graphics:mask_2_graphics_23,x:80.7,y:-280.3}).wait(32));

	// Kreski
	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#2FB7AA").s().p("AldAZIAAgxIK7AAIAAAxg");
	this.shape_26.setTransform(-30.9,249.8,4.401,1);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#2FB7AA").s().p("AldAZIAAgxIK7AAIAAAxg");
	this.shape_27.setTransform(149.7,249.8);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#2FB7AA").s().p("AgYRCMAAAgiDIAxAAMAAAAiDg");
	this.shape_28.setTransform(-482.5,139.1);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#2FB7AA").s().p("AldAZIAAgxIK7AAIAAAxg");
	this.shape_29.setTransform(-449.9,28.7);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#2FB7AA").s().p("AldAZIAAgxIK7AAIAAAxg");
	this.shape_30.setTransform(-328.5,249.8,4.469,1);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#2FB7AA").s().p("AgYRCMAAAgiDIAxAAMAAAAiDg");
	this.shape_31.setTransform(482.6,-80.3);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#2FB7AA").s().p("AldAZIAAgxIK7AAIAAAxg");
	this.shape_32.setTransform(322.2,28.7,4.653,1);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#2FB7AA").s().p("AldAZIAAgxIK7AAIAAAxg");
	this.shape_33.setTransform(450.1,-191.8);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#2FB7AA").s().p("AldAZIAAgxIK7AAIAAAxg");
	this.shape_34.setTransform(-270.1,28.7,4.435,1);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#2FB7AA").s().p("AldAZIAAgxIK7AAIAAAxg");
	this.shape_35.setTransform(27.8,28.7,4.483,1);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#2FB7AA").s().p("AldAZIAAgxIK7AAIAAAxg");
	this.shape_36.setTransform(270,-191.8,4.435,1);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#2FB7AA").s().p("AgYFeIAAq7IAxAAIAAK7g");
	this.shape_37.setTransform(-300.2,-276.8,1,2.459);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#2FB7AA").s().p("AldAZIAAgxIK7AAIAAAxg");
	this.shape_38.setTransform(-86.7,-191.8,6.165,1);

	var maskedShapeInstanceList = [this.shape_26,this.shape_27,this.shape_28,this.shape_29,this.shape_30,this.shape_31,this.shape_32,this.shape_33,this.shape_34,this.shape_35,this.shape_36,this.shape_37,this.shape_38];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26}]},5).wait(50));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-301.1,-193,2.4,2.4);


(lib.STEP1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_5 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(5).call(this.frame_5).wait(6));

	// Layer 7
	this.hoverSpace = new lib.hoverSpace();
	this.hoverSpace.parent = this;
	this.hoverSpace.setTransform(0.5,-51.5);
	this.hoverSpace.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.hoverSpace).wait(11));

	// Layer 6
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333436").s().p("AgVAdIAAgJQAKAFAJAAQAPAAAAgJQAAgEgCgDQgDgDgEgBIgHgDIgJgCQgEgCgDgEQgDgDABgFQgBgIAHgGQAFgFALAAQAJAAAIAEIAAAJQgHgFgJAAQgOAAAAALQAAACACACIAHAEIAIADIAIADQAEACADAEQACAEABAGQgBAIgGAFQgHAFgKAAQgKAAgKgFg");
	this.shape.setTransform(22.9,-41.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333436").s().p("AAQAhIAAgdIgfAAIAAAdIgJAAIAAhBIAJAAIAAAdIAfAAIAAgdIAJAAIAABBg");
	this.shape_1.setTransform(16.6,-41.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#333436").s().p("AgEAhIAAg5IgWAAIAAgIIA1AAIAAAIIgXAAIAAA5g");
	this.shape_2.setTransform(10.5,-41.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#333436").s().p("AASAhIgkg0IAAA0IgKAAIAAhBIALAAIAkA0IAAg0IAKAAIAABBg");
	this.shape_3.setTransform(4,-41.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#333436").s().p("AgHAhIgJgDIgHgGQgDgEgCgGQgCgGAAgIQAAgHACgHQACgGADgDQADgEAEgCIAJgEIAHAAIAJAAIAIAEQAEACADAEQAEADABAGQACAHAAAHQAAAIgCAGQgBAGgEAEQgDAEgEACIgIADIgJABIgHgBgAgFgYQgDAAgDACIgFAEIgDAHQgBAFgBAGQABAGABAFQABAFACADQACADADABIAGACIAFABIAGgBIAGgCQADgBACgDQACgDACgFQABgFAAgGQAAgGgBgFIgEgHIgFgEQgDgCgDAAIgGgBg");
	this.shape_4.setTransform(-3.5,-41.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#333436").s().p("AAXAhIAAgzIgXAdIgWgdIAAAzIgJAAIAAhBIAKAAIAVAcIAWgcIAKAAIAABBg");
	this.shape_5.setTransform(-11.2,-41.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#333436").s().p("AgUAiIAAgHIAKgJIAKgKQAFgGADgFQADgGAAgEQAAgLgOAAQgJAAgHAFIAAgJQAIgFAKAAQAKAAAGAGQAFAGAAAIQAAAQgYAWIAZAAIAAAJg");
	this.shape_6.setTransform(-21.6,-41.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#262733").s().p("AAAArIAAhEIgPAKIAAgRIARgKIANAAIAABVg");
	this.shape_7.setTransform(19.6,-55.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#262733").s().p("AgfArIAAhVIAfAAQAQAAAIAHQAJAIAAAOQAAANgJAHQgIAIgQAAIgQAAIAAAcgAgQABIAQAAQAJAAAEgDQADgEABgHQgBgIgDgDQgEgEgJAAIgQAAg");
	this.shape_8.setTransform(7.4,-55.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#262733").s().p("AgcArIAAhVIA5AAIAAAOIgpAAIAAAWIAjAAIAAANIgjAAIAAAWIApAAIAAAOg");
	this.shape_9.setTransform(-1.2,-55.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#262733").s().p("AgHArIAAhGIgcAAIAAgPIBHAAIAAAPIgcAAIAABGg");
	this.shape_10.setTransform(-9.5,-55.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#262733").s().p("AgcAlIAAgQQALAJAOAAQARAAAAgKQAAgFgDgDQgDgDgFgBIgKgEIgKgEQgFgBgEgFQgDgFAAgHQAAgNAJgGQAJgGAMAAQAMAAALAGIAAAPQgKgHgLAAQgGAAgFADQgFACAAAGQAAAEAEACQAFADAFABIANAFQAHACAEAFQAFAHAAAKQAAAKgJAHQgJAGgMAAQgQAAgMgHg");
	this.shape_11.setTransform(-17.5,-55.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgVAdIAAgJQAKAFAJAAQAPAAAAgJQAAgEgCgDQgDgDgEgBIgHgDIgJgCQgEgCgDgEQgDgDABgFQgBgIAHgGQAFgFALAAQAJAAAIAEIAAAJQgHgFgJAAQgOAAAAALQAAACACACIAHAEIAIADIAIADQAEACADAEQACAEABAGQgBAIgGAFQgHAFgKAAQgKAAgKgFg");
	this.shape_12.setTransform(22.9,-41.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AAQAhIAAgdIgfAAIAAAdIgJAAIAAhBIAJAAIAAAdIAfAAIAAgdIAJAAIAABBg");
	this.shape_13.setTransform(16.6,-41.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgEAhIAAg5IgWAAIAAgIIA1AAIAAAIIgXAAIAAA5g");
	this.shape_14.setTransform(10.5,-41.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AASAhIgkg0IAAA0IgKAAIAAhBIALAAIAkA0IAAg0IAKAAIAABBg");
	this.shape_15.setTransform(4,-41.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgHAhIgJgDIgHgGQgDgEgCgGQgCgGAAgIQAAgHACgHQACgGADgDQADgEAEgCIAJgEIAHAAIAJAAIAIAEQAEACADAEQAEADABAGQACAHAAAHQAAAIgCAGQgBAGgEAEQgDAEgEACIgIADIgJABIgHgBgAgFgYQgDAAgDACIgFAEIgDAHQgBAFgBAGQABAGABAFQABAFACADQACADADABIAGACIAFABIAGgBIAGgCQADgBACgDQACgDACgFQABgFAAgGQAAgGgBgFIgEgHIgFgEQgDgCgDAAIgGgBg");
	this.shape_16.setTransform(-3.5,-41.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AAXAhIAAgzIgXAdIgWgdIAAAzIgJAAIAAhBIAKAAIAVAcIAWgcIAKAAIAABBg");
	this.shape_17.setTransform(-11.2,-41.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgUAiIAAgHIAKgJIAKgKQAFgGADgFQADgGAAgEQAAgLgOAAQgJAAgHAFIAAgJQAIgFAKAAQAKAAAGAGQAFAGAAAIQAAAQgYAWIAZAAIAAAJg");
	this.shape_18.setTransform(-21.6,-41.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AAAArIAAhEIgPAKIAAgRIARgKIANAAIAABVg");
	this.shape_19.setTransform(19.6,-55.9);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgfArIAAhVIAfAAQAQAAAIAHQAJAIAAAOQAAANgJAHQgIAIgQAAIgQAAIAAAcgAgQABIAQAAQAJAAAEgDQADgEABgHQgBgIgDgDQgEgEgJAAIgQAAg");
	this.shape_20.setTransform(7.4,-55.9);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgcArIAAhVIA5AAIAAAOIgpAAIAAAWIAjAAIAAANIgjAAIAAAWIApAAIAAAOg");
	this.shape_21.setTransform(-1.2,-55.9);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgHArIAAhGIgcAAIAAgPIBHAAIAAAPIgcAAIAABGg");
	this.shape_22.setTransform(-9.5,-55.9);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgcAlIAAgQQALAJAOAAQARAAAAgKQAAgFgDgDQgDgDgFgBIgKgEIgKgEQgFgBgEgFQgDgFAAgHQAAgNAJgGQAJgGAMAAQAMAAALAGIAAAPQgKgHgLAAQgGAAgFADQgFACAAAGQAAAEAEACQAFADAFABIANAFQAHACAEAFQAFAHAAAKQAAAKgJAHQgJAGgMAAQgQAAgMgHg");
	this.shape_23.setTransform(-17.5,-55.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12}]},5).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},5).wait(1));

	// Layer 1
	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#2FB7AA").s().p("AhVBXQgkgkAAgzQAAgxAkglQAjgjAygBQAzABAkAjQAkAlAAAxQAAAzgkAkQgkAkgzgBQgyABgjgkg");
	this.shape_24.setTransform(0,55.8);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#262733").s().p("AgcAlIAAgQQALAJAOAAQARAAAAgKQAAgFgDgDQgDgDgFgBIgKgEIgKgEQgFgBgEgFQgDgFAAgHQAAgNAJgGQAJgGAMAAQAMAAALAGIAAAPQgKgHgLAAQgGAAgFADQgFACAAAGQAAAEAEACQAFADAFABIANAFQAHACAEAFQAFAHAAAKQAAAKgJAHQgJAGgMAAQgQAAgMgHg");
	this.shape_25.setTransform(43.9,107.2);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#262733").s().p("AAVArIgrg/IAAA/IgQAAIAAhVIASAAIArA/IAAg/IAQAAIAABVg");
	this.shape_26.setTransform(34.5,107.2);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#262733").s().p("AgKArQgGgBgFgDQgGgDgDgFQgEgEgDgIQgCgJAAgKQAAgKACgIQADgIAEgFQADgEAGgDQAFgDAGgBIAKgBIALABQAFABAGADQAGADAEAEQAEAFACAIQADAIAAAKQAAAKgDAJQgCAIgEAEQgEAFgGADQgGADgFABIgLABIgKgBgAgHgdIgGACQgEACgCADIgDAJQgCAGAAAHQAAAKACAGQACAGADADQAFADADABIAJABIAIAAIAGgCQADgCADgEIAEgJQABgFAAgIQAAgJgCgGQgCgHgEgDQgDgDgFgBIgJgBg");
	this.shape_27.setTransform(24,107.2);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#262733").s().p("AgHArIAAhVIAPAAIAABVg");
	this.shape_28.setTransform(16.7,107.2);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#262733").s().p("AgGArIAAhGIgcAAIAAgPIBGAAIAAAPIgcAAIAABGg");
	this.shape_29.setTransform(10.5,107.2);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#262733").s().p("AAaArIgIgVIgjAAIgIAVIgRAAIAihVIARAAIAiBVgAANAIIgNghIgMAhIAZAAg");
	this.shape_30.setTransform(1.6,107.2);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#262733").s().p("AgDAsQgGgBgFgEQgGgDgDgEQgEgFgDgIQgCgJAAgKQAAgJACgJQADgIAEgEQADgGAGgCQAFgEAGgBIAKgBQANABANAFIAAAOQgMgFgMAAQgGAAgDABQgFABgEADQgEACgCAHQgCAGAAAJQAAAJACAHQACAHAEADQAEACAFABIAJABQAMABAMgGIAAAOQgNAGgNgBIgKAAg");
	this.shape_31.setTransform(-7.6,107.2);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#262733").s().p("AgHArIAAhVIAPAAIAABVg");
	this.shape_32.setTransform(-14.2,107.2);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#262733").s().p("AgcArIAAhVIAQAAIAABHIApAAIAAAOg");
	this.shape_33.setTransform(-19.8,107.2);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#262733").s().p("AggArIAAhVIAgAAQAPAAAJAHQAJAIgBAOQABANgJAHQgJAIgPAAIgPAAIAAAcgAgPABIAPAAQAJAAAEgDQAEgEAAgHQAAgIgEgDQgEgEgJAAIgPAAg");
	this.shape_34.setTransform(-28.1,107.2);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#262733").s().p("AAbArIAAg/IgbAlIgaglIAAA/IgPAAIAAhVIARAAIAYAkIAZgkIARAAIAABVg");
	this.shape_35.setTransform(-38.5,107.2);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#262733").s().p("AgHArIAAhVIAPAAIAABVg");
	this.shape_36.setTransform(-46.3,107.2);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#262733").s().p("AAEAsIgKgBQgGgBgFgDQgGgDgDgEQgEgFgDgIQgDgJABgKQgBgKADgIQADgIAEgFQADgEAGgDQAFgDAFgBIALgBQAOAAAQAFIAAAPQgPgGgNAAIgHAAIgHADQgEACgDADQgCADgBAGQgCAFAAAHQAAAIACAFQABAGACADQADADAEACIAHADIAHAAQAGAAAJgCIAAgVIgUAAIAAgMIAjAAIAAAqQgPAHgQAAg");
	this.shape_37.setTransform(25.2,89.3);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#262733").s().p("AAVArIgrg/IAAA/IgQAAIAAhVIASAAIArA/IAAg/IAQAAIAABVg");
	this.shape_38.setTransform(15.1,89.3);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#262733").s().p("AgHArIAAhVIAPAAIAABVg");
	this.shape_39.setTransform(7.6,89.3);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#262733").s().p("AggArIAAhVIAgAAQAQAAAIAHQAJAIAAAOQAAANgJAHQgIAIgQAAIgQAAIAAAcgAgQABIAQAAQAJAAAEgDQADgEABgHQgBgIgDgDQgEgEgJAAIgQAAg");
	this.shape_40.setTransform(1.3,89.3);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#262733").s().p("AgLArQgFgBgGgDQgFgDgEgFQgDgEgDgIQgCgJgBgKQABgKACgIQADgIADgFQAEgEAFgDQAGgDAFgBIALgBIALABQAGABAFADQAGADADAEQAEAFADAIQACAIAAAKQAAAKgCAJQgDAIgEAEQgDAFgGADQgFADgGABIgLABIgLgBgAgGgdIgHACQgEACgCADIgDAJQgCAGAAAHQAAAKACAGQACAGAEADQADADAEABIAJABIAHAAIAHgCQAEgCACgEIADgJQACgFAAgIQAAgJgCgGQgCgHgEgDQgDgDgEgBIgKgBg");
	this.shape_41.setTransform(-8.5,89.3);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#262733").s().p("AgDArQgGAAgFgDQgGgEgDgEQgEgFgDgIQgCgJAAgKQAAgJACgJQADgHAEgFQADgGAGgCQAFgDAGgCIAKgBQANABANAFIAAAOQgMgFgMAAQgGgBgDACQgFABgEADQgEACgCAHQgCAGAAAJQAAAJACAHQACAHAEACQAEADAFABIAJACQAMAAAMgGIAAAPQgNAEgNAAIgKgBg");
	this.shape_42.setTransform(-18,89.3);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#262733").s().p("AgcAlIAAgQQALAJAOAAQARAAAAgKQAAgFgDgDQgDgDgFgBIgKgEIgKgEQgFgBgEgFQgDgFAAgHQAAgNAJgGQAJgGAMAAQAMAAALAGIAAAPQgKgHgLAAQgGAAgFADQgFACAAAGQAAAEAEACQAFADAFABIANAFQAHACAEAFQAFAHAAAKQAAAKgJAHQgJAGgMAAQgQAAgMgHg");
	this.shape_43.setTransform(-26.5,89.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24}]}).wait(11));

	// Layer 3
	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#3F3B4F").ss(5).p("AInl1In4klQgVgNgZAAQgZAAgVANIn4ElQgWAMgNAWQgNAWAAAZIAAJJQAAAZANAWQANAWAWAMIH4EmQAUAMAaAAQAaAAAUgMIH4kmQAWgMAMgWQANgWAAgZIAApJQAAgZgNgWQgMgWgWgMg");
	this.shape_44.setTransform(0.5,-51.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_44).wait(11));

	// Layer 4
	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AguKcIn4kmQgVgMgNgWQgNgWAAgZIAApJQAAgZANgVQANgXAVgMIH4klQAWgNAZAAQAYAAAWANIH4ElQAWAMAMAXQANAVAAAZIAAJJQAAAZgNAWQgMAWgWAMIn4EmQgVAMgZAAQgaAAgVgMg");
	this.shape_45.setTransform(0.5,-51.5);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#D9D8DC").s().p("AguKbIn4kkQgVgNgNgWQgNgWAAgZIAApIQAAgaANgVQANgXAVgMIH4klQAWgNAZAAQAYAAAWANIH4ElQAWAMAMAXQANAVAAAaIAAJIQAAAZgNAWQgMAWgWANIn4EkQgVANgZAAQgaAAgVgNg");
	this.shape_46.setTransform(0.5,-51.5);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#B2B1B9").s().p("AguKbIn4kkQgVgNgNgWQgNgWAAgZIAApIQAAgaANgVQANgXAVgMIH4klQAWgNAZAAQAYAAAWANIH4ElQAWAMAMAXQANAVAAAaIAAJIQAAAZgNAWQgMAWgWANIn4EkQgVANgZAAQgaAAgVgNg");
	this.shape_47.setTransform(0.5,-51.5);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#8C8995").s().p("AguKbIn4kkQgVgNgNgWQgNgWAAgZIAApIQAAgaANgVQANgXAVgMIH4klQAWgNAZAAQAYAAAWANIH4ElQAWAMAMAXQANAVAAAaIAAJIQAAAZgNAWQgMAWgWANIn4EkQgVANgZAAQgaAAgVgNg");
	this.shape_48.setTransform(0.5,-51.5);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#656272").s().p("AguKbIn4kkQgVgNgNgWQgNgWAAgZIAApIQAAgaANgVQANgXAVgMIH4klQAWgNAZAAQAYAAAWANIH4ElQAWAMAMAXQANAVAAAaIAAJIQAAAZgNAWQgMAWgWANIn4EkQgVANgZAAQgaAAgVgNg");
	this.shape_49.setTransform(0.5,-51.5);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#3F3B4F").s().p("AguKcIn4kmQgVgMgNgWQgNgWAAgZIAApJQAAgZANgVQANgXAVgMIH4klQAWgNAZAAQAYAAAWANIH4ElQAWAMAMAXQANAVAAAZIAAJJQAAAZgNAWQgMAWgWAMIn4EmQgVAMgZAAQgaAAgVgMg");
	this.shape_50.setTransform(0.5,-51.5);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFFFFF").s().p("AguKbIn4kkQgVgNgNgWQgMgWAAgZIAApIQAAgZAMgXQANgVAVgNIH4klQAWgNAYAAQAZAAAWANIH4ElQAWANAMAVQANAWAAAaIAAJIQAAAagNAVQgMAWgWANIn4EkQgVANgaAAQgZAAgVgNg");
	this.shape_51.setTransform(0.5,-51.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_45}]}).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_51}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-87.2,-122,174.5,238.3);


(lib.Glowna1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_30 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(30).call(this.frame_30).wait(1));

	// STEP-4
	this.g04 = new lib.STEP4();
	this.g04.parent = this;
	this.g04.setTransform(370.2,-20.7,1,1,0,0,0,0,-1.3);
	this.g04.alpha = 0;
	this.g04._off = true;

	this.timeline.addTween(cjs.Tween.get(this.g04).wait(15).to({_off:false},0).to({x:300.3,alpha:1},9).wait(7));

	// STEP-3
	this.g03 = new lib.STEP3();
	this.g03.parent = this;
	this.g03.setTransform(168.7,-20.7,1,1,0,0,0,0,-1.3);
	this.g03.alpha = 0;
	this.g03._off = true;

	this.timeline.addTween(cjs.Tween.get(this.g03).wait(10).to({_off:false},0).to({x:100.3,alpha:1},9).wait(12));

	// STEP-2
	this.g02 = new lib.STEP2();
	this.g02.parent = this;
	this.g02.setTransform(-30.7,-20.7,1,1,0,0,0,0,-1.3);
	this.g02.alpha = 0;
	this.g02._off = true;

	this.timeline.addTween(cjs.Tween.get(this.g02).wait(4).to({_off:false},0).to({x:-99.7,alpha:1},9).wait(18));

	// STEP-1
	this.g01 = new lib.STEP1();
	this.g01.parent = this;
	this.g01.setTransform(-235.7,-20.7,1,1,0,0,0,0,-1.3);
	this.g01.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.g01).to({x:-300.2,alpha:1},9).wait(22));

	// Layer 27
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("EgvoAKbIn4kkQgVgNgNgWQgNgWAAgZIAApIQAAgZANgXQANgVAVgNIH4klQAWgNAZAAQAZAAAWANIH4ElQAVANANAVQAMAWAAAaIAAJIQAAAagMAVQgNAWgVANIn4EkQgVANgaAAQgaAAgVgNgEAuIAKZIn0kiQgWgNgNgWQgMgWAAgZIAApIQAAgZAMgXQANgVAWgNIH4klQAVgNAaAAQAZAAAVANIH4ElQAWANAMAVQANAWAAAaIAAJIQAAAagNAVQgMAWgWANIn0EigAOuKZIn0kiQgWgNgNgWQgMgWAAgZIAApIQAAgZAMgXQANgVAWgNIH4klQAVgNAaAAQAZAAAVANIH4ElQAWANAMAVQANAWAAAaIAAJIQAAAagNAVQgMAWgWANIn0EigAwcKZIn0kiQgWgNgNgWQgMgWAAgZIAApIQAAgZAMgXQANgVAWgNIH4klQAVgNAaAAQAZAAAVANIH4ElQAWANAMAVQANAWAAAaIAAJIQAAAagNAVQgMAWgWANIn0Eig");
	this.shape.setTransform(0.6,-70.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(31));

	// Layer 22
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#2FB7AA").s().p("AjOAZIAAgxIGeAAIAAAxg");
	this.shape_1.setTransform(-283.3,-70.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#2FB7AA").s().p("AlQAZIAAgxIKhAAIAAAxg");
	this.shape_2.setTransform(-270.4,-70.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#2FB7AA").s().p("AnRAZIAAgxIOjAAIAAAxg");
	this.shape_3.setTransform(-257.4,-70.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#2FB7AA").s().p("ApSAZIAAgxISlAAIAAAxg");
	this.shape_4.setTransform(-244.5,-70.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#2FB7AA").s().p("ArUAZIAAgxIWpAAIAAAxg");
	this.shape_5.setTransform(-231.6,-70.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#2FB7AA").s().p("AtVAZIAAgxIarAAIAAAxg");
	this.shape_6.setTransform(-218.6,-70.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#2FB7AA").s().p("AvWAZIAAgxIetAAIAAAxg");
	this.shape_7.setTransform(-205.7,-70.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#2FB7AA").s().p("AxYAZIAAgxMAixAAAIAAAxg");
	this.shape_8.setTransform(-192.8,-70.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#2FB7AA").s().p("AzZAZIAAgxMAmzAAAIAAAxg");
	this.shape_9.setTransform(-179.8,-70.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#2FB7AA").s().p("A1aAZIAAgxMAq1AAAIAAAxg");
	this.shape_10.setTransform(-166.9,-70.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#2FB7AA").s().p("A3bAZIAAgxMAu3AAAIAAAxg");
	this.shape_11.setTransform(-154,-70.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#2FB7AA").s().p("A5dAZIAAgxMAy7AAAIAAAxg");
	this.shape_12.setTransform(-141,-70.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#2FB7AA").s().p("A7fAZIAAgxMA2+AAAIAAAxg");
	this.shape_13.setTransform(-128.1,-70.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#2FB7AA").s().p("A9gAZIAAgxMA7BAAAIAAAxg");
	this.shape_14.setTransform(-115.2,-70.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#2FB7AA").s().p("A/hAZIAAgxMA/DAAAIAAAxg");
	this.shape_15.setTransform(-102.3,-70.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#2FB7AA").s().p("EghiAAZIAAgxMBDFAAAIAAAxg");
	this.shape_16.setTransform(-89.4,-70.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#2FB7AA").s().p("EgjkAAZIAAgxMBHJAAAIAAAxg");
	this.shape_17.setTransform(-76.4,-70.9);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#2FB7AA").s().p("EgllAAZIAAgxMBLLAAAIAAAxg");
	this.shape_18.setTransform(-63.5,-70.9);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#2FB7AA").s().p("EgnmAAZIAAgxMBPNAAAIAAAxg");
	this.shape_19.setTransform(-50.6,-70.9);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#2FB7AA").s().p("EgpoAAZIAAgxMBTQAAAIAAAxg");
	this.shape_20.setTransform(-37.6,-70.9);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#2FB7AA").s().p("EgrpAAZIAAgxMBXTAAAIAAAxg");
	this.shape_21.setTransform(-24.7,-70.9);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#2FB7AA").s().p("EgtqAAZIAAgxMBbVAAAIAAAxg");
	this.shape_22.setTransform(-11.8,-70.9);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#2FB7AA").s().p("EgvsAAZIAAgxMBfYAAAIAAAxg");
	this.shape_23.setTransform(1.2,-70.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1}]},8).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-359.3,-141.4,720,238.3);


// stage content:
(lib.anim4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/*//console.log("Blue Trigger name: "+ gArray);

		$.each(gArray, function (index) {
		alert('dupa');
					});

		this.guziki.g01.addEventListener("click", changeColour.bind(this));
		//this.guziki.addEventListener("mouseover", changeColour2.bind(this));

		function changeColour()
		{
			//this.g.beginFill("red");
			//alert("Moused over");
			this.guziki.g01.play();
			console.log("Blue Trigger name: "+ this);
		}

		function changeColour2()
		{
			//this.g.beginFill("red");
			alert("Moused over-2");
			//this.guziki.g02.play();
			console.log("Blue Trigger name: "+ this);
		}
		//this.g.addEventListener("click", playNow.bind(this));*/

		/*this.guziki.g01.hoverSpace.addEventListener("mouseover", hoverGuzik1.bind(this));
		this.guziki.g01.hoverSpace.addEventListener("mouseout", outGuzik1.bind(this));*/
		/*function hoverGuzik1()
		{
			this.guziki.g01.gotoAndPlay(1);
			this.guziki.g01.hoverSpace.removeEventListener("mouseover", hoverGuzik1.bind(this));
		}

		function outGuzik1()
		{
			this.guziki.g01.gotoAndPlay(7);
			//this.guziki.g01.hoverSpace.addEventListener("mouseover", hoverGuzik1.bind(this));
		}*/


		var frequency = 10;
		stage.enableMouseOver(frequency);


		/*GUZIK 1*/
		this.guziki.g01.addEventListener("click", playGuzik1.bind(this));



		function playGuzik1()
		{

			if(this.guziki.g01.currentFrame == 0)
			{


				this.guziki.g01.gotoAndPlay(1);
				this.step1Anim.gotoAndPlay(1);

				this.guziki.g02.gotoAndStop(0);
				this.step2Anim.gotoAndStop(0);
				this.guziki.g03.gotoAndStop(0);
				this.step3Anim.gotoAndStop(0);
				this.guziki.g04.gotoAndStop(0);
				this.step4Anim.gotoAndStop(0);

			}
			else
			{
				this.guziki.g01.gotoAndStop(5);

			}

		}

		/*GUZIK 2*/
		this.guziki.g02.addEventListener("click", playGuzik2.bind(this));



		function playGuzik2()
		{
			if(this.guziki.g02.currentFrame == 0)
			{
				this.guziki.g02.gotoAndPlay(1);
				this.step2Anim.gotoAndPlay(1);

				this.guziki.g01.gotoAndStop(0);
				this.step1Anim.gotoAndStop(0);
				this.guziki.g03.gotoAndStop(0);
				this.step3Anim.gotoAndStop(0);
				this.guziki.g04.gotoAndStop(0);
				this.step4Anim.gotoAndStop(0);

			}
			else
			{
				this.guziki.g02.gotoAndStop(5);
			}



		}

		/*GUZIK 3*/
		this.guziki.g03.addEventListener("click", playGuzik3.bind(this));



		function playGuzik3()
		{

			if(this.guziki.g03.currentFrame == 0)
			{


				this.guziki.g03.gotoAndPlay(1);
				this.step3Anim.gotoAndPlay(1);

				this.guziki.g01.gotoAndStop(0);
				this.step1Anim.gotoAndStop(0);
				this.guziki.g02.gotoAndStop(0);
				this.step2Anim.gotoAndStop(0);
				this.guziki.g04.gotoAndStop(0);
				this.step4Anim.gotoAndStop(0);

			}
			else
			{
				this.guziki.g03.gotoAndStop(5);

			}

		}

		/*GUZIK 4*/
		this.guziki.g04.addEventListener("click", playGuzik4.bind(this));



		function playGuzik4()
		{

			if(this.guziki.g04.currentFrame == 0)
			{


				this.guziki.g04.gotoAndPlay(1);
				this.step4Anim.gotoAndPlay(1);

				this.guziki.g01.gotoAndStop(0);
				this.step1Anim.gotoAndStop(0);
				this.guziki.g02.gotoAndStop(0);
				this.step2Anim.gotoAndStop(0);
				this.guziki.g03.gotoAndStop(0);
				this.step3Anim.gotoAndStop(0);

			}
			else
			{
				this.guziki.g04.gotoAndStop(5);

			}

		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Step 4
	this.step4Anim = new lib.Step4Diagram();
	this.step4Anim.parent = this;
	this.step4Anim.setTransform(442.6,375.4,1,1,0,0,0,-0.8,0);

	this.timeline.addTween(cjs.Tween.get(this.step4Anim).wait(1));

	// Step 3
	this.step3Anim = new lib.Step3Diagram();
	this.step3Anim.parent = this;
	this.step3Anim.setTransform(472.1,631.4);

	this.timeline.addTween(cjs.Tween.get(this.step3Anim).wait(1));

	// Step 2
	this.step2Anim = new lib.Step2diagram();
	this.step2Anim.parent = this;
	this.step2Anim.setTransform(534.3,498.3,1,1,0,0,0,-0.8,0);

	this.timeline.addTween(cjs.Tween.get(this.step2Anim).wait(1));

	// Step 1
	this.step1Anim = new lib.Step1diagram();
	this.step1Anim.parent = this;
	this.step1Anim.setTransform(485,613.3);

	this.timeline.addTween(cjs.Tween.get(this.step1Anim).wait(1));

	// Glowne
	this.guziki = new lib.Glowna1();
	this.guziki.parent = this;
	this.guziki.setTransform(485.1,140.3,1,1,0,0,0,0,-1.2);

	this.timeline.addTween(cjs.Tween.get(this.guziki).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(485,432.5,970.1,865.6);
// library properties:
lib.properties = {
	width: 1000,
	height: 1050,
	fps: 32,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;