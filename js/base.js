window.onload = function(){
	document.getElementById('myform').onsubmit = function(){
		if(this.userName.value.trim() == "" || this.userPass.value.trim() == ""||this.code.value.trim()==""){
			alert('请输入完整信息！');
			return false;
		}
		this.action = 'index.html';
	};
};