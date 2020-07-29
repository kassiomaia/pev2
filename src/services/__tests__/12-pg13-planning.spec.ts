import { PlanService } from '@/services/plan-service';
import * as _ from 'lodash';
import * as fs from 'fs';
import * as path from 'path';

const dir = path.dirname(module.filename);
describe('Can parse PG13 planning stats', () => {
  test('', () => {
    const planFile = path.join(dir, '12-pg13-planning.plan');
    const planSrc = fs.readFileSync(planFile, {encoding: 'utf-8'});
    const planService = new PlanService();
    const r = planService.fromSource(planSrc);
    // Test will fail if service is unable to parse fil
    expect(r.Plan['Planning Time']).toEqual(0.718);
  });
});
