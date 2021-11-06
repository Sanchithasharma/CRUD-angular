import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {
  public people: any = [{"id":1,"first_name":"Griff","last_name":"Gypson","email":"ggypson0@yellowpages.com","gender":"Genderqueer","phone_number":"217-362-5390"},
  {"id":2,"first_name":"Jamie","last_name":"Mauditt","email":"jmauditt1@weibo.com","gender":"Genderqueer","phone_number":"369-922-7979"},
  {"id":3,"first_name":"Sylvia","last_name":"Eldred","email":"seldred2@xrea.com","gender":"Bigender","phone_number":"814-122-6598"},
  {"id":4,"first_name":"Andriette","last_name":"Crossfeld","email":"acrossfeld3@howstuffworks.com","gender":"Genderqueer","phone_number":"407-163-7876"},
  {"id":5,"first_name":"Maudie","last_name":"Rosenbusch","email":"mrosenbusch4@businesswire.com","gender":"Non-binary","phone_number":"186-918-8016"},
  {"id":6,"first_name":"Leah","last_name":"Brill","email":"lbrill5@biblegateway.com","gender":"Bigender","phone_number":"420-786-6541"},
  {"id":7,"first_name":"Maye","last_name":"Anstead","email":"manstead6@macromedia.com","gender":"Agender","phone_number":"107-592-8682"},
  {"id":8,"first_name":"Harwilll","last_name":"Conachie","email":"hconachie7@drupal.org","gender":"Female","phone_number":"684-726-6362"},
  {"id":9,"first_name":"Levy","last_name":"Vargas","email":"lvargas8@google.com","gender":"Agender","phone_number":"768-327-0300"},
  {"id":10,"first_name":"Anatola","last_name":"Gecke","email":"agecke9@networkadvertising.org","gender":"Genderqueer","phone_number":"773-988-6976"}];

  constructor() { }
}
