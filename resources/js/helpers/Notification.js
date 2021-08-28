class Notification {
    success(){
        new Noty({
            type: 'success',
            layout: 'topRight',
            text: 'Successfully Done!',
            timeout: 1000,
            progressBar:true
        }).show();
    }

    alert(){
        new Noty({
            type: 'alert',
            layout: 'topRight',
            text: 'Are You Sure?',
            timeout: 1000,
            progressBar:true
        }).show();
    }

    error(){
        new Noty({
            type: 'error',
            layout: 'topRight',
            text: 'Something went wrong |',
            timeout: 1000,
            progressBar:true
        }).show();
    }

    warning(){
        new Noty({
            type: 'warning',
            layout: 'topRight',
            text: 'OOps! Wrong.',
            timeout: 1000,
            progressBar:true
        }).show();
    }
}

export default Notification = new Notification();
