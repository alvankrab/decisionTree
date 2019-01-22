
var treeData = {
    "label": null,
    "id": null,
    "question": "What product category?",
    "children": [
      {
        "label": "Damit",
        "id": "clothes",
        "question": "What type of clothing?",
        "children": [
          {
            "label": "Jeans",
            "id": "jeans",
            "question": "Color of jeans?",
            "children": [
              {
                "label": "Blue",
                "id": "blue",
                "question": null,
                "children": null
              },
              {
                "label": "Black",
                "id": "black",
                "question": null,
                "children": null
              },
              {
                "label": "White",
                "id": "white",
                "question": null,
                "children": null
              }
            ]
          },
          {
            "label": "Shirt",
            "id": "shirt",
            "question": "Type of shirt?",
            "children": [
              {
                "label": "T-Shirt",
                "id": "tshirt",
                "question": "Color of T-shirt?",
                "children": [
                  {
                    "label": "Red",
                    "id": "red",
                    "question": null,
                    "children": null
                  },
                  {
                    "label": "Green",
                    "id": "green",
                    "question": null,
                    "children": null
                  },
                  {
                    "label": "Black",
                    "id": "black",
                    "question": "Logo?",
                    "children": [
                      {
                        "label": "Rock band",
                        "id": "rockband",
                        "question": null,
                        "children": null
                      },
                      {
                        "label": "TV show",
                        "id": "tvshow",
                        "question": null,
                        "children": null
                      },
                      {
                        "label": "No logo",
                        "id": "nologo",
                        "question": null,
                        "children": null
                      }
                    ]
                  },
                  {
                    "label": "Orange",
                    "id": "orange",
                    "question": null,
                    "children": null
                  }
                ]
              },
              {
                "label": "Hoodie",
                "id": "hoodie",
                "question": "Color of hoodie?",
                "children": [
                  {
                    "label": "Gray",
                    "id": "gray",
                    "question": null,
                    "children": null
                  },
                  {
                    "label": "Blue",
                    "id": "blue",
                    "question": null,
                    "children": [
                      {
                        "label": "TV show",
                        "id": "tvshow",
                        "question": null,
                        "children": null
                      },
                      {
                        "label": "No logo",
                        "id": "nologo",
                        "question": null,
                        "children": null
                      }
                    ]
                  },
                  {
                    "label": "Green",
                    "id": "green",
                    "question": null,
                    "children": null
                  },
                  {
                    "label": "Pink",
                    "id": "pink",
                    "question": null,
                    "children": null
                  },
                  {
                    "label": "Brown",
                    "id": "brown",
                    "question": null,
                    "children": null
                  },
                  {
                    "label": "Black",
                    "id": "black",
                    "question": null,
                    "children": null
                  },
                  {
                    "label": "Red",
                    "id": "red",
                    "question": null,
                    "children": null
                  }
                ]
              },
              {
                "label": "White",
                "id": "white",
                "question": null,
                "children": null
              }
            ]
          },
          {
            "label": "Hat",
            "id": "hat",
            "question": "Type of hat?",
            "children": [
              {
                "label": "Stetson",
                "id": "stetson",
                "question": null,
                "children": null
              },
              {
                "label": "Sombrero",
                "id": "sombrero",
                "question": null,
                "children": null
              }
            ]
          }
        ]
      },
      {
        "label": "Food",
        "id": "food",
        "question": "Type of food?",
        "children": [
          {
            "label": "Ramen noodles",
            "id": "ramen",
            "question": null,
            "children": null
          },
          {
            "label": "Soda pop",
            "id": "soda",
            "question": "What Soda?",
            "children": [
              {
                "label": "Cola",
                "id": "cola",
                "question": null,
                "children": null
              },
              {
                "label": "Lemon",
                "id": "lemon",
                "question": null,
                "children": null
              },
              {
                "label": "Orange",
                "id": "orange",
                "question": null,
                "children": null
              },
              {
                "label": "Apple",
                "id": "apple",
                "question": null,
                "children": null
              }
            ]
          },
          {
            "label": "Bananas",
            "id": "bananas",
            "question": null,
            "children": null
          }
        ]
      }
    ]
  };

$(document).ready(function() { 
  updateQuestion(treeData, true);
    
    $('#restart').click(function () {
      updateQuestion(treeData, true);
    });
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('/sw.js').then(function(){
        console.log('yo!');
      })};
    }

});

function getAnswers(children) {
  if (children) {
    _.forEach(children, function(data) {
        $('#question').append('<button id="' + data.id + '">' + data.label + '</button> <br/>');
        $('#' + data.id).click(function () {
            if ($('#app').hasClass('bg-one')) {
              $('#app').removeClass('bg-one');
              $('#app').addClass('bg-two');
            } else {
              $('#app').removeClass('bg-two');
              $('#app').addClass('bg-one');
            }
            updateQuestion(data);
        });
    });
  }
  else {
    $('#question').append('<div>-- END --</div>');
  }
}

function updateQuestion(question, isRestarted) {
    isRestarted = isRestarted || false;
    if(isRestarted) {
      $('#question').html('<span class="glyphicon glyphicon-asterisk"></span><h2>Start</h2>');
    }
    else {
      $('#question').html('<span class="glyphicon glyphicon-asterisk"></span><h2>' + question.label + '</h2>');
    }
    if (question.question) {
      $('#question').append('<div class="question">' + question.question + '</div>');
    }
    getAnswers(question.children);
}
