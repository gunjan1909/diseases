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
                alert(
                  "Choose among : | 1 | brain | 2 | eyes | 3 | ears | 4 | nose | 5 | lips | 6 |tongue | 7 | jaw | 8 | neck | 9 | esophagus | 10 | lung | 11 | heart | 12 | rightarm | 13 | leftarm | 14 | elbows | 15 | hands | 16 | fingers | 17 | liver | 18 | spleen | 19 | stomach | 20 | pancreas | 21 | gallbladder | 22 | kidneys | 23 | smallintestin | | 24 | colon | | 25 | bladder | | 26 | testicles | | 27 | vagina | | 28 | malegenital | 29 | femalegenital | | 30 | anus | | 31 | leftleg | 32 | right_leg | 33 | knees | 34 | foot | 35 | heel | 36 | toes |"
                );
              });
          })
          .catch((err) => {
            console.error(err);
          });
      }
