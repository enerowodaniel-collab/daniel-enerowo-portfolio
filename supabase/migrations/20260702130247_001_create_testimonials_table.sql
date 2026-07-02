-- Create testimonials table for client reviews
CREATE TABLE testimonials (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  service TEXT NOT NULL,
  rating INTEGER NOT NULL CHECK (rating >= 1 AND rating <= 5),
  review TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Enable RLS
ALTER TABLE testimonials ENABLE ROW LEVEL SECURITY;

-- Create policies for public access (no auth required for this portfolio)
CREATE POLICY "select_testimonials" ON testimonials FOR SELECT
  TO anon, authenticated USING (true);

CREATE POLICY "insert_testimonials" ON testimonials FOR INSERT
  TO anon, authenticated WITH CHECK (true);

-- Create index for sorting by created_at
CREATE INDEX testimonials_created_at_idx ON testimonials (created_at DESC);