import { Observable, defer, timer } from 'rxjs';
import { materialize, dematerialize, mergeMap, map } from 'rxjs';

export function minDuration<T>(ms: number) {
  return (source: Observable<T>) => defer(() => {
    const started = Date.now();
    return source.pipe(
      materialize(),
      mergeMap(n => {
        const elapsed = Date.now() - started;
        const remain = Math.max(ms - elapsed, 0);
        return timer(remain).pipe(map(() => n));
      }),
      dematerialize()
    );
  });
}
