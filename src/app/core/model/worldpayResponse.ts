
export interface Link {
  href: string;
}

export interface Currie {
  name: string;
  href: string;
  templated: boolean;
}

export interface WorldPayResponse {

  outcome: string;
  _links: {
    'payments:authorize'?: Link;
    'payments:cancel'?: Link;
    'payments:settle'?: Link;
    'payments:partialSettle'?: Link;
    'payments:events'?: Link;
    curies: Currie[];
  };
}
