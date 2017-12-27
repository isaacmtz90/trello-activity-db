
export default class Activities {
  constructor({ activitiesRepository }) {
    this.repository = activitiesRepository;
  }

  feedHistory(): any {
    return this.repository.getAll();
  }
  getAllActivity(): Array<any> {
    return this.repository.getAll();
  }
  createActivity(activity): any {
    return this.repository.create(activity);
  }

}
