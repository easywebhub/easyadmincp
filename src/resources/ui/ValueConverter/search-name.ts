export class SearchNameValueConverter {
  toView(array, obj) {

    if (obj == "") {
      return array;
    } else if (obj) {
      let filteredArr = array.filter(x => x.Name.toLowerCase().indexOf(obj.toLowerCase()) != -1);

      return filteredArr;
    }
    return array;
  }
}
