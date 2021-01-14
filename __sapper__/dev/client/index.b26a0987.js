import { S as SvelteComponentDev, i as init, s as safe_not_equal, d as dispatch_dev, v as validate_slots, a as space, e as element, t as text, q as query_selector_all, b as detach_dev, c as claim_space, f as claim_element, g as children, h as claim_text, j as add_location, k as insert_dev, l as append_dev, n as noop } from './client.a4bd28b7.js';

var successkid = "/client/465898c830bb9d2c.jpg";

/* src/routes/index.svelte generated by Svelte v3.31.2 */
const file = "src/routes/index.svelte";

function create_fragment(ctx) {
	let t0;
	let h2;
	let t1;

	const block = {
		c: function create() {
			t0 = space();
			h2 = element("h2");
			t1 = text("Nate Currit");
			this.h();
		},
		l: function claim(nodes) {
			const head_nodes = query_selector_all("[data-svelte=\"svelte-5p0wg0\"]", document.head);
			head_nodes.forEach(detach_dev);
			t0 = claim_space(nodes);
			h2 = claim_element(nodes, "H2", {});
			var h2_nodes = children(h2);
			t1 = claim_text(h2_nodes, "Nate Currit");
			h2_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			document.title = "chikaj";
			add_location(h2, file, 42, 0, 496);
		},
		m: function mount(target, anchor) {
			insert_dev(target, t0, anchor);
			insert_dev(target, h2, anchor);
			append_dev(h2, t1);
		},
		p: noop,
		i: noop,
		o: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(t0);
			if (detaching) detach_dev(h2);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_fragment.name,
		type: "component",
		source: "",
		ctx
	});

	return block;
}

function instance($$self, $$props, $$invalidate) {
	let { $$slots: slots = {}, $$scope } = $$props;
	validate_slots("Routes", slots, []);
	const writable_props = [];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Routes> was created with unknown prop '${key}'`);
	});

	$$self.$capture_state = () => ({ successkid });
	return [];
}

class Routes extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Routes",
			options,
			id: create_fragment.name
		});
	}
}

export default Routes;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYjI2YTA5ODcuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlX21vZHVsZXMvaW1hZ2VzL3N1Y2Nlc3NraWQuanBnIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IFwiL2NsaWVudC80NjU4OThjODMwYmI5ZDJjLmpwZ1wiIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsaUJBQWU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7In0=
