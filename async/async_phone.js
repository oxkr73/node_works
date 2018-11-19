const isMomHappy = true;

const willIGetNewPhone = async () => {
  let response;

  if (isMomHappy) {
    const phone = {
      brand: "Samsung",
      color: "black"
    };
    response = await phone;
  } else {
    const reason = new Error("mom is not happy");
    response = await reason;
  }

  return response;
};

const showOff = function(phone) {
  const message =
    "Hey friend, I have a new " + phone.color + " " + phone.brand + " phone";
  return Promise.resolve(message);
};

const askMom = function() {
  console.log(willIGetNewPhone());
  /*.then(showOff)
    .then(fulfilled => console.log(fulfilled))
    .catch(error => console.log(error.message));*/
};
askMom();
