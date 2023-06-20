
var m;
class Groups {
//lab space
  group1(a,d,t) {
  	var H = 40, W = 90, D = d, K = 70;
		var group = new THREE.Group();  
		var room = new ROOM(W,H,D);


//left wall with door cut out
		mesh = room.box(2,H,wal_tex,{d:4,tx:2,tz:a});
		group.add(mesh);
		mesh = room.box(2,H,wal_tex,{d:D-10,tx:2,tz:a-15});
		group.add(mesh);
		mesh = room.box(2,11,wal_tex,{d:15,tx:2,ty:29,tz:a});
		group.add(mesh);
		mesh = room.box(2,11,wal_tex,{d:15,tx:2,ty:29,tz:a-105});
		group.add(mesh);
		mesh = room.box(2,H,wal_tex,{d:10,tx:2,tz:a-114});
		group.add(mesh);


		//right wall
		mesh = room.box(2,H,wal_tex,{d:D,tx:94,tz:a});
		group.add(mesh);

		//backwall
		mesh = room.box(W,H,wal_tex,{d:2*D/K,tx:4,tz:-d+a});
		group.add(mesh);

		//front wall
		mesh = room.box(W,H,wal_tex,{d:2*D/K,tx:4,tz:a});
		group.add(mesh);

		//white board
		mesh = room.box(70,25,board_tex,{tx:16,ty:8,tz:-5+a,d:1,});
		group.add(mesh);

		//floor
		mesh = room.box(W+5,.5,floor_tex,{d:D,tz:a});
		group.add(mesh);

		//ceiling
		mesh = room.box(W,.5,roof_tex,{d:d,ty:40,tx:4,tz:a});
		group.add(mesh);

//front door
    mesh = room.box(12,30,door_tex,{tx:-3,ty:0,tz:-8+a,d:3,ry:90});
    group.add(mesh);

//back door
    mesh = room.box(12,30,door_tex,{tx:-3,ty:0,tz:-d+a+10,d:5,ry:90});
    group.add(mesh);

 //left wall windows 
    var trans = -18;
    for(let i = 0; i < 6; i++){
	mesh = room.box(9,20,win_tex,{tx:0,ty:10,tz:trans+a,d:1,ry:90});
    group.add(mesh);
    mesh = room.plane(7,18,cur_tex,{tx:2,ty:11,tz:trans-.5 +a,ry:90});
    group.add(mesh);
    trans = trans + -15;
  }

//right wall windows 
var trans = -20;
    for(let i = 0; i < 7; i++){
	mesh = room.box(9,20,win_tex,{tx:89,ty:10,tz:trans+a,d:1,ry:90});
    group.add(mesh);
    mesh = room.plane(7,18,cur_tex,{tx:89,ty:11,tz:trans-.5+a,ry:90});
    group.add(mesh);
    trans = trans + -15;
  }
//backwall windows 
var trans = 4;
    for(let i = 0; i < 6; i++){
		mesh = room.box(9,20,win_tex,{tx:trans,ty:10,tz:-d+a+1,d:1,ry:0});
    group.add(mesh);
    mesh = room.plane(7,18,cur_tex,{tx:trans+1,ty:11,tz:-d+a+2,d:1,ry:0});
    group.add(mesh);
    trans = trans + 15;
  }

//pillars 
    mesh = room.box(4,H,wal_tex,{tx:4,tz:-70+a,d:6,});
	group.add(mesh);
		
	mesh = room.box(4,H,wal_tex,{tx:92,tz:-70+a,d:6,});
	group.add(mesh);

//left tables
var trans = -25	
for (let i = 0; i < t; i++){
mesh = room.box(40,1,table_tex,{tx:2,ty:8,tz:trans+a,d:10});
	group.add(mesh);
mesh = room.box(40,8,front_tex,{tx:2,tz:trans+a,d:1});
	group.add(mesh);
	trans = trans + -25;
}
//right tables
var trans = -25	
for (let i = 0; i < t; i++){
mesh = room.box(30,1,table_tex,{tx:60,ty:8,tz:trans+a,d:10});
	group.add(mesh);
mesh = room.box(30,8,front_tex,{tx:60,tz:trans+a,d:1});
	group.add(mesh);
	trans = trans + -25;
}

//teacher desk
mesh = room.box(15,1,wood_tex,{tx:75,ty:10,tz:-8+a,d:8,});
	group.add(mesh);

mesh = room.box(15,10,wood_tex,{tx:75,tz:-15+a,d:1});
	group.add(mesh);

mesh = room.box(1,10,wood_tex,{tx:75,tz:-15+a,d:-5});
	group.add(mesh);
mesh = room.box(1,10,wood_tex,{tx:89,tz:-15+a,d:-5});
	group.add(mesh);

//clock
	mesh = room.cyclinder(4,4,clock_tex,{tx:44,ty:30,tz:-d+a+1,d:1,ry:90,rx:90});
	group.add(mesh);

//computer right
	var trans = -30
	for(let i = 0; i < t; i++){
	var shift = 35;
    for(let i = 0; i < 4; i++){
	mesh = room.special_box(8,5,front_tex,comp_tex,{tx:shift,ty:10,tz:trans+a,d:.5});
	group.add(mesh);
	mesh = room.box(2,5,front_tex,{tx:shift+3,ty:8,tz:trans+1+a,d:1});
	group.add(mesh); 
	shift = shift - 10;
	}	
trans = trans + -25;
}

//computer left
	var trans = -30
	for(let i = 0; i < t; i++){
	var shift = 35;
    for(let i = 0; i < 2; i++){
	mesh = room.special_box(8,5,front_tex,comp_tex,{tx:40+shift,ty:10,tz:trans+a,d:.5});
	group.add(mesh);
	mesh = room.box(2,5,front_tex,{tx:43+shift,ty:8,tz:trans+1+a,d:1});
	group.add(mesh); 
	shift = shift - 15;
	}	
trans = trans + -25;
}
	
var mesh = room.box(.5,10,walldec_tex,{d:D-5,tx:1,tz:a-15});
		group.add(mesh);


	return group;
  }
//hallway floor and ceiling 
group2() {
	var H = .5, W = 55, D = 900, K = 70;
	var group2 = new THREE.Group();
		var floor = new ROOM(W,H,D);
		
		var mesh = floor.box(W,H,floor_tex,{tx:-68,ty:-20,tz:-300,d:D-25});
		group2.add(mesh);

    	var mesh = floor.half_cycl(27,27,hall_tex,{d:D+30,tx:-54,ty:7,tz:-200,rx:90,ry:90});
    	group2.add(mesh);

    	var mesh = floor.circle(28,28,glass_tex,{tx:-55,ty:2,tz:-301});
    	group2.add(mesh);

    	var mesh = floor.circle(28,28,glass_tex,{tx:-55,ty:2,tz:-298});
    	group2.add(mesh);

    	var mesh = floor.circle(28,28,glass_tex,{tx:-55,ty:2,tz:-1042});
    	group2.add(mesh);
    	
    	var mesh = floor.circle(28,28,glass_tex,{tx:-55,ty:2,tz:-1046});
    	group2.add(mesh);

 

//crosses
    	var mesh = floor.box(2,29,brown_tex,{d:8,tx:-43,ty:15,tz:-1041});
    	group2.add(mesh);

    	var mesh = floor.box(2,25,brown_tex,{d:8,tx:-28,ty:15,tz:-1041});
    	group2.add(mesh);

    	var mesh = floor.box(48,2,brown_tex,{d:8,tx:-66,ty:30,tz:-1041});
    	group2.add(mesh);

    	var mesh = floor.box(2,25,brown_tex,{d:8,tx:-58,ty:15,tz:-1041});
    	group2.add(mesh);


    	var mesh = floor.box(2,29,brown_tex,{d:8,tx:-43,ty:15,tz:-296});
    	group2.add(mesh);

    	var mesh = floor.box(2,25,brown_tex,{d:8,tx:-28,ty:15,tz:-296});
    	group2.add(mesh);

    	var mesh = floor.box(48,2,brown_tex,{d:8,tx:-66,ty:30,tz:-296});
    	group2.add(mesh);

    	var mesh = floor.box(2,25,brown_tex,{d:8,tx:-58,ty:15,tz:-296});
    	group2.add(mesh);

    	var mesh = floor.box(2,H,floor_tex,{d:10,tx:10,tz:-638});
		group2.add(mesh);

		var mesh = floor.box(2,H,wal_tex,{d:50,tx:0,tz:-638});
		group2.add(mesh);

	return group2;
	}
//left and right side office spaces	
group3(a,x,side,h,w,d,k){
	var H = h, W = w, D = d, K = k; 
		var group3 = new THREE.Group();  
		var room = new ROOM(W,H,D);
		//backwall
		mesh = room.box(W+2,H,wal_tex,{d:2*D/K,tx:x,tz:a-D});
		group3.add(mesh);

		//front wall
		mesh = room.box(W+2,H,wal_tex,{d:2*D/K,tx:x,tz:a});
		group3.add(mesh);

		//white board
		//mesh = room.box(70,25,board_tex,{tx:10,ty:8,tz:-5+a,d:1,});
		//group3.add(mesh);

		//floor
		mesh = room.box(W,.5,floor_tex,{d:D,tx:x,tz:a});
		group3.add(mesh);

		//ceiling
		mesh = room.box(W,.5,roof_tex,{d:D,tx:x,ty:H,tz:a});
		group3.add(mesh);



if(side == "left"){
		mesh = room.box(10,30,door_tex,{tx:x+(W-3),ty:0,tz:-15+a,d:1,ry:90});
    	group3.add(mesh);
    	console.log("left entered");
    	//leftwall
		var mesh = room.box(2,H,wal_tex,{d:D,tx:x,tz:a});
		group3.add(mesh);

		mesh = room.box(2,H,wal_tex,{d:10,tx:W+x,tz:a});
		group3.add(mesh);
		
		mesh = room.box(2,H,wal_tex,{d:65,tx:W+x,tz:a-20});
		group3.add(mesh);
		
		mesh = room.box(2,10,wal_tex,{d:10,tx:W+x,ty:30,tz:a-10});
		group3.add(mesh);

		//oustide wall decoration
		mesh = room.box(.5,10,walldec_tex,{tx:-48,d:D-3,tz:a-20});
		group3.add(mesh);

		mesh = room.box(.5,20,poster_tex,{tx:-48,ty:15,d:50,tz:a-25});
		group3.add(mesh);

		//table
		mesh = room.box(15,1,woodtable_tex,{d:40,tx:x+30,ty:10,tz:a-40});
		group3.add(mesh);
		mesh = room.box(30,1,woodtable_tex,{d:15,tx:x,ty:10,tz:a-65});
		group3.add(mesh);
		mesh = room.box(1,10,woodtable_tex,{d:40,tx:x+44,ty:0,tz:a-40});
		group3.add(mesh);
		mesh = room.box(15,10,woodtable_tex,{d:1,tx:x+30,ty:0,tz:a-40});
		group3.add(mesh);

		//professor chair
		mesh = room.box(10,1,woodtable_tex,{d:10,tx:x+10,ty:5,tz:a-50});
		group3.add(mesh);
		mesh = room.box(1,10,woodtable_tex,{d:10,tx:x+10,ty:5,tz:a-50});
		group3.add(mesh);
		mesh = room.box(1,5,woodtable_tex,{d:1,tx:x+10,ty:0,tz:a-50});
		group3.add(mesh);
  		mesh = room.box(1,5,woodtable_tex,{d:1,tx:x+10,ty:0,tz:a-58});
		group3.add(mesh);
		mesh = room.box(1,5,woodtable_tex,{d:1,tx:x+19,ty:0,tz:a-50});
		group3.add(mesh);
  		mesh = room.box(1,5,woodtable_tex,{d:1,tx:x+19,ty:0,tz:a-58});
		group3.add(mesh);

		// student chair
		mesh = room.box(10,1,woodtable_tex,{d:10,tx:x+50,ty:5,tz:a-50});
		group3.add(mesh);
		mesh = room.box(1,10,woodtable_tex,{d:10,tx:x+60,ty:5,tz:a-50});
		group3.add(mesh);
		mesh = room.box(1,5,woodtable_tex,{d:1,tx:x+50,ty:0,tz:a-50});
		group3.add(mesh);
  		mesh = room.box(1,5,woodtable_tex,{d:1,tx:x+50,ty:0,tz:a-58});
		group3.add(mesh);
		mesh = room.box(1,5,woodtable_tex,{d:1,tx:x+59,ty:0,tz:a-50});
		group3.add(mesh);
  		mesh = room.box(1,5,woodtable_tex,{d:1,tx:x+59,ty:0,tz:a-58});
		group3.add(mesh);

		//windows
		mesh = room.box(25,20,win_tex,{tx:x-10,ty:10,tz:a-30,d:1,ry:90});
    	group3.add(mesh);
    	mesh = room.plane(20,18,cur_tex,{tx:x-7,ty:11,tz:a-30,ry:90});
    	group3.add(mesh);
    	mesh = room.box(25,20,win_tex,{tx:x-10,ty:10,tz:a-50,d:1,ry:90});
    	group3.add(mesh);
    	mesh = room.plane(20,18,cur_tex,{tx:x-7,ty:11,tz:a-50,ry:90});
    	group3.add(mesh);

    	//book shelf 1
    	mesh = room.box(25,1,wood_tex,{d:10,tx:x+10,ty:0,tz:a-2});
		group3.add(mesh);
		mesh = room.box(25,1,wood_tex,{d:10,tx:x+10,ty:8,tz:a-2});
		group3.add(mesh);
		mesh = room.box(25,1,wood_tex,{d:10,tx:x+10,ty:16,tz:a-2});
		group3.add(mesh);
		mesh = room.box(25,1,wood_tex,{d:10,tx:x+10,ty:24,tz:a-2});
		group3.add(mesh);
		mesh = room.box(25,1,wood_tex,{d:10,tx:x+10,ty:32,tz:a-2});
		group3.add(mesh);
		mesh = room.box(25,1,wood_tex,{d:10,tx:x+10,ty:38,tz:a-2});
		group3.add(mesh);
		mesh = room.box(1,40,wood_tex,{d:10,tx:x+10,ty:0,tz:a-2});
		group3.add(mesh);
		mesh = room.box(1,40,wood_tex,{d:10,tx:x+35,ty:0,tz:a-2});
		group3.add(mesh);

		//book shelf 2
    	mesh = room.box(25,1,wood_tex,{d:10,tx:x+45,ty:0,tz:a-2});
		group3.add(mesh);
		mesh = room.box(25,1,wood_tex,{d:10,tx:x+45,ty:8,tz:a-2});
		group3.add(mesh);
		mesh = room.box(25,1,wood_tex,{d:10,tx:x+45,ty:16,tz:a-2});
		group3.add(mesh);
		mesh = room.box(25,1,wood_tex,{d:10,tx:x+45,ty:24,tz:a-2});
		group3.add(mesh);
		mesh = room.box(25,1,wood_tex,{d:10,tx:x+45,ty:32,tz:a-2});
		group3.add(mesh);
		mesh = room.box(25,1,wood_tex,{d:10,tx:x+45,ty:38,tz:a-2});
		group3.add(mesh);
		mesh = room.box(1,40,wood_tex,{d:10,tx:x+45,ty:0,tz:a-2});
		group3.add(mesh);
		mesh = room.box(1,40,wood_tex,{d:10,tx:x+70,ty:0,tz:a-2});
		group3.add(mesh);



}


if(side == "right"){
  
  mesh = room.box(15,30,door_tex,{tx:-6,ty:0,tz:-15+a,d:1,ry:90});
  group3.add(mesh);
  
  
	
  var mesh = room.box(.5,10,walldec_tex,{d:D+35,tx:x-.5,tz:a-20});
  group3.add(mesh);
  
  console.log("right entered");
  //right wall
		mesh = room.box(2,H,wal_tex,{d:D,tx:W+x,tz:a});
		group3.add(mesh);
		mesh = room.box(2,H,wal_tex,{d:10,tx:x,tz:a});
		group3.add(mesh);
		mesh = room.box(2,H,wal_tex,{d:D-10,tx:x,tz:a-20});
		group3.add(mesh);
		mesh = room.box(2,10,wal_tex,{d:10,tx:x,ty:30,tz:a-10});
		group3.add(mesh);
//table
		mesh = room.box(15,1,door_tex,{d:40,tx:x+50,ty:10,tz:a-40});
		group3.add(mesh);
		mesh = room.box(30,1,door_tex,{d:15,tx:x+60,ty:10,tz:a-65});
		group3.add(mesh);
		mesh = room.box(1,10,front_tex,{d:40,tx:x+50,ty:0,tz:a-40});
		group3.add(mesh);
		mesh = room.box(15,10,front_tex,{d:1,tx:x+50,ty:0,tz:a-40});
		group3.add(mesh);

//windows
		mesh = room.box(25,20,win_tex,{tx:x+77,ty:10,tz:a-30,d:1,ry:90});
    	group3.add(mesh);
    	mesh = room.plane(20,18,cur_tex,{tx:x+78,ty:11,tz:a-30,ry:90});
    	group3.add(mesh);
    	mesh = room.box(25,20,win_tex,{tx:x+77,ty:10,tz:a-50,d:1,ry:90});
    	group3.add(mesh);
    	mesh = room.plane(20,18,cur_tex,{tx:x+78,ty:11,tz:a-50,ry:90});
    	group3.add(mesh);	
//

	}
return group3;
 }

//Entrance
group4(){
	var H = 40, W = 235, D = 280, K = 50, a = 310;
	var group4 = new THREE.Group();  
	var room = new ROOM(W,H,D);
	//floor
	var mesh = room.box(W-2,.5,tile_tex,{d:D+20,tx:-68,tz:a-3});
	group4.add(mesh);
	var mesh = room.box(W-2,.5,roof_tex,{d:D-70,tx:-68,ty:40,tz:a-3});
	group4.add(mesh);

	var mesh = room.box(92,.5,roof_tex,{d:100,tx:76,ty:40,tz:100});
	group4.add(mesh);


	var mesh = room.box(80,.5,tile_tex,{d:135,tx:-148,tz:342});
	group4.add(mesh);
	
	var mesh = room.box(80,.5,win_tex,{d:135,tx:-148,ty:40,tz:342});
	group4.add(mesh);
	
	//right wall
	var mesh = room.box(3,H,wal_tex,{d:D-50,tx:162,tz:240});
		group4.add(mesh);

	//segmented wall
	var mesh = room.box(3,H,wal_tex,{d:10,tx:78,tz:20});
	group4.add(mesh);

	var mesh = room.box(3,H-10,door_tex,{d:15,tx:78,tz:35});
	group4.add(mesh);
	var mesh = room.box(3,H-10,door_tex,{d:15,tx:78,tz:50});
	group4.add(mesh);
	var mesh = room.box(3,10,wal_tex,{d:30,tx:78,ty:30,tz:50});
	group4.add(mesh);
	var mesh = room.box(30,H,wal_tex,{d:2,tx:78,tz:52});
	group4.add(mesh);
	var mesh = room.box(3,H,wal_tex,{d:45,tx:108,tz:52});
	group4.add(mesh);

	//bathroom section
	var mesh = room.box(3,H,wal_tex,{d:10,tx:78,tz:60});
	group4.add(mesh);
	var mesh = room.box(3,H-10,door_tex,{d:15,tx:80,tz:75});
	group4.add(mesh);
	var mesh = room.box(3,10,wal_tex,{d:15,tx:80,ty:30,tz:75});
	group4.add(mesh);
	var mesh = room.box(85,H,wal_tex,{d:2,tx:78,tz:76});
	group4.add(mesh);
	var mesh = room.box(2,H-10,yellow_tex,{d:40,tx:111,tz:50});
	group4.add(mesh);
	var mesh = room.box(18,H-20,yellow_tex,{d:2,tx:112,ty:7,tz:50});
	group4.add(mesh);
	var mesh = room.box(2,H-10,yellow_tex,{d:40,tx:129,tz:50});
	group4.add(mesh);
	var mesh = room.box(18,H-20,yellow_tex,{d:2,tx:127,ty:7,tz:50});
	group4.add(mesh);
	var mesh = room.box(2,H-10,yellow_tex,{d:40,tx:144,tz:50});
	group4.add(mesh);
	var mesh = room.box(18,H-20,yellow_tex,{d:2,tx:143,ty:7,tz:50});
	group4.add(mesh);
	var mesh = room.box(2,H-10,yellow_tex,{d:40,tx:160,tz:50});
	group4.add(mesh);
		

	//toliet
		var mesh = room.box(10,2,toliet_tex,{d:15,tx:115,ty:8,tz:25});
		group4.add(mesh);
		var mesh = room.box(10,2,toliet_tex,{d:15,tx:132,ty:8,tz:25});
		group4.add(mesh);
		var mesh = room.box(10,2,toliet_tex,{d:15,tx:147,ty:8,tz:25});
		group4.add(mesh);
		var mesh = room.box(30,2,table_tex,{d:10,tx:135,ty:12,tz:74});
		group4.add(mesh);
		
		var mesh = room.box(148,H,wal_tex,{d:2,tx:-70,tz:310});
		group4.add(mesh);
//closet and water fountain
var mesh = room.box(3,H,wal_tex,{d:10,tx:78,tz:85});
	group4.add(mesh);
	var mesh = room.box(3,H-10,door_tex,{d:15,tx:78,tz:100});
	group4.add(mesh);
	var mesh = room.box(3,H-10,door_tex,{d:15,tx:78,tz:115});
	group4.add(mesh);
	var mesh = room.box(3,10,wal_tex,{d:30,tx:78,ty:30,tz:115});
	group4.add(mesh);
	var mesh = room.box(30,H,wal_tex,{d:2,tx:78,tz:117});
	group4.add(mesh);
	var mesh = room.box(3,H,wal_tex,{d:45,tx:108,tz:117});
	group4.add(mesh);
	var mesh = room.box(3,H,wal_tex,{d:20,tx:90,tz:142});
	group4.add(mesh);
	//water fountain
	var mesh = room.box(10,20,water_tex,{d:15,tx:85,ty:10,tz:139});
	group4.add(mesh);
	var mesh = room.box(86,H,wal_tex,{d:2,tx:78,tz:142});
	group4.add(mesh);
//elavator
	var mesh = room.box(10,H,wal_tex,{d:14,tx:78,tz:154});
	group4.add(mesh);
	var mesh = room.box(3,H-10,win_tex,{d:30,tx:86,tz:184});
	group4.add(mesh);
	var mesh = room.box(40,H,ele_tex,{d:2,tx:86,tz:154});
	group4.add(mesh);
	var mesh = room.box(2,H,ele_tex,{d:30,tx:126,tz:185});
	group4.add(mesh);
	var mesh = room.box(40,H,ele_tex,{d:2,tx:86,tz:185});
	group4.add(mesh);
	var mesh = room.box(10,H,wal_tex,{d:60,tx:78,tz:245});
	group4.add(mesh);
	var mesh = room.box(7,10,wal_tex,{d:30,tx:79,ty:30,tz:184});
	group4.add(mesh);
	var mesh = room.box(88,H,wal_tex,{d:3,tx:78,tz:245});
	group4.add(mesh);

//door to stairway
	var mesh = room.box(3,H,wal_tex,{d:20,tx:78,tz:310});
	group4.add(mesh);
	var mesh = room.box(3,H-10,right_tex,{d:25,tx:78,tz:290});
	group4.add(mesh);
	var mesh = room.box(3,H-10,left_tex,{d:25,tx:78,tz:270});
	group4.add(mesh);
	var mesh = room.box(3,10,wal_tex,{d:50,tx:78,ty:30,tz:290});
	group4.add(mesh);


//wood floor
	var mesh = room.box(90,4,wood2_tex,{d:80,tx:-68,tz:180});
	group4.add(mesh);
	var mesh = room.box(85,4,wood2_tex,{d:80,tx:-68,ty:4,tz:180});
	group4.add(mesh);
	var mesh = room.box(40,8,wood2_tex,{d:85,tx:-108,ty:0,tz:205});
	group4.add(mesh);
	//steps
	var mesh = room.box(7,15,wood2_tex,{d:25,tx:15,ty:4,tz:180});
	group4.add(mesh);
	var mesh = room.box(7,15,wood2_tex,{d:25,tx:15,ty:4,tz:120});
	group4.add(mesh);

//back bench
	var mesh = room.box(7,15,wood2_tex,{d:25,tx:-32,ty:4,tz:120});
	group4.add(mesh);
	var mesh = room.box(47,15,wood2_tex,{d:2,tx:-32,ty:4,tz:102});
	group4.add(mesh);
	var mesh = room.box(40,4,wood2_tex,{d:10,tx:-25,ty:8,tz:118});
	group4.add(mesh);

//front bench
	var mesh = room.box(90,15,wood2_tex,{d:2,tx:-68,ty:4,tz:180});
	group4.add(mesh);
	var mesh = room.box(7,15,wood2_tex,{d:15,tx:-68,ty:4,tz:178});
	group4.add(mesh);
	var mesh = room.box(83,4,wood2_tex,{d:12,tx:-68,ty:8,tz:178});
	group4.add(mesh);

// tables 
	var mesh = room.cyclinder(10,1,table_tex,{d:2,tx:-25,ty:15,tz:140});
	group4.add(mesh);
	var mesh = room.cyclinder(10,1,table_tex,{d:2,tx:-5,ty:15,tz:140});
	group4.add(mesh);
	var mesh = room.box(2,10,front_tex,{d:2,tx:-1,ty:5,tz:140});
	group4.add(mesh);
	var mesh = room.box(2,10,front_tex,{d:2,tx:-22,ty:5,tz:140});
	group4.add(mesh);
	
	var mesh = room.box(2,10,front_tex,{d:2,tx:-80,ty:5,tz:140});
	group4.add(mesh);
	
	var mesh = room.cyclinder(10,1,table_tex,{d:2,tx:-85,ty:15,tz:140});
	group4.add(mesh);

//brick pillar
	var mesh = room.box(20,45,brick_tex,{d:20,tx:-88,ty:0,tz:118});
	group4.add(mesh);

//dark brick pillar
	var mesh = room.box(37,40,dbrick_tex,{d:7,tx:-68,ty:4,tz:110});
	group4.add(mesh);

//ramp
	var mesh = room.plane(110,26,wood2_tex,{d:1,tx:-88,ty:-7,tz:195,rx:90,ry:-3});
	group4.add(mesh);
	var mesh = room.box(130,15,wood2_tex,{d:2,tx:-108,ty:0,tz:205});
	group4.add(mesh);

//window bench 
	var mesh = room.box(15,15,wood2_tex,{d:7,tx:-105,ty:4,tz:168});
	group4.add(mesh);
	var mesh = room.box(15,15,wood2_tex,{d:7,tx:-105,ty:4,tz:140});
	group4.add(mesh);
	var mesh = room.box(2,15,wood2_tex,{d:35,tx:-105,ty:4,tz:168});
	group4.add(mesh);
	var mesh = room.box(15,4,wood2_tex,{d:35,tx:-105,ty:8,tz:168});
	group4.add(mesh);


//windows
var mesh = room.box(20,20,yellow_tex,{d:5,tx:-108,ty:0,tz:120});
	group4.add(mesh);
var mesh = room.box(5,20,yellow_tex,{d:95,tx:-113,ty:0,tz:210});
	group4.add(mesh);
var mesh = room.box(40,20,yellow_tex,{d:5,tx:-108,ty:0,tz:210});
	group4.add(mesh);
var mesh = room.box(20,2,win_tex,{d:5,tx:-108,ty:20,tz:120});
	group4.add(mesh);
var mesh = room.box(5,2,win_tex,{d:95,tx:-113,ty:20,tz:210});
	group4.add(mesh);
var mesh = room.box(40,2,win_tex,{d:5,tx:-108,ty:20,tz:210});
	group4.add(mesh);
var mesh = room.box(23,20,glass_tex,{d:2,tx:-111,ty:20,tz:118});
	group4.add(mesh);
var mesh = room.box(2,20,glass_tex,{d:95,tx:-111,ty:20,tz:210});
	group4.add(mesh);
var mesh = room.box(40,20,glass_tex,{d:5,tx:-108,ty:20,tz:208});
	group4.add(mesh);
var mesh = room.box(20,4,win_tex,{d:5,tx:-108,ty:40,tz:120});
	group4.add(mesh);
var mesh = room.box(5,4,win_tex,{d:95,tx:-113,ty:40,tz:210});
	group4.add(mesh);
var mesh = room.box(40,4,win_tex,{d:5,tx:-108,ty:40,tz:210});
	group4.add(mesh);
	//posts
	var mesh = room.box(4,20,win_tex,{d:4,tx:-112,ty:20,tz:120});
	group4.add(mesh);
	var mesh = room.box(4,20,win_tex,{d:4,tx:-95,ty:20,tz:120});
	group4.add(mesh);
	var mesh = room.box(4,20,win_tex,{d:4,tx:-112,ty:20,tz:150});
	group4.add(mesh);
	var mesh = room.box(4,20,win_tex,{d:4,tx:-112,ty:20,tz:180});
	group4.add(mesh);
	var mesh = room.box(4,20,win_tex,{d:4,tx:-90,ty:20,tz:210});
	group4.add(mesh);
	var mesh = room.box(4,24,win_tex,{d:4,tx:-70,ty:20,tz:210});
	group4.add(mesh);
	var mesh = room.box(4,20,win_tex,{d:4,tx:-112,ty:20,tz:210});
	group4.add(mesh);

// entrance outside
var mesh = room.box(40,5,win_tex,{d:5,tx:-148,ty:0,tz:210});
	group4.add(mesh);
var mesh = room.box(40,2,win_tex,{d:2,tx:-148,ty:15,tz:210});
	group4.add(mesh);
var mesh = room.box(40,5,win_tex,{d:5,tx:-148,ty:40,tz:210});
	group4.add(mesh);
var mesh = room.box(40,35,glass_tex,{d:2,tx:-153,ty:5,tz:210});
	group4.add(mesh);

var mesh = room.box(5,5,win_tex,{d:40,tx:-153,ty:0,tz:245});
	group4.add(mesh);
var mesh = room.box(2,2,win_tex,{d:40,tx:-153,ty:15,tz:245});
	group4.add(mesh);
var mesh = room.box(8,5,win_tex,{d:70,tx:-156,ty:40,tz:275});
	group4.add(mesh);
var mesh = room.box(2,40,glass_tex,{d:40,tx:-152,ty:0,tz:245});
	group4.add(mesh);

var mesh = room.box(5,5,win_tex,{d:40,tx:-153,ty:0,tz:345});
	group4.add(mesh);
var mesh = room.box(2,2,win_tex,{d:40,tx:-153,ty:15,tz:345});
	group4.add(mesh);
var mesh = room.box(2,40,glass_tex,{d:40,tx:-152,ty:0,tz:345});
	group4.add(mesh);
var mesh = room.box(8,5,win_tex,{d:70,tx:-156,ty:40,tz:345});
	group4.add(mesh);

var mesh = room.box(80,5,win_tex,{d:5,tx:-153,ty:0,tz:345});
	group4.add(mesh);
var mesh = room.box(82,2,win_tex,{d:2,tx:-153,ty:15,tz:345});
	group4.add(mesh);
var mesh = room.box(82,40,glass_tex,{d:2,tx:-153,ty:0,tz:344});
	group4.add(mesh);
var mesh = room.box(80,5,win_tex,{d:5,tx:-153,ty:40,tz:345});
	group4.add(mesh);

var mesh = room.box(5,5,win_tex,{d:40,tx:-73,ty:0,tz:345});
	group4.add(mesh);
var mesh = room.box(2,2,win_tex,{d:40,tx:-70,ty:15,tz:345});
	group4.add(mesh);
var mesh = room.box(5,5,win_tex,{d:135,tx:-73,ty:40,tz:345});
	group4.add(mesh);
var mesh = room.box(2,40,glass_tex,{d:38,tx:-72,ty:0,tz:343});
	group4.add(mesh);

//posts
	var mesh = room.box(2,40,win_tex,{d:2,tx:-112,ty:0,tz:348});
	group4.add(mesh);
	var mesh = room.box(2,40,win_tex,{d:2,tx:-137,ty:0,tz:348});
	group4.add(mesh);
	var mesh = room.box(2,40,win_tex,{d:2,tx:-87,ty:0,tz:348});
	group4.add(mesh);
	var mesh = room.box(2,40,win_tex,{d:2,tx:-70,ty:0,tz:345});
	group4.add(mesh);
	var mesh = room.box(2,40,win_tex,{d:2,tx:-155,ty:0,tz:342});
	group4.add(mesh);
	var mesh = room.box(2,40,win_tex,{d:2,tx:-155,ty:0,tz:320});
	group4.add(mesh);
	var mesh = room.box(2,40,win_tex,{d:2,tx:-155,ty:0,tz:310});
	group4.add(mesh);
	//mid door post
	var mesh = room.box(2,45,win_tex,{d:2,tx:-152,ty:0,tz:280});
	group4.add(mesh);
	var mesh = room.box(2,40,win_tex,{d:2,tx:-152,ty:0,tz:245});
	group4.add(mesh);
	var mesh = room.box(2,40,win_tex,{d:2,tx:-153,ty:0,tz:230});
	group4.add(mesh);
	var mesh = room.box(2,40,win_tex,{d:2,tx:-153,ty:0,tz:210});
	group4.add(mesh);
	var mesh = room.box(2,40,win_tex,{d:2,tx:-128,ty:0,tz:203});
	group4.add(mesh);

//doors 
var mesh = room.box(2,40,left_tex,{d:35,tx:-152,ty:0,tz:277});
	group4.add(mesh);
var mesh = room.box(2,40,right_tex,{d:35,tx:-152,ty:0,tz:309});
	group4.add(mesh);

var mesh = room.box(2,40,left_tex,{d:42,tx:-70,ty:0,tz:260});
	group4.add(mesh);
var mesh = room.box(2,40,right_tex,{d:42,tx:-70,ty:0,tz:300});
	group4.add(mesh);

var mesh = room.box(2,40,right_tex,{d:30,tx:-140,ty:0,tz:309});
	group4.add(mesh);

var mesh = room.box(4,40,win_tex,{d:4,tx:-70,ty:0,tz:214});
	group4.add(mesh);
var mesh = room.box(4,40,win_tex,{d:4,tx:-70,ty:0,tz:305});
	group4.add(mesh);
var mesh = room.box(4,40,win_tex,{d:4,tx:-72,ty:0,tz:265});
	group4.add(mesh);

//sofa chairs
var mesh = room.box(20,8,grey_tex,{d:20,tx:-50,ty:0,tz:235});
	group4.add(mesh);
var mesh = room.box(20,10,grey_tex,{d:5,tx:-50,ty:8,tz:220});
	group4.add(mesh);
var mesh = room.box(5,5,grey_tex,{d:15,tx:-50,ty:8,tz:235});
	group4.add(mesh);
var mesh = room.box(5,5,grey_tex,{d:15,tx:-35,ty:8,tz:235});
	group4.add(mesh);

var mesh = room.box(20,8,grey_tex,{d:20,tx:-50+40,ty:0,tz:235});
	group4.add(mesh);
var mesh = room.box(20,10,grey_tex,{d:5,tx:-50+40,ty:8,tz:220});
	group4.add(mesh);
var mesh = room.box(5,5,grey_tex,{d:15,tx:-50+40,ty:8,tz:235});
	group4.add(mesh);
var mesh = room.box(5,5,grey_tex,{d:15,tx:-35+40,ty:8,tz:235});
	group4.add(mesh);

//bookshelf
var x = -25, a = 305; 
		mesh = room.box(25,1,wood_tex,{d:10,tx:x+10,ty:0,tz:a});
		group4.add(mesh);
		mesh = room.box(25,1,wood_tex,{d:10,tx:x+10,ty:8,tz:a});
		group4.add(mesh);
		mesh = room.box(25,1,wood_tex,{d:10,tx:x+10,ty:16,tz:a});
		group4.add(mesh);
		mesh = room.box(1,18,wood_tex,{d:10,tx:x+10,ty:0,tz:a});
		group4.add(mesh);
		mesh = room.box(1,18,wood_tex,{d:10,tx:x+35,ty:0,tz:a});
		group4.add(mesh);

//portrait and windows
	mesh = room.box(18,22,port_tex,{d:2,tx:x+13,ty:17,tz:a});
		group4.add(mesh);

	mesh = room.box(25,25,square_tex,{d:5,tx:x+38,ty:10,tz:a+7});
		group4.add(mesh);
	mesh = room.box(25,25,square_tex,{d:5,tx:x-25,ty:10,tz:a+7});
		group4.add(mesh);
return group4;
}
//hallway doors
group5(){
	var H = 40, W = 90, D = 80, K = 50;
		var group5 = new THREE.Group();  
		var doors = new ROOM(W,H,D);
		//front right side
		var mesh = doors.special_box(27,32,door2_tex,door3_tex,{d:1,tx:-24,tz:112});
    	group5.add(mesh);
    	
    	//front left side
    	var frontright = doors.special_box(27,32,door3_tex,door2_tex,{d:1,tx:-50,tz:112});
    	group5.add(frontright);
    	rotatex = frontright;
		
		var mesh = doors.box(60,8,brown_tex,{d:2,tx:-50,ty:32,tz:114});
    	group5.add(mesh);

    	//back left 
    	var mesh = doors.special_box(25,32,door3_tex,door2_tex,{d:1,tx:-50,tz:-638});
    	group5.add(mesh);
    	//back right
		var mesh = doors.special_box(25,32,door2_tex,door3_tex,{d:1,tx:-25,tz:-638});
    	group5.add(mesh);

    	var mesh = doors.box(55,8,brown_tex,{d:2,tx:-50,ty:32,tz:-638});
    	group5.add(mesh)

return group5;
  }


//big room at end of hall
group6(a,d){
	var H = 40, W = 105, D = d, K = 70;
		var group6 = new THREE.Group();  
		var room = new ROOM(W,H,D);

//left wall with door cut out
		var mesh = room.box(2,H,wal_tex,{d:D-55,tx:10,tz:a});
		group6.add(mesh);
	

		mesh = room.box(1,25,board_tex,{tx:12,ty:8,tz:-5+a,d:200});
		group6.add(mesh);

		//right wall
		mesh = room.box(2,H,wal_tex,{d:D,tx:W+1,tz:a});
		group6.add(mesh);

		//backwall
		mesh = room.box(W-7,H,wal_tex,{d:2*D/K,tx:10,tz:-d+a});
		group6.add(mesh);

		//front wall
		mesh = room.box(W-7,H,wal_tex,{d:2*D/K,tx:10,tz:a});
		group6.add(mesh);

		//floor
		mesh = room.box(W-10,.5,floor_tex,{d:D,tx:10,tz:a});
		group6.add(mesh);

		//ceiling
		mesh = room.box(W-10,.5,roof_tex,{d:d,tx:10,ty:40,tz:a});
		group6.add(mesh);
		mesh = room.box(50,.5,win_tex,{d:90,tx:-180,ty:40,tz:220});
		group6.add(mesh);

//front door
    mesh = room.box(17,30,lb_tex,{tx:3,ty:0,tz:a-210,d:1,ry:90});
    group6.add(mesh);
    mesh = room.box(17,30,rb_tex,{tx:3,ty:0,tz:a-225,d:1,ry:90});
    group6.add(mesh);
    mesh = room.box(40,H,wal_tex,{tx:-9,ty:0,tz:a-255,d:2,ry:90});
    group6.add(mesh);
    mesh = room.box(35,10,wal_tex,{tx:-6,ty:30,tz:a-215,d:2,ry:90});
    group6.add(mesh);
    
//right wall windows 
var trans = -20;
    for(let i = 0; i < 9; i++){
	mesh = room.box(9,20,win_tex,{tx:W-5,ty:10,tz:trans+a,d:1,ry:90});
    group6.add(mesh);
    mesh = room.plane(7,18,cur_tex,{tx:W-5,ty:11,tz:trans-.5+a,ry:90});
    group6.add(mesh);
    trans = trans + -30;
  }
//backwall windows 
var trans = 14;
    for(let i = 0; i < 6; i++){
		mesh = room.box(9,20,win_tex,{tx:trans,ty:10,tz:-d+a+1,d:1,ry:0});
    group6.add(mesh);
    mesh = room.plane(7,18,cur_tex,{tx:trans+1,ty:11,tz:-d+a+2,d:1,ry:0});
    group6.add(mesh);
    trans = trans + 15;
  }

//back set of tables
mesh = room.box(10,1,wood2_tex,{tx:20,ty:8,tz:a-20,d:70});
	group6.add(mesh);
mesh = room.box(2,8,wood2_tex,{tx:20,ty:0,tz:a-20,d:70});
	group6.add(mesh);

mesh = room.box(10,1,wood2_tex,{tx:40,ty:8,tz:a-20,d:70});
	group6.add(mesh);
mesh = room.box(2,8,wood2_tex,{tx:40,ty:0,tz:a-20,d:70});
	group6.add(mesh);

mesh = room.box(10,1,wood2_tex,{tx:60,ty:8,tz:a-20,d:70});
	group6.add(mesh);

mesh = room.box(2,8,wood2_tex,{tx:60,ty:0,tz:a-20,d:70});
	group6.add(mesh);

mesh = room.box(10,1,wood2_tex,{tx:80,ty:8,tz:a-20,d:70});
	group6.add(mesh);
mesh = room.box(2,8,wood2_tex,{tx:80,ty:0,tz:a-20,d:70});
	group6.add(mesh);

//front set of tables
mesh = room.box(10,1,wood2_tex,{tx:20,ty:8,tz:a-100,d:70});
	group6.add(mesh);
mesh = room.box(2,8,wood2_tex,{tx:20,ty:0,tz:a-100,d:70});
	group6.add(mesh);

mesh = room.box(10,1,wood2_tex,{tx:40,ty:8,tz:a-100,d:70});
	group6.add(mesh);
mesh = room.box(2,8,wood2_tex,{tx:40,ty:0,tz:a-100,d:70});
	group6.add(mesh);

mesh = room.box(10,1,wood2_tex,{tx:60,ty:8,tz:a-100,d:70});
	group6.add(mesh);

mesh = room.box(2,8,wood2_tex,{tx:60,ty:0,tz:a-100,d:70});
	group6.add(mesh);

mesh = room.box(10,1,wood2_tex,{tx:80,ty:8,tz:a-100,d:70});
	group6.add(mesh);
mesh = room.box(2,8,wood2_tex,{tx:80,ty:0,tz:a-100,d:70});
	group6.add(mesh);


var mesh = room.box(.5,10,walldec_tex,{d:d-113,tx:9,tz:a-45});
		group6.add(mesh);
mesh = room.box(.5,20,poster_tex,{tx:9,ty:15,d:60,tz:a-60});
		group6.add(mesh);
mesh = room.box(.5,20,poster_tex,{tx:9,ty:15,d:80,tz:a+60});
		group6.add(mesh);

var mesh = room.box(2,H,wal_tex,{d:70,tx:9,tz:a+200});
		group6.add(mesh);

var mesh = room.box(2,30,closet_tex,{d:20,tx:8,tz:a+200});
		group6.add(mesh);

    
return group6;

}
//Back entrance
group7(){
	var H = 40, W = 235, D = 280, K = 50, a = 310;
	var group7 = new THREE.Group();  
	var room = new ROOM(W,H,D);
	//floor
	var mesh = room.box(240,.5,tile_tex,{tx:-68,ty:0,tz:-820,d:260});
		group7.add(mesh);
	var mesh = room.box(240,.5,roof_tex,{tx:-68,ty:40,tz:-820,d:260});
		group7.add(mesh);
	//wall left
	var mesh = room.box(4,H,wal_tex,{d:20,tx:75,tz:-835});
		group7.add(mesh);
	var mesh = room.box(2,30,bath_tex,{d:20,tx:77,tz:-855});
		group7.add(mesh);
	var mesh = room.box(4,10,wal_tex,{d:20,ty:30,tx:75,tz:-855});
		group7.add(mesh);
	var mesh = room.box(4,H,wal_tex,{d:20,tx:75,tz:-875});
		group7.add(mesh);
	//closet door
	var mesh = room.box(2,30,closet_tex,{d:40,tx:75,tz:-895});
		group7.add(mesh);
	var mesh = room.box(95,H,wal_tex,{d:2,tx:75,tz:-937});
		group7.add(mesh);
	var mesh = room.box(2,H,wal_tex,{d:40,tx:105,tz:-900});
		group7.add(mesh);
	var mesh = room.box(4,10,wal_tex,{d:40,tx:75,ty:30,tz:-900});
		group7.add(mesh);
	var mesh = room.box(30,H,wal_tex,{d:2,tx:75,tz:-900});
		group7.add(mesh);
	var mesh = room.box(2,H,wal_tex,{d:200,tx:170,tz:-840});
		group7.add(mesh);

//bathroom stalls 
	var mesh = room.box(1,28,yellow_tex,{d:40,tx:107,tz:-900});
		group7.add(mesh);
	var mesh = room.box(15,20,yellow_tex,{d:1,ty:8,tx:107,tz:-900});
		group7.add(mesh);
	var mesh = room.box(10,2,toliet_tex,{d:15,tx:110,ty:8,tz:-910});
		group7.add(mesh);


	var mesh = room.box(1,28,yellow_tex,{d:40,tx:122,tz:-900});
		group7.add(mesh);
	var mesh = room.box(15,20,yellow_tex,{d:1,ty:8,tx:122,tz:-900});
		group7.add(mesh);
	var mesh = room.box(10,2,toliet_tex,{d:15,tx:125,ty:8,tz:-910});
		group7.add(mesh);
	
	var mesh = room.box(1,28,yellow_tex,{d:40,tx:137,tz:-900});
		group7.add(mesh);
	var mesh = room.box(15,20,yellow_tex,{d:1,ty:8,tx:137,tz:-900});
		group7.add(mesh);
	var mesh = room.box(10,2,toliet_tex,{d:15,tx:140,ty:8,tz:-910});
		group7.add(mesh);
	
	var mesh = room.box(1,28,yellow_tex,{d:40,tx:152,tz:-900});
		group7.add(mesh);
	var mesh = room.box(15,20,yellow_tex,{d:1,ty:8,tx:152,tz:-900});
		group7.add(mesh);
	var mesh = room.box(10,2,toliet_tex,{d:15,tx:157,ty:8,tz:-910});
		group7.add(mesh);
	
	var mesh = room.box(1,28,yellow_tex,{d:40,tx:167,tz:-900});
		group7.add(mesh);

var mesh = room.box(30,2,table_tex,{d:15,tx:125,ty:10,tz:-837});
		group7.add(mesh);

//wood seat
 var mesh = room.box(70,15,wood2_tex,{d:7,tx:-68,tz:-820});
		group7.add(mesh);
var mesh = room.box(70,5,wood2_tex,{d:28,tx:-68,tz:-820});
		group7.add(mesh);
var mesh = room.box(5,15,wood2_tex,{d:28,tx:2,tz:-820});
		group7.add(mesh);
var mesh = room.box(5,15,wood2_tex,{d:28,tx:-68,tz:-820});
	group7.add(mesh);


//water fountain
var mesh = room.box(2,H,wal_tex,{d:40,tx:85,tz:-940});
		group7.add(mesh);
var mesh = room.box(5,15,water_tex,{d:25,tx:80,ty:10,tz:-940});
		group7.add(mesh);
var mesh = room.box(95,H,wal_tex,{d:10,tx:75,tz:-980});
		group7.add(mesh);
var mesh = room.box(2,10,wal_tex,{d:50,ty:30,tx:75,tz:-980});
		group7.add(mesh);
var mesh = room.box(2,30,bath_tex,{d:45,ty:0,tx:76,tz:-985});
	group7.add(mesh);

//doorway 
var mesh = room.box(95,H,wal_tex,{d:60,tx:75,tz:-1020});
	group7.add(mesh);
var mesh = room.box(20,20,square_tex,{d:10,tx:40,ty:15,tz:-1074});
	group7.add(mesh);
var mesh = room.box(20,20,square_tex,{d:10,tx:-10,ty:15,tz:-1074});
	group7.add(mesh);


//last wall
var mesh = room.box(240,H,wal_tex,{d:2,tx:-70,tz:-1080});
group7.add(mesh);

//sofa chairs
var mesh = room.box(20,8,grey_tex,{d:25,tx:20,ty:0,tz:-1045});
	group7.add(mesh);
var mesh = room.box(20,10,grey_tex,{d:5,tx:20,ty:8,tz:-1065});
	group7.add(mesh);
var mesh = room.box(5,5,grey_tex,{d:20,tx:20,ty:8,tz:-1045});
	group7.add(mesh);
var mesh = room.box(5,5,grey_tex,{d:20,tx:35,ty:8,tz:-1045});
	group7.add(mesh);

var mesh = room.box(20,8,grey_tex,{d:25,tx:50,ty:0,tz:-1045});
	group7.add(mesh);
var mesh = room.box(20,10,grey_tex,{d:5,tx:50,ty:8,tz:-1065});
	group7.add(mesh);
var mesh = room.box(5,5,grey_tex,{d:20,tx:50,ty:8,tz:-1045});
	group7.add(mesh);
var mesh = room.box(5,5,grey_tex,{d:20,tx:65,ty:8,tz:-1045});
	group7.add(mesh);

var mesh = room.box(5,10,wood_tex,{d:5,tx:42,ty:0,tz:-1025});
	group7.add(mesh);
var mesh = room.box(20,1,wood_tex,{d:20,tx:35,ty:10,tz:-1025});
	group7.add(mesh);



//statue
var mesh = room.box(15,15,wood_tex,{d:25,tx:-30,ty:0,tz:-1045});
	group7.add(mesh);
var mesh = room.box(15,10,tube_tex,{d:25,tx:-30,ty:15,tz:-1045});
	group7.add(mesh);

//entry way 
var mesh = room.box(3,4,win_tex,{d:280,ty:36,tx:-69,tz:-800});
	group7.add(mesh);
var mesh = room.box(2,40,win_tex,{d:20,ty:0,tx:-69,tz:-800});
	group7.add(mesh);
var mesh = room.box(2,40,win_tex,{d:20,ty:0,tx:-69,tz:-1060});
	group7.add(mesh);
var mesh = room.box(3,40,left_tex,{d:20,ty:0,tx:-69,tz:-980});
	group7.add(mesh);
var mesh = room.box(3,40,right_tex,{d:20,ty:0,tx:-69,tz:-960});
	group7.add(mesh);

//glass 
var mesh = room.box(1,40,glass_tex,{d:75,ty:0,tx:-68,tz:-1000});
	group7.add(mesh);
var mesh = room.box(1,40,glass_tex,{d:160,ty:0,tx:-68,tz:-800});
	group7.add(mesh);

// posts 
var mesh = room.box(2,40,win_tex,{d:7,ty:0,tx:-69,tz:-1030});
	group7.add(mesh);
var mesh = room.box(2,2,win_tex,{d:60,ty:10,tx:-69,tz:-1000});
	group7.add(mesh);
var mesh = room.box(2,2,win_tex,{d:160,ty:10,tx:-69,tz:-800});
	group7.add(mesh);
var mesh = room.box(2,40,win_tex,{d:7,ty:0,tx:-69,tz:-1000});
	group7.add(mesh);
var mesh = room.box(2,40,win_tex,{d:7,ty:0,tx:-69,tz:-960});
	group7.add(mesh);
var mesh = room.box(2,40,win_tex,{d:7,ty:0,tx:-69,tz:-930});
	group7.add(mesh);
var mesh = room.box(2,40,win_tex,{d:7,ty:0,tx:-69,tz:-900});
	group7.add(mesh);
var mesh = room.box(2,40,win_tex,{d:7,ty:0,tx:-69,tz:-870});
	group7.add(mesh);
var mesh = room.box(2,40,win_tex,{d:7,ty:0,tx:-69,tz:-840});
	group7.add(mesh);



var mesh = room.box(3,4,win_tex,{d:280,ty:36,tx:-119,tz:-800});
	group7.add(mesh);
var mesh = room.box(2,40,win_tex,{d:20,ty:0,tx:-119,tz:-800});
	group7.add(mesh);
var mesh = room.box(2,40,win_tex,{d:20,ty:0,tx:-119,tz:-1060});
	group7.add(mesh);
var mesh = room.box(3,40,left_tex,{d:20,ty:0,tx:-119,tz:-980});
	group7.add(mesh);
var mesh = room.box(3,40,right_tex,{d:20,ty:0,tx:-119,tz:-960});
	group7.add(mesh);

//glass 
var mesh = room.box(1,40,glass_tex,{d:75,ty:0,tx:-118,tz:-1000});
	group7.add(mesh);
var mesh = room.box(1,40,glass_tex,{d:160,ty:0,tx:-118,tz:-800});
	group7.add(mesh);
var mesh = room.box(50,40,glass_tex,{d:2,ty:0,tx:-118,tz:-1080});
	group7.add(mesh);

// posts 
var mesh = room.box(2,40,win_tex,{d:7,ty:0,tx:-119,tz:-1030});
	group7.add(mesh);
var mesh = room.box(2,2,win_tex,{d:60,ty:10,tx:-119,tz:-1000});
	group7.add(mesh);
var mesh = room.box(2,2,win_tex,{d:160,ty:10,tx:-119,tz:-800});
	group7.add(mesh);
var mesh = room.box(2,40,win_tex,{d:7,ty:0,tx:-119,tz:-1000});
	group7.add(mesh);
var mesh = room.box(2,40,win_tex,{d:7,ty:0,tx:-119,tz:-960});
	group7.add(mesh);
var mesh = room.box(2,40,win_tex,{d:7,ty:0,tx:-119,tz:-930});
	group7.add(mesh);
var mesh = room.box(2,40,win_tex,{d:7,ty:0,tx:-119,tz:-900});
	group7.add(mesh);
var mesh = room.box(2,40,win_tex,{d:7,ty:0,tx:-119,tz:-870});
	group7.add(mesh);
var mesh = room.box(2,40,win_tex,{d:7,ty:0,tx:-119,tz:-840});
	group7.add(mesh);

var mesh = room.box(7,40,win_tex,{d:3,ty:0,tx:-70,tz:-1080});
	group7.add(mesh);
var mesh = room.box(7,40,win_tex,{d:3,ty:0,tx:-119,tz:-1080});
	group7.add(mesh);
var mesh = room.box(4,40,win_tex,{d:3,ty:0,tx:-100,tz:-1080});
	group7.add(mesh);
var mesh = room.box(4,40,win_tex,{d:3,ty:0,tx:-85,tz:-1080});
	group7.add(mesh);
var mesh = room.box(50,2,win_tex,{d:3,ty:10,tx:-119,tz:-1080});
	group7.add(mesh);
var mesh = room.box(50,5,win_tex,{d:4,ty:35,tx:-119,tz:-1080});
	group7.add(mesh);


var mesh = room.box(7,40,win_tex,{d:3,ty:0,tx:-70,tz:-800});
	group7.add(mesh);
var mesh = room.box(7,40,win_tex,{d:3,ty:0,tx:-119,tz:-800});
	group7.add(mesh);
var mesh = room.box(4,40,win_tex,{d:3,ty:0,tx:-100,tz:-800});
	group7.add(mesh);
var mesh = room.box(4,40,win_tex,{d:3,ty:0,tx:-85,tz:-800});
	group7.add(mesh);
var mesh = room.box(50,2,win_tex,{d:3,ty:10,tx:-119,tz:-800});
	group7.add(mesh);
var mesh = room.box(50,40,glass_tex,{d:2,ty:0,tx:-118,tz:-800});
	group7.add(mesh);
var mesh = room.box(50,5,win_tex,{d:4,ty:35,tx:-119,tz:-800});
	group7.add(mesh);
var mesh = room.box(55,.5,tile_tex,{d:280,ty:0,tx:-120,tz:-800});
	group7.add(mesh);
var mesh = room.box(55,.5,win_tex,{d:280,ty:40,tx:-120,tz:-800});
	group7.add(mesh);


return group7;
}

group8(){
	var H = 40, W = 235, D = 1000, K = 50, a = 310;
	var group8 = new THREE.Group();  
	var room = new ROOM(W,H,D);
	
	//front outside
	for(let i=0;i < 9;i++){
	
	var mesh = room.box(2,45,long_tex,{tx:-69,ty:0,tz:-260 - (i * 100),d:100});
		group8.add(mesh);
	}
	var mesh = room.box(243,15,black_tex,{d:2,tx:-70,ty:0,tz:-49});
		group8.add(mesh);
	var mesh = room.box(243,30,outside_tex,{d:2,tx:-70,ty:15,tz:-49});
		group8.add(mesh);
	
	var mesh = room.box(237,15,black_tex,{d:2,tx:-63,ty:0,tz:-1441});
		group8.add(mesh);
	var mesh = room.box(237,30,outside_tex,{d:2,tx:-63,ty:15,tz:-1441});
		group8.add(mesh);

for(let i=0;i < 13;i++){
	
	var mesh = room.box(2,45,long_tex,{tx:173,ty:0,tz:-46-(i * 100),d:100});
		group8.add(mesh);
	}
var mesh = room.box(2,45,long_tex,{tx:173,ty:0,tz:-49-(13 * 100),d:94});
		group8.add(mesh);



return group8;
}

}