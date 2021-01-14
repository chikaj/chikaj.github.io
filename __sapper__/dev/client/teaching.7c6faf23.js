import { S as SvelteComponentDev, i as init, s as safe_not_equal, d as dispatch_dev, v as validate_slots, e as element, t as text, a as space, f as claim_element, g as children, h as claim_text, b as detach_dev, c as claim_space, j as add_location, m as attr_dev, k as insert_dev, l as append_dev, n as noop } from './client.55d1c980.js';

/* src/routes/teaching.svelte generated by Svelte v3.31.2 */

const file = "src/routes/teaching.svelte";

function create_fragment(ctx) {
	let h3;
	let t0;
	let t1;
	let ul;
	let li0;
	let strong;
	let t2;
	let t3;
	let span0;
	let t4;
	let t5;
	let p;
	let t6;
	let t7;
	let li1;
	let t8;
	let span1;
	let t9;

	const block = {
		c: function create() {
			h3 = element("h3");
			t0 = text("Regularly taught University courses");
			t1 = space();
			ul = element("ul");
			li0 = element("li");
			strong = element("strong");
			t2 = text("Geographic Applications of Remote Sensing");
			t3 = space();
			span0 = element("span");
			t4 = text("(Graduate)");
			t5 = space();
			p = element("p");
			t6 = text("The is an accelerated course.");
			t7 = space();
			li1 = element("li");
			t8 = text("Remote Sensing and Earth Observation ");
			span1 = element("span");
			t9 = text("(Undergraduate)");
			this.h();
		},
		l: function claim(nodes) {
			h3 = claim_element(nodes, "H3", {});
			var h3_nodes = children(h3);
			t0 = claim_text(h3_nodes, "Regularly taught University courses");
			h3_nodes.forEach(detach_dev);
			t1 = claim_space(nodes);
			ul = claim_element(nodes, "UL", {});
			var ul_nodes = children(ul);
			li0 = claim_element(ul_nodes, "LI", {});
			var li0_nodes = children(li0);
			strong = claim_element(li0_nodes, "STRONG", {});
			var strong_nodes = children(strong);
			t2 = claim_text(strong_nodes, "Geographic Applications of Remote Sensing");
			strong_nodes.forEach(detach_dev);
			t3 = claim_space(li0_nodes);
			span0 = claim_element(li0_nodes, "SPAN", { class: true });
			var span0_nodes = children(span0);
			t4 = claim_text(span0_nodes, "(Graduate)");
			span0_nodes.forEach(detach_dev);
			t5 = claim_space(li0_nodes);
			p = claim_element(li0_nodes, "P", {});
			var p_nodes = children(p);
			t6 = claim_text(p_nodes, "The is an accelerated course.");
			p_nodes.forEach(detach_dev);
			li0_nodes.forEach(detach_dev);
			t7 = claim_space(ul_nodes);
			li1 = claim_element(ul_nodes, "LI", {});
			var li1_nodes = children(li1);
			t8 = claim_text(li1_nodes, "Remote Sensing and Earth Observation ");
			span1 = claim_element(li1_nodes, "SPAN", { class: true });
			var span1_nodes = children(span1);
			t9 = claim_text(span1_nodes, "(Undergraduate)");
			span1_nodes.forEach(detach_dev);
			li1_nodes.forEach(detach_dev);
			ul_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			add_location(h3, file, 0, 0, 0);
			add_location(strong, file, 3, 8, 67);
			attr_dev(span0, "class", "level svelte-m1f86x");
			add_location(span0, file, 3, 67, 126);
			add_location(p, file, 4, 8, 172);
			add_location(li0, file, 2, 4, 54);
			attr_dev(span1, "class", "level svelte-m1f86x");
			add_location(span1, file, 6, 45, 264);
			add_location(li1, file, 6, 4, 223);
			add_location(ul, file, 1, 0, 45);
		},
		m: function mount(target, anchor) {
			insert_dev(target, h3, anchor);
			append_dev(h3, t0);
			insert_dev(target, t1, anchor);
			insert_dev(target, ul, anchor);
			append_dev(ul, li0);
			append_dev(li0, strong);
			append_dev(strong, t2);
			append_dev(li0, t3);
			append_dev(li0, span0);
			append_dev(span0, t4);
			append_dev(li0, t5);
			append_dev(li0, p);
			append_dev(p, t6);
			append_dev(ul, t7);
			append_dev(ul, li1);
			append_dev(li1, t8);
			append_dev(li1, span1);
			append_dev(span1, t9);
		},
		p: noop,
		i: noop,
		o: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(h3);
			if (detaching) detach_dev(t1);
			if (detaching) detach_dev(ul);
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

function instance($$self, $$props) {
	let { $$slots: slots = {}, $$scope } = $$props;
	validate_slots("Teaching", slots, []);
	const writable_props = [];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Teaching> was created with unknown prop '${key}'`);
	});

	return [];
}

class Teaching extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Teaching",
			options,
			id: create_fragment.name
		});
	}
}

export default Teaching;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVhY2hpbmcuN2M2ZmFmMjMuanMiLCJzb3VyY2VzIjpbXSwic291cmNlc0NvbnRlbnQiOltdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyJ9
