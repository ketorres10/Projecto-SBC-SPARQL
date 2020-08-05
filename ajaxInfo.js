function addRowHandlers() {
    
    var table = document.getElementById("resultado");
    var rows = table.getElementsByTagName("tr");
    let resultadop = document.querySelector("#resultadop");
    
    for (i = 0; i < rows.length; i++) {
      var currentRow = table.rows[i];
      var createClickHandler = function(row) {
        return function() {
          var cell = row.getElementsByTagName("td")[0];
          var id = cell.innerHTML;
          cell.innerHTML += `<div class="card">
          <div class="card-body">${id}</div></div>`;

          alert("id:" + id);
        };
      };
      currentRow.onclick = createClickHandler(currentRow);
    }
  }