function async(callback) {
    setTimeout(() => {
        try {
            let a = 3 + z;
            callback(null, a)
        } catch (err) {
            callback(err);
        }
    }, 1000)
}

async((err, data) => {
    if (err) {
        console.error('We have an error');
        console.error(err);
        return false;
        // throw err; // THIS DOESN'T WORK
    }

    console.log('All went well, my data is:', data);
})