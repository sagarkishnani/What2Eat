const ul = document.getElementById("authors");
function createNode(element) {
	return document.createElement(element);
}
function append(parent, el) {
	return parent.appendChild(el);
}
window.onload = fetchData("https://api.jsonbin.io/b/61c7e518f8c69823dd41bd53");
var datum = [];

function fetchData(url) {
	var data = "";
	fetch(url)
		.then((resp) => resp.json())
		.then(function (data) {
			data = displayData(data);
			return data;
		})
		.catch(function (error) {
			return data;
		});
}

function displayData(dishes) {
	return dishes.map(function (dish, index) {
		datum.push(dish);
		let li = createNode("li"),
			figure = createNode("figure");
		(img = createNode("img")),
			(strong = createNode("strong")),
			(span = createNode("span"));
		a = createNode("a");
		addBtn = createNode("a");
		strong.innerHTML = `${dish.name}`;
		span.innerHTML = `${dish.country}`;
		a.innerHTML = `${dish.meat}`;
		append(li, figure);
		append(li, strong);
		append(li, span);
		append(li, a);
		append(li, address);
		append(li, addBtn);
		append(ul, li);
	});
}

function prepareList(dish) {
	var results = "";
	results = `<li><strong>${dish.name}\n
                <span>${dish.country}</span>\n
                <span>${dish.meat}</span>\n
                </li>`;
	return results;
}
/*-----------filter----------*/
function filter() {
	const ul = document.getElementById("authors");
	var a = document.getElementById("select");
	var b = a.options[a.selectedIndex].value;
	var items = document.getElementsByName("acs");
	var selectedItems = [];
	for (var i = 0; i < items.length; i++) {
		if (items[i].type == "checkbox" && items[i].checked == true) {
			selectedItems.push(items[i].value);
		}
	}
	var showresults = prepareFilterData(datum, b, selectedItems);
	console.log(showresults);
	showresults ? counterResults(showresults) : null;
}

function counterResults(showresults) {
	if (showresults["count"] > 0) {
		ul.innerHTML = showresults["results"];
	} else {
		ul.innerHTML = "No results found";
	}
}

function prepareFilterData(datum, b, selectedItems) {
	var results = "";
	var count = 0;
	datum.map(function (dish) {
		if (b === dish.country) {
			if (selectedItems.length == 0) {
				count++;
				results += prepareList(dish);
			} else {
				for (var i = 0; i < selectedItems.length; i++) {
					if (dish.meat === selectedItems[i]) {
						count++;
						console.log(dish.country, i);
						results += prepareList(dish);
					}
				}
			}
		} else if (b === "all") {
			console.log(b);
			if (selectedItems.length == 0) {
				count++;
				results += prepareList(dish);
			}
			for (var i = 0; i < selectedItems.length; i++) {
				if (dish.meat === selectedItems[i]) {
					count++;
					results += prepareList(dish);
				}
			}
			console.log(results);
		}
	});

	return { count: count, results: results };
}