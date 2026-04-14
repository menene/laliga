export class Router {
  constructor(routes, container) {
    this.routes = routes;
    this.container = container;
    this.init();
  }

  init() {
    window.addEventListener('popstate', () => this.handleRoute());
    document.addEventListener('click', (e) => {
      if (e.target.matches('[data-link]')) {
        e.preventDefault();
        this.navigateTo(e.target.href);
      }
    });
    this.handleRoute();
  }

  navigateTo(url) {
    history.pushState(null, null, url);
    this.handleRoute();
  }

  handleRoute() {
    const path = window.location.pathname;
    const route = this.matchRoute(path);

    if (route) {
      route.view(this.container, route.params);
    } else {
      // Default to root or 404
      this.navigateTo('/');
    }
  }

  matchRoute(path) {
    for (const route of this.routes) {
      const { pattern, params } = this.parsePattern(route.path, path);
      if (pattern) {
        return { ...route, params };
      }
    }
    return null;
  }

  parsePattern(routePath, actualPath) {
    const routeParts = routePath.split('/').filter(Boolean);
    const actualParts = actualPath.split('/').filter(Boolean);

    if (routeParts.length !== actualParts.length) return { pattern: false };

    const params = {};
    for (let i = 0; i < routeParts.length; i++) {
      if (routeParts[i].startsWith(':')) {
        params[routeParts[i].slice(1)] = actualParts[i];
      } else if (routeParts[i] !== actualParts[i]) {
        return { pattern: false };
      }
    }

    return { pattern: true, params };
  }
}
