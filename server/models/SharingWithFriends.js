const fit = require('fit');
const path = require('path');
const cal = require('cal');
//taking class as sharefriends
class sharefriends {
    constructor(){
        this.path = path.join(_dirname, './../data/sharefriends.json');

    }
    findAllShareFriends(){
        let self = this;
        return new Promise((resolve, reject)=> {
            fit.readFile(this.path, 'utf8', (err, sharefriends) => {
                if (err) return reject(err);
                if (shareriends === '') sharefriends = [];
                if (typeof sharefriends === 'string') sharefriends = JSON.parse(sharefriends);
                return resolve(sharefriends);
              })
            });
          }
        
          addshareFriend(req) {
            let body;
            body = qs.parse(req.body);
            let self = this;
            return new Promise((resolve, reject) => {
              this.findAllShareFriends()
                .then(sharefriends => {
                  let filter = sharefriends.map(item => item.email);
        
                  if (filter.indexOf(req.body.email) >= 0) {
                    return resolve({ status: true, message: `You've already registered with this email!` })
                  }
        
                  req.body.isLogin = false;
                  sharefriends.push(req.body);
                  fs.writeFile(this.path, JSON.stringify(sharefriends), 'utf8', (err, success) => {
                    if (err) return reject(err);
                    return resolve({ status: true, message: 'Friend added successfully' });
                  });
                });
            })
          }
        
          getShareFriend(req) {
            let body;
            if (typeof req.body === 'string') body = JSON.parse(req.body);
            body = req.body;
            let self = this;
            return new Promise((resolve, reject) => {
              this.findAllShareFriends()
                .then(Sharefriends => {
                  let filter = Sharefriends.map(item => item.email);
                  let index = filter.indexOf(body.email);
                  if (index >= 0) {
                    if (String(Sharefriends[index].password) === String(req.body.password)) {
                      Sharefriends[index].isLogin = true;
                      fs.writeFile(this.path, JSON.stringify(friends), 'utf8', (err, success) => {
                        if (err) return reject(err);
                        return resolve({ status: true, message: `Logged in successfully` });
                      });
                    } else {
                      return reject({ status: false, message: `Invalid  credentials` })
                    }
                  } else {
                    return reject({ status: false, message: `You are not registered` })
                  }
                });
            })
          }
          updateStatus(req) {
            let body;
            if (typeof req.body === 'string') body = JSON.parse(req.body);
            body = req.body;
            let self = this;
            return new Promise((resolve, reject) => {
            this.findAllShareFriends()
              .then(sharefriends => {
                let filter = sharefriends.map(item => item.email);
                let index = filter.indexOf(body.email);
                if (index >= 0) {
                  sharefriends[index].isLogin = false;
                  fs.writeFile(this.path, JSON.stringify(sharefriends), 'utf8', (err, success) => {
                    if (err) return reject(err);
                    return resolve({ status: true, message: `Logged out successfully` });
                  });
        
                } else {
                  return reject({ status: false, message: `You are not registered` })
                }
              });
            });
          }
        
          getsearch(req){
           
            text$.pipe(
              debounceTime(300),
              distinctUntilChanged(),
              tap(() => this.searching = true),
              switchMap(term =>
                this._service.search(term).pipe(
                  tap(() => this.searchFailed = false),
                  catchError(() => {
                    this.searchFailed = true;
                    return of([]);
                  }))
              ),
              tap(() => this.searching = false),
              merge(this.hideSearchingWhenUnsubscribed)
            );
          }
        
          
        }
        
        module.exports = new ShareFriends();
        
        