import type {StructureResolver} from 'sanity/structure'

export const structure: StructureResolver = (S) =>
  S.list()
    .title('Portfolio')
    .items([
      S.documentTypeListItem('caseStudy').title('Case Studies'),
      S.documentTypeListItem('category').title('Categories'),
      S.documentTypeListItem('author').title('Authors'),
      S.divider(),
      ...S.documentTypeListItems().filter(
        (item) => item.getId() && !['caseStudy', 'category', 'author'].includes(item.getId()!),
      ),
    ])