export class InMemoryDataService {
  createDb() {
    let invoices = [
      {id: 11, name: 'Invoice 1'},
      {id: 12, name: 'Invoice 2'},
      {id: 13, name: 'Invoice 3'},
      {id: 14, name: 'Invoice 4'},
      {id: 15, name: 'Invoice 5'},
      {id: 16, name: 'Invoice 6'},
      {id: 17, name: 'Invoice 7'},
      {id: 18, name: 'Invoice 8'},
      {id: 19, name: 'Invoice 9'},
      {id: 20, name: 'Invoice 10'}
    ];
    return {invoices};
  }
}