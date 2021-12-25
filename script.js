     var diseases = [];
      var myList = document.getElementById("myList");
      function data() {
        myList.innerHTML = "";
        var body_part = document.getElementById("body_part").value;
        fetch(`https://healthwise.p.rapidapi.com/body/diseases/${body_part}`, {
          method: "GET",
          credentials: "omit",
          headers: {
            "x-rapidapi-host": "healthwise.p.rapidapi.com",
            "x-rapidapi-key":
              "1c3194eaacmsh0679b7666062122p115ac7jsn58ae6ac30aa6",
          },
        })
          .then((response) => {
            response
              .json()
              .then((res) => {
                var i = res.data.result[0].causes.length;
                for (var j = 0; j < i; j++) {
                  console.log(res.data.result[0].causes[j].illness);
                  diseases.push(res.data.result[0].causes[j].illness);
                  var node = document.createElement("LI");
                  var textnode = document.createTextNode(
                    res.data.result[0].causes[j].illness
                  );
                  node.appendChild(textnode);
                  myList.appendChild(node);
                }
              })
              .catch((err) => {
                var node = document.createElement("LI");
                var textnode = document.createTextNode("No Diseases Found");
                node.appendChild(textnode);
                myList.appendChild(node);
              });
          })
          .catch((err) => {
            console.error(err);
          });
      }
