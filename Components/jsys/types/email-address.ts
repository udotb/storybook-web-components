class EmailAddress {
    private email: string;

    constructor(email: string) {
        if (/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)) {
            this.email = email;
        } else {
            throw 'Please enter valid Email Address';
        }
    }

    value() {
        return this.email;
    }
}

export default EmailAddress;
