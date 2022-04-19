
urlActionMulDownload= '/unionFile/downloadZip'
const ids = [1,3,4,5,6,6,7,9]

postUrl=(url, params)=> {
    console.log(1);
    // var temp_form = document.createElement("form");
    // temp_form.action = url;
    // temp_form.target = "_self";
    // temp_form.method = "post";
    // temp_form.style.display = "none";
    console.log(params);
    for (var x in params) {
    //   var opt = document.createElement("input")
    //   opt.name = x;
    //   opt.value = params[x];
    //   temp_form.appendChild(opt)
    console.log(x);
    }
    // document.body.appendChild(temp_form);

    // temp_form.submit()
  }
  mulDownload=()=> {
    postUrl(urlActionMulDownload, {"fileIds": /* JSON.stringify(ids) */ids})
  }
  mulDownload()