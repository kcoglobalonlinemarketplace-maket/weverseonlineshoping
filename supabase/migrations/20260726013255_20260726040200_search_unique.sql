/*
# Add unique constraint on search_index.listing_id
Needed for ON CONFLICT upsert in the sync trigger.
*/
CREATE UNIQUE INDEX IF NOT EXISTS search_index_listing_unique ON public.search_index(listing_id);
