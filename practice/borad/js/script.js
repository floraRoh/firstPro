	function valueAlert() {
		oEditors.getById['acontent'].exec("UPDATE_CONTENTS_FIELD", []);

		if($("#atitle").val() ==''){
			alert('제목을 입력하세요');
			$("#atitle").focus();
			return false;
		}

		if($("#acontent").val() ==''){
			alert('내용을 입력하세요');
			$("#acontent").focus();
			return false;
		}

		return true;
	}