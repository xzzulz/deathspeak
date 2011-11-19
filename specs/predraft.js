
var obj = function() {

	var priv = {}
	
	priv.a = 2
	
	priv.b = 3
	
	
	
	priv.sum = function() {
		
		return priv.a + priv.b
	}
	
	
	
	var pub = {}
	
	
	pub.sum2 = function() {
		
		return priv.sum() + priv.sum()
	}


	var 


	return pub
}()


var obj2 = function() {


	prot = obj







	
	var pub = {}
	
	pub.sum3 
	
	
	
	return pub
}()







