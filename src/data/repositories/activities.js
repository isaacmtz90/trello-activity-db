
export default class Activities {
  constructor({ activityModel }) {
    this.model = activityModel;
  }

  getAll(): Promise<Array<any>> {
    return this.model.findAll({ order: ['id'] });
  }

  create(activity: any): Promise<any> {
    return this.model.create(activity);
  }
}
