import {
  animate,
  group,
  query,
  style,
  transition,
  trigger
} from "@angular/animations";

export const slideInAnimation = trigger("routeAnimations", [
  // One time initial load. Move page from left -100% to 0%
  transition("-1 => *", [
    query(":enter", [
      style({
        position: "fixed",
        width: "100%",
        transform: "translateX(-100%)"
      }),
      animate("0.5s ease-in-out", style({ transform: "translateX(0%)" }))
    ])
  ]),

  // Previous, slide left to right to show left page
  transition(":decrement", [
    group([
      query(":enter, :leave", style({ position: "fixed", width: "100%" })),
      query(":enter", [
        style({ transform: "translateX(-100%)" }),
        animate("0.5s ease-in-out", style({ transform: "translateX(0%)" }))
      ]),
      query(":leave", [
        style({ transform: "translateX(0%)" }),
        animate("0.5s ease-in-out", style({ transform: "translateX(100%)" }))
      ])
    ])
  ]),

  // Next, slide right to left to show right page
  transition(":increment", [
    group([
      query(":enter, :leave", style({ position: "fixed", width: "100%" })),
      query(":enter", [
        style({ transform: "translateX(100%)" }),
        animate("0.5s ease-in-out", style({ transform: "translateX(0%)" }))
      ]),
      query(":leave", [
        style({ transform: "translateX(0%)" }),
        animate("0.5s ease-in-out", style({ transform: "translateX(-100%)" }))
      ])
    ])
  ])
]);
