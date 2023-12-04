// eslint-disable-next-line max-classes-per-file
export default class Plan {
  planId: string;

  planImg: string;

  planTitle: string;

  planSubTitle: string;

  constructor(builder: PlanBuilder) {
    this.planId = builder.planId;
    this.planImg = builder.planImg;
    this.planTitle = builder.planTitle;
    this.planSubTitle = builder.planSubTitle;
  }

  static get Builder() {
    return new PlanBuilder();
  }
}

class PlanBuilder {
  planId: string = '';

  planImg: string = '';

  planTitle: string = '';

  planSubTitle: string = '';

  withPlanId(planId: string): PlanBuilder {
    this.planId = planId;
    return this;
  }

  withPlanImg(planImg: string): PlanBuilder {
    this.planImg = planImg;
    return this;
  }

  withPlanTitle(planTitle: string): PlanBuilder {
    this.planTitle = planTitle;
    return this;
  }

  withPlanSubTitle(planSubTitle: string): PlanBuilder {
    this.planSubTitle = planSubTitle;
    return this;
  }

  build(): Plan {
    return new Plan(this);
  }
}
