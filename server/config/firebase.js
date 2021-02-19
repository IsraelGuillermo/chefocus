
const storage = firebase.storage().ref();


const metaData = {
    contentType: "image/jpeg"
};
const uploadTask = storage.child("images").put(file, metaData);

uploadTask.on("state_changed" ,
    (snapshot) => {

    }
)


