class ApiHandler{
    getData(url, onSuccess, onError) {
          fetch(url)
            .then((x) => {
              if (x.status == 200) {
                return x.json();
              } else {
                throw new Error('Exception');
              }
            })
            .then((y) => {
              onSuccess(y);
            })
            .catch((z) => onError(z));
    }
}