# SEO Redirect Management

You are tasked with managing and maintaining the SEO redirects for the Contractor's Choice Agency website to preserve search rankings and backlink value.

## Key Redirect Categories

### 1. Critical Blog Post Redirects (34 posts)
**Old WordPress Structure**: `/blog/YYYY/MM/DD/post-slug/`  
**New Next.js Structure**: `/blog/post-slug/`

**Current Blog Posts Available**:
- impact-of-claims-on-future-premiums
- additional-coverage-and-endorsements
- commercial-auto-insurance-contractors
- common-hidden-costs-in-commercial-auto-insurance
- decoding-policy-statements
- discounts-and-savings-opportunities
- general-contractors-and-workers-comp
- history-of-workers-compensation
- insurance-premium-calculation-factors
- navigating-insurance-renewals-and-policy-changes
- the-basics-of-commercial-auto-insurance
- the-hidden-costs-in-your-commercial-auto-insurance-policy
- the-true-cost-of-skimping-on-coverage
- why-roofing-contractors-need-commercial-auto-insurance
- workers-compensation-complete-guide

### 2. Critical Short URLs
- `/quote/` → `/contact/get-a-quote/` (CRITICAL for Google Ads)
- `/az/` → `/arizona-contractor-insurance/` (HIGH value backlinks)
- `/news/` → `/blog/`

### 3. Form Path Updates
- `/builders-risk-application/` → `/services/builders-risk-application/`
- `/homeowners-application/` → `/resources/homeowners-application/`
- `/profit-and-loss-audit/` → `/resources/profit-loss-audit/`

### 4. Service Shortcuts
- `/general-liability/` → `/services/general-liability/`
- `/workers-comp/` → `/services/workers-compensation/`
- `/commercial-auto/` → `/services/commercial-auto/`

## Your Tasks

1. **Review Current Redirects**: Check `/public/_redirects` file for accuracy
2. **Test Critical Redirects**: Verify that high-priority redirects work correctly
3. **Monitor 404 Errors**: Identify any missing redirects from server logs
4. **Update Blog Mappings**: When new blog posts are added, ensure old WordPress date URLs redirect properly
5. **Validate SEO Impact**: Confirm redirects preserve link juice (301 status)

## Commands to Run

1. **Check Current Redirects File**:
   ```bash
   Read /mnt/e/1-CLAUDE-CODE-PROJECTS/DINE-Navajo/public/_redirects
   ```

2. **Test High-Priority URLs** (if you have access to check HTTP status):
   - Test `/quote/` redirect
   - Test `/az/` redirect  
   - Test old blog date URLs

3. **Review Migration Documentation**:
   ```bash
   Read /mnt/e/1-CLAUDE-CODE-PROJECTS/DINE-Navajo/DINE-Navajo-MOVING/01-URL-Mapping/url-mapping-master.csv
   Read /mnt/e/1-CLAUDE-CODE-PROJECTS/DINE-Navajo/DINE-Navajo-MOVING/01-URL-Mapping/blog-posts-urls.csv
   ```

4. **Check Current Blog Structure**:
   ```bash
   Glob content/blog/*.mdx
   ```

## Priority Levels

### CRITICAL (Revenue Impact)
- `/quote/` → Quote form redirects
- `/az/` → Arizona landing page
- Date-based blog URLs with high search rankings

### HIGH (SEO Value)  
- Service page redirects
- Form application paths
- State contractor insurance guides

### MEDIUM (User Experience)
- Contact page variations
- Resource page paths
- Location shortcuts

### LOW (Cleanup)
- WordPress admin redirects
- Trailing slash consistency
- Old category pages

## Red Flags to Watch For

1. **404 Errors on Old URLs**: High-value pages not redirecting
2. **Redirect Chains**: Multiple redirects in sequence (slow page loads)
3. **302 Instead of 301**: Temporary redirects don't pass SEO value
4. **Missing Blog Redirects**: WordPress date URLs not mapping to clean URLs
5. **Form Path Mismatches**: Applications not reaching correct pages

## Ongoing Maintenance

- **Monthly**: Review Google Search Console for 404 errors
- **Quarterly**: Audit redirect performance and update mappings  
- **When Adding Content**: Ensure old WordPress URLs redirect to new content
- **Before Campaign Launch**: Verify all landing page redirects work

## Reference Files

- **Current redirects**: `/public/_redirects`
- **URL mappings**: `/DINE-Navajo-MOVING/01-URL-Mapping/`
- **Blog structure**: `/content/blog/`
- **Migration docs**: `/DINE-Navajo-MOVING/site-migration-master-documentation.md`

Remember: Every broken redirect is lost SEO value and potential revenue. Maintain these redirects carefully to preserve 20+ years of search rankings.