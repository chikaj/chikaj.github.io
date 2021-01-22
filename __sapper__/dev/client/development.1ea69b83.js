import { S as SvelteComponentDev, i as init, s as safe_not_equal, d as dispatch_dev, v as validate_slots, a as space, e as element, t as text, q as query_selector_all, b as detach_dev, c as claim_space, f as claim_element, g as children, h as claim_text, k as add_location, j as attr_dev, l as insert_dev, m as append_dev, n as noop } from './client.11089c8f.js';

/* src/routes/development.svelte generated by Svelte v3.31.2 */

const file = "src/routes/development.svelte";

function create_fragment(ctx) {
	let t0;
	let h2;
	let t1;
	let t2;
	let p0;
	let t3;
	let t4;
	let p1;
	let t5;
	let a0;
	let t6;
	let t7;
	let a1;
	let t8;
	let t9;
	let a2;
	let t10;
	let t11;
	let a3;
	let t12;
	let t13;
	let p2;
	let t14;
	let a4;
	let t15;
	let t16;
	let a5;
	let t17;
	let t18;
	let t19;
	let p3;
	let t20;

	const block = {
		c: function create() {
			t0 = space();
			h2 = element("h2");
			t1 = text("Development");
			t2 = space();
			p0 = element("p");
			t3 = text("I like to build interesting things and I use a variety of tools to do that.");
			t4 = space();
			p1 = element("p");
			t5 = text("For building database backends and APIs, I use ");
			a0 = element("a");
			t6 = text("Django");
			t7 = text("\n    and ");
			a1 = element("a");
			t8 = text("Django Rest Framework");
			t9 = text(". Even\n    ");
			a2 = element("a");
			t10 = text("GeoDjango");
			t11 = text(" and\n    ");
			a3 = element("a");
			t12 = text("Django Rest Framework GIS");
			t13 = space();
			p2 = element("p");
			t14 = text("For frontend development, I really enjoy ");
			a4 = element("a");
			t15 = text("Svelte");
			t16 = text(".\n    This website was built using ");
			a5 = element("a");
			t17 = text("Sapper");
			t18 = text(",\n    which is based on Svelte.");
			t19 = space();
			p3 = element("p");
			t20 = text("For data science, I usually stick with Python, including Jupyter Labs. Some\n    of my favorite packages include rasterio and geopandas.");
			this.h();
		},
		l: function claim(nodes) {
			const head_nodes = query_selector_all("[data-svelte=\"svelte-1kpqy0v\"]", document.head);
			head_nodes.forEach(detach_dev);
			t0 = claim_space(nodes);
			h2 = claim_element(nodes, "H2", {});
			var h2_nodes = children(h2);
			t1 = claim_text(h2_nodes, "Development");
			h2_nodes.forEach(detach_dev);
			t2 = claim_space(nodes);
			p0 = claim_element(nodes, "P", {});
			var p0_nodes = children(p0);
			t3 = claim_text(p0_nodes, "I like to build interesting things and I use a variety of tools to do that.");
			p0_nodes.forEach(detach_dev);
			t4 = claim_space(nodes);
			p1 = claim_element(nodes, "P", {});
			var p1_nodes = children(p1);
			t5 = claim_text(p1_nodes, "For building database backends and APIs, I use ");
			a0 = claim_element(p1_nodes, "A", { href: true });
			var a0_nodes = children(a0);
			t6 = claim_text(a0_nodes, "Django");
			a0_nodes.forEach(detach_dev);
			t7 = claim_text(p1_nodes, "\n    and ");
			a1 = claim_element(p1_nodes, "A", { href: true });
			var a1_nodes = children(a1);
			t8 = claim_text(a1_nodes, "Django Rest Framework");
			a1_nodes.forEach(detach_dev);
			t9 = claim_text(p1_nodes, ". Even\n    ");
			a2 = claim_element(p1_nodes, "A", { href: true });
			var a2_nodes = children(a2);
			t10 = claim_text(a2_nodes, "GeoDjango");
			a2_nodes.forEach(detach_dev);
			t11 = claim_text(p1_nodes, " and\n    ");
			a3 = claim_element(p1_nodes, "A", { href: true });
			var a3_nodes = children(a3);
			t12 = claim_text(a3_nodes, "Django Rest Framework GIS");
			a3_nodes.forEach(detach_dev);
			p1_nodes.forEach(detach_dev);
			t13 = claim_space(nodes);
			p2 = claim_element(nodes, "P", {});
			var p2_nodes = children(p2);
			t14 = claim_text(p2_nodes, "For frontend development, I really enjoy ");
			a4 = claim_element(p2_nodes, "A", { href: true });
			var a4_nodes = children(a4);
			t15 = claim_text(a4_nodes, "Svelte");
			a4_nodes.forEach(detach_dev);
			t16 = claim_text(p2_nodes, ".\n    This website was built using ");
			a5 = claim_element(p2_nodes, "A", { href: true });
			var a5_nodes = children(a5);
			t17 = claim_text(a5_nodes, "Sapper");
			a5_nodes.forEach(detach_dev);
			t18 = claim_text(p2_nodes, ",\n    which is based on Svelte.");
			p2_nodes.forEach(detach_dev);
			t19 = claim_space(nodes);
			p3 = claim_element(nodes, "P", {});
			var p3_nodes = children(p3);
			t20 = claim_text(p3_nodes, "For data science, I usually stick with Python, including Jupyter Labs. Some\n    of my favorite packages include rasterio and geopandas.");
			p3_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			document.title = "Development";
			add_location(h2, file, 4, 0, 58);
			add_location(p0, file, 8, 0, 86);
			attr_dev(a0, "href", "https://www.djangoproject.com");
			add_location(a0, file, 12, 51, 230);
			attr_dev(a1, "href", "https://www.django-rest-framework.org");
			add_location(a1, file, 13, 8, 289);
			attr_dev(a2, "href", "https://docs.djangoproject.com/en/3.1/ref/contrib/gis/");
			add_location(a2, file, 14, 4, 373);
			attr_dev(a3, "href", "https://github.com/openwisp/django-rest-framework-gis");
			add_location(a3, file, 15, 4, 460);
			add_location(p1, file, 11, 0, 175);
			attr_dev(a4, "href", "https://svelte.dev");
			add_location(a4, file, 18, 45, 609);
			attr_dev(a5, "href", "https://sapper.svelte.dev");
			add_location(a5, file, 19, 33, 683);
			add_location(p2, file, 17, 0, 560);
			add_location(p3, file, 22, 0, 766);
		},
		m: function mount(target, anchor) {
			insert_dev(target, t0, anchor);
			insert_dev(target, h2, anchor);
			append_dev(h2, t1);
			insert_dev(target, t2, anchor);
			insert_dev(target, p0, anchor);
			append_dev(p0, t3);
			insert_dev(target, t4, anchor);
			insert_dev(target, p1, anchor);
			append_dev(p1, t5);
			append_dev(p1, a0);
			append_dev(a0, t6);
			append_dev(p1, t7);
			append_dev(p1, a1);
			append_dev(a1, t8);
			append_dev(p1, t9);
			append_dev(p1, a2);
			append_dev(a2, t10);
			append_dev(p1, t11);
			append_dev(p1, a3);
			append_dev(a3, t12);
			insert_dev(target, t13, anchor);
			insert_dev(target, p2, anchor);
			append_dev(p2, t14);
			append_dev(p2, a4);
			append_dev(a4, t15);
			append_dev(p2, t16);
			append_dev(p2, a5);
			append_dev(a5, t17);
			append_dev(p2, t18);
			insert_dev(target, t19, anchor);
			insert_dev(target, p3, anchor);
			append_dev(p3, t20);
		},
		p: noop,
		i: noop,
		o: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(t0);
			if (detaching) detach_dev(h2);
			if (detaching) detach_dev(t2);
			if (detaching) detach_dev(p0);
			if (detaching) detach_dev(t4);
			if (detaching) detach_dev(p1);
			if (detaching) detach_dev(t13);
			if (detaching) detach_dev(p2);
			if (detaching) detach_dev(t19);
			if (detaching) detach_dev(p3);
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
	validate_slots("Development", slots, []);
	const writable_props = [];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Development> was created with unknown prop '${key}'`);
	});

	return [];
}

class Development extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Development",
			options,
			id: create_fragment.name
		});
	}
}

export default Development;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGV2ZWxvcG1lbnQuMWVhNjliODMuanMiLCJzb3VyY2VzIjpbXSwic291cmNlc0NvbnRlbnQiOltdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsifQ==
