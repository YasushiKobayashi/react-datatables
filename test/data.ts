import { KeiesType } from '../src/index';
import { ContentsType } from '../src/models/DataTableModel';

const keies: KeiesType = [
  { id: 'id', label: 'id' },
  { id: 'name', label: 'name' },
  { id: 'created', label: 'created' },
];

const contentList = ['React', 'Angular', 'Vue', 'jQuery', 'Backbone'];
const contents: ContentsType = [];

contentList.forEach((v, k) => {
  const id = String(k + 1);
  const label = v;

  const d = new Date(`2013/01/0${id}`);
  const created = d.toLocaleDateString();
  const content = [id, label, created];
  contents.push(content);
});

export { keies, contents };
