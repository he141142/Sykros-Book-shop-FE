var axios = require('axios');
var data = JSON.stringify({
  "form_id": 27,
  "key": "reand_27",
  "value": "value_form_id27",
  "created_by": 27
});

var config = {
  method: 'post',
  url: 'localhost:3001/api/v1/form/metadata',
  headers: { 
    'Content-Type': 'application/json'
  },
  data : data
};

for(let i =0;i<10;i++){
axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.data));
})
.catch(function (error) {
//   console.log(error);
});

}



