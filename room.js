class ROOM{
	constructor(W,H,D) {
		this.W = W;
		this.H = H;
		this.D = D;
	}

	line(w, h,tex,{d=0,tx=0,ty=0,tz=0,rx=0,ry=0,rz=0}){
		var edgeLine = new THREE.BoxBufferGeometry( w, h, d ); 
		var edges = new THREE.EdgesGeometry( edgeLine ); 
		var mesh = new THREE.LineSegments( edges, new THREE.LineBasicMaterial( { color: 0xffffff } ) );
		return mesh;	
	}

	plane(w, h,tex,{d=0,tx=0,ty=0,tz=0,rx=0,ry=0,rz=0}){
		var mat = new THREE.MeshBasicMaterial({color: 0xffffff,map: tex} );
		var p = new THREE.PlaneBufferGeometry(w,h);
		var mesh  = new THREE.Mesh(p, mat);
		mesh.material.side = THREE.DoubleSide;
		mesh = this.transform(mesh,tx,ty,tz,rx,ry,rz,w,h,d);
		return mesh;
	}

circle(w,h,tex,{d=0,tx=0,ty=0,tz=0,rx=0,ry=0,rz=0}){
  var geometry = new THREE.CircleGeometry(w, 32,0,Math.PI);
  var material = new THREE.MeshBasicMaterial({color: 0xffffff,map: tex});
  var mesh = new THREE.Mesh(geometry, material);
  mesh.material.side = THREE.DoubleSide;
  mesh = this.transform(mesh,tx,ty,tz,rx,ry,rz,w,h,d);
    return mesh;

return circle;
}

	box(w, h,tex,{d=0,tx=0,ty=0,tz=0,rx=0,ry=0,rz=0}){
  		var mat = new THREE.MeshBasicMaterial({color: 0xffffff,map: tex} );
	  	var box = new THREE.BoxBufferGeometry( w, h, d );
		var mesh = new THREE.Mesh(box, mat);
		mesh.material.side = THREE.DoubleSide;
		mesh = this.transform(mesh,tx,ty,tz,rx,ry,rz,w,h,d);
		return mesh;
	}

special_box(w, h,tex,tex2,{d=0,tx=0,ty=0,tz=0,rx=0,ry=0,rz=0}){
var cubeMaterials = [
        new THREE.MeshBasicMaterial({ map: tex }), //right side
        new THREE.MeshBasicMaterial({ map: tex}), //left side
        new THREE.MeshBasicMaterial({ map: tex}), //top side
        new THREE.MeshBasicMaterial({ map: tex}), //bottom side
        new THREE.MeshBasicMaterial({ map: tex}), //front side
        new THREE.MeshBasicMaterial({ map: tex2}), //back side
    ];
 var mat = new THREE.MeshBasicMaterial({color: 0xffffff,map: tex} );
 var box = new THREE.BoxBufferGeometry( w, h, d );
var mesh = new THREE.Mesh(box, cubeMaterials);
mesh.material.side = THREE.DoubleSide;
mesh = this.transform(mesh,tx,ty,tz,rx,ry,rz,w,h,d);
return mesh;
}

cyclinder(w, h,tex,{d=0,tx=0,ty=0,tz=0,rx=0,ry=0,rz=0}){
	  var mat = new THREE.MeshBasicMaterial( {color: 0xffffff,map: tex} );
	  var cyclinder = new THREE.CylinderGeometry( w, h, d,32 );
	  var mesh = new THREE.Mesh(cyclinder, mat);
	  mesh.material.side = THREE.DoubleSide;
	  mesh = this.transform(mesh,tx,ty,tz,rx,ry,rz,w,h,d);
		return mesh;
	}

	half_cycl(w,h,tex,{d=0,tx=0,ty=0,tz=0,rx=0,ry=0,rz=0}){
		var mat = new THREE.MeshBasicMaterial( {color: 0xffffff, map: tex} );
		var half = new THREE.CylinderGeometry(w,w,d, 8, 2, false, 0, Math.PI);
		var mesh = new THREE.Mesh(half,mat);
		mesh.material.side = THREE.DoubleSide;
	  mesh = this.transform(mesh,tx,ty,tz,rx,ry,rz,w,h,d);
		return mesh;
	}


	transform(mesh,tx,ty,tz,rx,ry,rz,w,h,d){
			rx = Math.PI*rx/180;
	  	ry = Math.PI*ry/180;
	  	rz = Math.PI*rz/180;
		mesh.position.x -= this.W/2-w/2 - tx;
		mesh.position.y -= this.H/2-h/2 - ty;
		mesh.position.z += this.D/2-d/2 + tz;
		mesh.rotation.x += rx;
		mesh.rotation.y += ry;
		mesh.rotation.z += rz;
		return mesh;	
	}
}


var wal_tex,roof_tex,floor_tex,win_tex,car_tex;
var loader = new THREE.TextureLoader();
loader.load("images/wall.jpeg",
            function (texture) {
              wal_tex = texture;
            } );

loader = new THREE.TextureLoader();
loader.load("images/ceiling.jpeg",
            function (texture) {
              roof_tex = texture;
            } );

var loader = new THREE.TextureLoader();
loader.load("images/floor.jpeg",
            function (texture) {
              floor_tex = texture;
            } );

var loader = new THREE.TextureLoader();
loader.load("images/door.jpeg",
            function (texture) {
              door_tex = texture;
            } );
var loader = new THREE.TextureLoader();
loader.load("images/win_boardertex.jpeg",
            function (texture) {
              win_tex = texture;
            } );

var loader = new THREE.TextureLoader();
loader.load("images/cartain.png",
            function (texture) {
              cur_tex = texture;
            } );

var loader = new THREE.TextureLoader();
loader.load("images/table.jpg",
            function (texture) {
              table_tex = texture;
            } );

var loader = new THREE.TextureLoader();
loader.load("images/front.jpeg",
            function (texture) {
              front_tex = texture;
            } );
var loader = new THREE.TextureLoader();
loader.load("images/wood.jpg",
            function (texture) {
              wood_tex = texture;
            } );

var loader = new THREE.TextureLoader();
loader.load("images/clock.png",
            function (texture) {
              clock_tex = texture;
            } );

var loader = new THREE.TextureLoader();
loader.load("images/whiteboard.jpeg",
            function (texture) {
              board_tex = texture;
            } );

var loader = new THREE.TextureLoader();
loader.load("images/comp.jpg",
            function (texture) {
              comp_tex = texture;
            } );

var loader = new THREE.TextureLoader();
loader.load("images/walldec.jpeg",
            function (texture) {
              walldec_tex = texture;
            } );
var loader = new THREE.TextureLoader();
loader.load("images/tile.jpeg",
            function (texture) {
              tile_tex = texture;
            } );
var loader = new THREE.TextureLoader();
loader.load("images/hallceil.jpg",
            function (texture) {
              hall_tex = texture;
            } );


var loader = new THREE.TextureLoader();
loader.load("images/glassdoor.jpeg",
            function (texture) {
              door2_tex = texture;
            } );
var loader = new THREE.TextureLoader();
loader.load("images/IMG_3319.jpeg",
            function (texture) {
              door3_tex = texture;
            } );

var loader = new THREE.TextureLoader();
loader.load("images/brown.jpeg",
            function (texture) {
              brown_tex = texture;
            } );
var loader = new THREE.TextureLoader();
loader.load("images/wood2.jpeg",
            function (texture) {
              wood2_tex = texture;
            } );
var loader = new THREE.TextureLoader();
loader.load("images/bricks.jpeg",
            function (texture) {
              brick_tex = texture;
            } );

var loader = new THREE.TextureLoader();
loader.load("images/darkbrick.jpeg",
            function (texture) {
              dbrick_tex = texture;
            } );
var loader = new THREE.TextureLoader();
loader.load("images/yellowstone.jpeg",
            function (texture) {
              yellow_tex = texture;
            } );
var loader = new THREE.TextureLoader();
loader.load("images/glass.jpeg",
            function (texture) {
              glass_tex = texture;
            } );
var loader = new THREE.TextureLoader();
loader.load("images/left.jpg",
            function (texture) {
              left_tex = texture;
            } );
var loader = new THREE.TextureLoader();
loader.load("images/right.jpg",
            function (texture) {
              right_tex = texture;
            } );

var loader = new THREE.TextureLoader();
loader.load("images/greyleather.jpg",
            function (texture) {
              grey_tex = texture;
            } );
var loader = new THREE.TextureLoader();
loader.load("images/port.jpg",
            function (texture) {
              port_tex = texture;
            } );
var loader = new THREE.TextureLoader();
loader.load("images/square.jpg",
            function (texture) {
              square_tex = texture;
            } );
var loader = new THREE.TextureLoader();
loader.load("images/toliet.jpg",
            function (texture) {
              toliet_tex = texture;
            } );
var loader = new THREE.TextureLoader();
loader.load("images/water.JPG",
            function (texture) {
              water_tex = texture;
            } );
var loader = new THREE.TextureLoader();
loader.load("images/e.jpg",
            function (texture) {
              ele_tex = texture;
            } );
var loader = new THREE.TextureLoader();
loader.load("images/leftback.jpg",
            function (texture) {
              lb_tex = texture;
            } );
var loader = new THREE.TextureLoader();
loader.load("images/rightback.jpg",
            function (texture) {
              rb_tex = texture;
            } );
var loader = new THREE.TextureLoader();
loader.load("images/closet.jpg",
            function (texture) {
              closet_tex = texture;
            } );
var loader = new THREE.TextureLoader();
loader.load("images/bathrooom.JPG",
            function (texture) {
              bath_tex = texture;
            } );

var loader = new THREE.TextureLoader();
loader.load("images/poster.JPG",
            function (texture) {
              poster_tex = texture;
            } );
var loader = new THREE.TextureLoader();
loader.load("images/out.JPG",
            function (texture) {
              long_tex = texture;
            } );

var loader = new THREE.TextureLoader();
loader.load("images/tube.jpg",
            function (texture) {
              tube_tex = texture;
            } );
var loader = new THREE.TextureLoader();
loader.load("images/black.JPG",
            function (texture) {
              black_tex = texture;
            } );
var loader = new THREE.TextureLoader();
loader.load("images/outsidebrick.jpg",
            function (texture) {
              outside_tex = texture;
            } );
var loader = new THREE.TextureLoader();
loader.load("images/outsidebrick.jpg",
            function (texture) {
              woodtable_tex = texture;
            } );



